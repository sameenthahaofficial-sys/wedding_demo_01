import React, { useEffect, useState } from 'react';
import './Countdown.css';
import { Container, Divider } from '../common';
import { weddingConfig } from '../../config/weddingConfig';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  isValid: boolean;
}

/**
 * Parse an ISO date or YYYY-MM-DD string into a timestamp explicitly in India Standard Time (+05:30).
 */
function parseTargetTimestamp(dateStr: string): number {
  if (!dateStr) return NaN;
  // If string is YYYY-MM-DD without time or timezone offset, anchor to 00:00:00 IST (UTC+05:30)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(`${dateStr}T00:00:00+05:30`).getTime();
  }
  return new Date(dateStr).getTime();
}

/**
 * Format the wedding date into uppercase standard display string (e.g. "18 FEBRUARY 2027").
 */
function formatWeddingDate(dateStr: string): string {
  if (!dateStr) return '';
  const timestamp = parseTargetTimestamp(dateStr);
  if (isNaN(timestamp)) return '';
  const formatted = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(timestamp));
  return formatted.toUpperCase();
}

function calculateTimeRemaining(targetTimestamp: number): TimeRemaining {
  if (isNaN(targetTimestamp)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false, isValid: false };
  }

  const now = Date.now();
  const difference = targetTimestamp - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true, isValid: true };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isCompleted: false,
    isValid: true,
  };
}

export const Countdown: React.FC = () => {
  const weddingDateStr = weddingConfig.meta.weddingDate;
  const targetTimestamp = parseTargetTimestamp(weddingDateStr);
  const weddingDateFormatted = formatWeddingDate(weddingDateStr);

  const [time, setTime] = useState<TimeRemaining>(() => calculateTimeRemaining(targetTimestamp));

  useEffect(() => {
    if (isNaN(targetTimestamp)) return;

    // Immediately calculate to ensure freshness
    const initial = calculateTimeRemaining(targetTimestamp);
    setTime(initial);

    if (initial.isCompleted) return;

    const intervalId = setInterval(() => {
      const current = calculateTimeRemaining(targetTimestamp);
      setTime(current);

      if (current.isCompleted) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTimestamp]);

  const accessibleLabel = time.isCompleted
    ? 'The wedding celebration has begun'
    : `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds until the celebration`;

  return (
    <section id="countdown" className="countdown" aria-label="Wedding Countdown">
      <Container width="narrow">
        <div className="countdown-content">
          <header className="countdown-header">
            <p className="countdown-eyebrow">
              THE COUNTDOWN BEGINS
            </p>
            <h2 className="countdown-heading">
              Until Forever
            </h2>
            <Divider variant="inverse" className="countdown-divider" />
          </header>

          {time.isCompleted ? (
            <div className="countdown-completed" role="status">
              <h3 className="countdown-completed-title">The Celebration Has Begun</h3>
              <p className="countdown-completed-text">
                Today we celebrate the beginning of our forever.
              </p>
            </div>
          ) : (
            <>
              <div
                className="countdown-timer"
                role="timer"
                aria-label={accessibleLabel}
              >
              {/* Days */}
              <div className="countdown-unit">
                <span className="countdown-number">
                  {String(time.days)}
                </span>
                <span className="countdown-label">Days</span>
              </div>

              <span className="countdown-separator" aria-hidden="true">:</span>

              {/* Hours */}
              <div className="countdown-unit">
                <span className="countdown-number">
                  {String(time.hours).padStart(2, '0')}
                </span>
                <span className="countdown-label">Hours</span>
              </div>

              <span className="countdown-separator" aria-hidden="true">:</span>

              {/* Minutes */}
              <div className="countdown-unit">
                <span className="countdown-number">
                  {String(time.minutes).padStart(2, '0')}
                </span>
                <span className="countdown-label">Minutes</span>
              </div>

              <span className="countdown-separator" aria-hidden="true">:</span>

              {/* Seconds */}
              <div className="countdown-unit">
                <span className="countdown-number">
                  {String(time.seconds).padStart(2, '0')}
                </span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>

            {/* Formatted Wedding Date */}
            {weddingDateFormatted && (
              <p className="countdown-date">
                {weddingDateFormatted}
              </p>
            )}
          </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Countdown;

