/**
 * Personalised Wedding Invitation Utilities
 * Safe URL parameter parsing, random message selection,
 * iCalendar (.ics) generator, and Canvas-based digital invitation download.
 */

export const INVITATION_MESSAGES = [
  'Your presence will make our celebration even more special.',
  "A beautiful celebration awaits, and we can't wait to see you there.",
  'Save the date. A memorable evening is waiting for us.',
  'The best moments are made even better with friends like you.',
  'Your seat is waiting. Let the celebrations begin!',
] as const;

export interface GuestUrlParams {
  guestName: string | null;
  isDemoGuest: boolean;
}

/**
 * Safely parse and sanitize guest URL parameters from window.location.search.
 * Treats inputs as untrusted, prevents XSS, and handles malformed percent encoding gracefully.
 */
export function getGuestParams(): GuestUrlParams {
  if (typeof window === 'undefined' || !window.location.search) {
    return { guestName: null, isDemoGuest: false };
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const rawGuest = params.get('guest');
    const rawDemo = params.get('demoGuest') || params.get('demo');

    let guestName: string | null = null;

    if (rawGuest) {
      let decoded = '';
      try {
        decoded = decodeURIComponent(rawGuest.replace(/\+/g, ' '));
      } catch {
        decoded = rawGuest;
      }

      // Sanitize: strip script tags, angles, and control characters
      const sanitized = decoded
        .replace(/[<>"/\\{}[\]]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (sanitized.length > 0) {
        guestName = sanitized.slice(0, 50);
      }
    }

    const isDemoGuest =
      rawDemo === '1' ||
      rawDemo?.toLowerCase() === 'true' ||
      rawDemo === 'yes';

    return { guestName, isDemoGuest };
  } catch {
    return { guestName: null, isDemoGuest: false };
  }
}

/**
 * Randomly pick an invitation message from the approved list.
 */
export function getRandomInvitationMessage(): string {
  const index = Math.floor(Math.random() * INVITATION_MESSAGES.length);
  return INVITATION_MESSAGES[index];
}

/**
 * Generate a valid RFC 5545 iCalendar (.ics) string.
 * Event: 18 February 2027, 5:00 PM IST (UTC 11:30) in Udaipur, Rajasthan, India.
 */
export function generateCalendarIcs(params: {
  guestName?: string;
  selectedMessage?: string;
}): string {
  // Date: 18 February 2027
  // Start: 5:00 PM IST (+05:30) = 11:30:00 UTC
  // End: 11:00 PM IST (+05:30) = 17:30:00 UTC
  const dtStart = '20270218T113000Z';
  const dtEnd = '20270218T173000Z';
  const now = new Date();
  const dtStamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const uid = `wedding-aarav-meera-${Date.now()}@royalheritage.wedding`;

  const guestNote = params.guestName ? `Honoured Guest: ${params.guestName}\\n` : '';
  const personalQuote = params.selectedMessage ? `\\"${params.selectedMessage}\\"\\n\\n` : '';
  const description = `${guestNote}${personalQuote}Join us for the royal wedding ceremony and celebration of Aarav & Meera in Udaipur\\, Rajasthan\\, India.`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Royal Heritage//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    'SUMMARY:Wedding of Aarav & Meera',
    `DESCRIPTION:${description}`,
    'LOCATION:Udaipur\\, Rajasthan\\, India',
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/**
 * Trigger download of the .ics calendar file.
 */
export function downloadCalendarFile(icsContent: string, filename = 'Wedding-Aarav-Meera.ics'): void {
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Generate and download a high-resolution PNG invitation card using HTML5 Canvas.
 * Preserves the couple identity, guest's name, wedding date, location, party size, and chosen quote.
 */
export function downloadInvitationCardImage(params: {
  guestName: string;
  quote: string;
  attendance: string;
  guestCount: number;
}): void {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Base Antique Ivory Canvas
  ctx.fillStyle = '#FAF7F0';
  ctx.fillRect(0, 0, 1200, 1600);

  // 2. Inner Frame Background
  ctx.fillStyle = '#F5EFE4';
  ctx.fillRect(40, 40, 1120, 1520);

  // 3. Antique Gold Borders
  ctx.strokeStyle = '#B5965B';
  ctx.lineWidth = 4;
  ctx.strokeRect(50, 50, 1100, 1500);

  ctx.strokeStyle = '#CDB382';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(64, 64, 1072, 1472);

  // 4. Corner Diamonds
  const drawDiamond = (x: number, y: number, size: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(-size, 0);
    ctx.closePath();
    ctx.fillStyle = '#B5965B';
    ctx.fill();
    ctx.restore();
  };

  drawDiamond(80, 80, 12);
  drawDiamond(1120, 80, 12);
  drawDiamond(80, 1520, 12);
  drawDiamond(1120, 1520, 12);

  // 5. Header Kicker & Flourish
  ctx.textAlign = 'center';
  ctx.fillStyle = '#8C6F36';
  ctx.font = '600 18px "Lato", sans-serif';
  ctx.fillText('ROYAL HERITAGE WEDDING CELEBRATION', 600, 150);

  drawDiamond(600, 190, 9);
  drawDiamond(570, 190, 5);
  drawDiamond(630, 190, 5);

  // 6. Couple Names
  ctx.fillStyle = '#641F30';
  ctx.font = '400 74px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('Aarav & Meera', 600, 290);

  // 7. Request Line
  ctx.fillStyle = '#574B48';
  ctx.font = '300 22px "Lato", sans-serif';
  ctx.fillText('REQUEST THE HONOUR OF THE PRESENCE OF', 600, 365);

  // 8. Guest Name
  ctx.fillStyle = '#641F30';
  ctx.font = '600 54px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(params.guestName, 600, 450);

  // 9. Central Gold Divider
  ctx.strokeStyle = '#B5965B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(420, 495);
  ctx.lineTo(780, 495);
  ctx.stroke();
  drawDiamond(600, 495, 7);

  // 10. Randomly Chosen Quote (Multi-line wrapped)
  ctx.fillStyle = '#28201E';
  ctx.font = 'italic 400 30px "Playfair Display", Georgia, serif';
  const maxWidth = 880;
  const quoteText = `“${params.quote}”`;
  const words = quoteText.split(' ');
  let line = '';
  let lineY = 580;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), 600, lineY);
      line = words[n] + ' ';
      lineY += 46;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), 600, lineY);

  // 11. Event Details Box
  const boxTop = Math.max(lineY + 60, 760);
  ctx.fillStyle = 'rgba(181, 150, 91, 0.08)';
  ctx.fillRect(240, boxTop, 720, 260);
  ctx.strokeStyle = '#B5965B';
  ctx.lineWidth = 1;
  ctx.strokeRect(240, boxTop, 720, 260);

  ctx.fillStyle = '#8C6F36';
  ctx.font = '600 16px "Lato", sans-serif';
  ctx.fillText('DATE & TIME', 600, boxTop + 45);

  ctx.fillStyle = '#28201E';
  ctx.font = '500 28px "Cormorant Garamond", serif';
  ctx.fillText('18 February 2027 · 5:00 PM IST', 600, boxTop + 85);

  ctx.fillStyle = '#8C6F36';
  ctx.font = '600 16px "Lato", sans-serif';
  ctx.fillText('LOCATION', 600, boxTop + 140);

  ctx.fillStyle = '#28201E';
  ctx.font = '500 28px "Cormorant Garamond", serif';
  ctx.fillText('The Royal Heritage Palace · Udaipur, Rajasthan', 600, boxY_calc(boxTop, 180));

  function boxY_calc(b: number, offset: number) {
    return b + offset;
  }

  const attendanceLabel =
    params.attendance === 'accept'
      ? `ATTENDANCE CONFIRMED · PARTY OF ${params.guestCount}`
      : 'REGRETFULLY DECLINED';
  ctx.fillStyle = '#641F30';
  ctx.font = '700 20px "Lato", sans-serif';
  ctx.fillText(attendanceLabel, 600, boxTop + 230);

  // 12. Bottom Signature
  ctx.fillStyle = '#574B48';
  ctx.font = 'italic 400 26px "Playfair Display", serif';
  ctx.fillText('With blessings & warmth,', 600, 1370);

  ctx.fillStyle = '#8C6F36';
  ctx.font = '600 20px "Lato", sans-serif';
  ctx.fillText('THE SHARMA & RAJPUT FAMILIES', 600, 1415);

  // Convert to Blob and trigger download
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = params.guestName.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
    a.href = url;
    a.download = `Royal-Heritage-Invitation-${safeName || 'Guest'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}

