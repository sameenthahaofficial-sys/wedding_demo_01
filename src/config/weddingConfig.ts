import { WeddingConfig } from '../types';

/**
 * Royal Heritage - Wedding Configuration & Content
 * Central source of truth separating data from UI components.
 */
export const weddingConfig: WeddingConfig = {
  meta: {
    title: 'Royal Heritage Wedding Celebration | Aarav & Meera',
    couple: {
      partnerOne: {
        name: 'Aarav',
        fullName: 'Aarav Sharma',
        role: 'Groom',
        parents: ['Mrs. Sunita & Mr. Rajesh Sharma'],
      },
      partnerTwo: {
        name: 'Meera',
        fullName: 'Meera Rajput',
        role: 'Bride',
        parents: ['Mrs. Meenakshi & Mr. Mahendra Rajput'],
      },
    },
    weddingDate: '2027-02-18',
    displayDate: '18 · 02 · 2027',
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
  },
  navigation: [
    { label: 'Welcome', href: '#welcome' },
    { label: 'Our Story', href: '#story' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Travel & Stay', href: '#travel' },
    { label: 'RSVP', href: '#rsvp' },
  ],
  events: [
    {
      id: 'mehendi',
      eventNumber: '01',
      name: 'The Mehendi',
      date: '2027-02-16',
      startTime: '11:00 AM',
      venue: {
        name: 'The Garden Courtyard',
        location: 'Udaipur, Rajasthan',
      },
      dressCode: 'Floral Festive',
      description:
        'A beautiful afternoon filled with colour, laughter and traditional mehendi celebrations. Join us as we begin the festivities surrounded by flowers, music and the warmth of family.',
      image: {
        avif: '/images/event-mehendi.avif',
        webp: '/images/event-mehendi.webp',
        jpg: '/images/event-mehendi.jpg',
        alt: 'Traditional Indian Mehendi ceremony decorations with marigold flowers and vibrant festive colors in a garden courtyard',
        width: 1000,
        height: 1250,
      },
      theme: {
        palette: ['Sage green', 'Marigold', 'Antique ivory'],
        photoStyle: 'Floral photography',
      },
    },
    {
      id: 'sangeet',
      eventNumber: '02',
      name: 'The Sangeet',
      date: '2027-02-17',
      startTime: '7:00 PM',
      venue: {
        name: 'The Grand Darbar Hall',
        location: 'Udaipur, Rajasthan',
      },
      dressCode: 'Indian Evening Glamour',
      description:
        'An evening of music, dance and celebration. Let the rhythm bring everyone together as we celebrate the couple with unforgettable performances and joyful moments.',
      image: {
        avif: '/images/event-sangeet.avif',
        webp: '/images/event-sangeet.webp',
        jpg: '/images/event-sangeet.jpg',
        alt: 'Royal Indian Sangeet celebration in a grand palace Darbar hall with warm golden lighting and regal maroon drapery',
        width: 1000,
        height: 1250,
      },
      theme: {
        palette: ['Royal maroon', 'Antique gold', 'Deep charcoal'],
        photoStyle: 'Evening celebration photography',
      },
    },
    {
      id: 'wedding-ceremony',
      eventNumber: '03',
      name: 'The Wedding Ceremony',
      date: '2027-02-18',
      startTime: '5:00 PM',
      venue: {
        name: 'The Royal Courtyard',
        location: 'Udaipur, Rajasthan',
      },
      dressCode: 'Traditional Indian Attire',
      description:
        'With the blessings of our families, we invite you to witness the beginning of our forever. Join us for a beautiful ceremony celebrating love, tradition and a lifetime of togetherness.',
      image: {
        avif: '/images/event-wedding.avif',
        webp: '/images/event-wedding.webp',
        jpg: '/images/event-wedding.jpg',
        alt: 'Traditional Indian royal wedding mandap adorned with ivory and gold floral pillars in a palace courtyard',
        width: 1000,
        height: 1250,
      },
      theme: {
        palette: ['Antique ivory', 'Antique gold', 'Royal maroon'],
        photoStyle: 'Traditional royal wedding photography',
      },
    },
  ],
  gallery: {
    eyebrow: 'MOMENTS TO CHERISH',
    heading: 'A Glimpse Into Our Story',
    subtitle: 'Every photograph holds a memory, every moment tells a story.',
    images: [
      {
        id: 'palace',
        src: '/images/gallery/gallery-palace.jpg',
        avif: '/images/gallery/gallery-palace.avif',
        webp: '/images/gallery/gallery-palace.webp',
        jpg: '/images/gallery/gallery-palace.jpg',
        alt: 'Majestic Rajasthani heritage palace exterior bathed in golden hour sunlight with reflection pool and manicured gardens',
        category: 'Heritage Palace',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'couple',
        src: '/images/gallery/gallery-couple.jpg',
        avif: '/images/gallery/gallery-couple.avif',
        webp: '/images/gallery/gallery-couple.webp',
        jpg: '/images/gallery/gallery-couple.jpg',
        alt: 'Royal bride in deep maroon zardozi lehenga and groom in tailored ivory sherwani framed by a carved sandstone palace archway',
        category: 'The Couple',
        width: 1200,
        height: 1500,
        objectPosition: 'center 20%',
      },
      {
        id: 'mehendi',
        src: '/images/gallery/gallery-mehendi.jpg',
        avif: '/images/gallery/gallery-mehendi.avif',
        webp: '/images/gallery/gallery-mehendi.webp',
        jpg: '/images/gallery/gallery-mehendi.jpg',
        alt: 'Sunlit palace courtyard Mehendi ceremony setup with cascading marigold garlands, sage green cushions, and brass urli flower vessels',
        category: 'Mehendi Celebration',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'florals',
        src: '/images/gallery/gallery-florals.jpg',
        avif: '/images/gallery/gallery-florals.avif',
        webp: '/images/gallery/gallery-florals.webp',
        jpg: '/images/gallery/gallery-florals.jpg',
        alt: 'Exquisite close-up detail of fresh ivory garden roses, fragrant mogra jasmine, and gilded antique gold foliage in a brass pedestal bowl',
        category: 'Floral Artistry',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'sangeet',
        src: '/images/gallery/gallery-sangeet.jpg',
        avif: '/images/gallery/gallery-sangeet.avif',
        webp: '/images/gallery/gallery-sangeet.webp',
        jpg: '/images/gallery/gallery-sangeet.jpg',
        alt: 'Grand royal palace Durbar hall decorated for a lavish Sangeet with crystal chandeliers, regal maroon drapery, and low velvet lounge seating',
        category: 'Sangeet Hall',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'mandap',
        src: '/images/gallery/gallery-mandap.jpg',
        avif: '/images/gallery/gallery-mandap.avif',
        webp: '/images/gallery/gallery-mandap.webp',
        jpg: '/images/gallery/gallery-mandap.jpg',
        alt: 'Traditional four-pillared Hindu wedding mandap adorned with ivory tuberoses, white orchids, and brass diyas in a palace courtyard at dusk',
        category: 'Ceremonial Mandap',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'ceremony',
        src: '/images/gallery/gallery-ceremony.jpg',
        avif: '/images/gallery/gallery-ceremony.avif',
        webp: '/images/gallery/gallery-ceremony.webp',
        jpg: '/images/gallery/gallery-ceremony.jpg',
        alt: 'Sacred wedding ceremony ritual items including a copper kalash with coconut, glowing brass oil lamps, kumkum, and turmeric on a silk rug',
        category: 'Sacred Rituals',
        width: 1200,
        height: 1500,
        objectPosition: 'center 60%',
      },
      {
        id: 'reception',
        src: '/images/gallery/gallery-reception.jpg',
        avif: '/images/gallery/gallery-reception.avif',
        webp: '/images/gallery/gallery-reception.webp',
        jpg: '/images/gallery/gallery-reception.jpg',
        alt: 'Royal wedding reception banquet tables on palace lawn under elegant geometric canopy drapes and glowing crystal chandeliers',
        category: 'Royal Reception',
        width: 1200,
        height: 1500,
        objectPosition: 'center center',
      },
      {
        id: 'romance',
        src: '/images/gallery/gallery-romance.jpg',
        avif: '/images/gallery/gallery-romance.avif',
        webp: '/images/gallery/gallery-romance.webp',
        jpg: '/images/gallery/gallery-romance.jpg',
        alt: 'Bride and groom walking hand in hand along a candlelit rose petal walkway toward an illuminated palace pavilion at twilight',
        category: 'Twilight Romance',
        width: 1200,
        height: 1500,
        objectPosition: 'center 35%',
      },
    ],
  },
  venue: {
    eyebrow: 'THE WEDDING DESTINATION',
    heading: 'A Royal Setting for Our Forever',
    subtitle: 'A timeless celebration in the heart of Rajasthan.',
    name: 'The Royal Heritage Palace',
    address: '18 Maharana Garden Road, Udaipur, Rajasthan 313001',
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    weddingDateDisplay: '18 February 2027',
    description:
      'Set against the romantic backdrop of Rajasthan’s City of Lakes, The Royal Heritage Palace embodies the timeless grace of royal Indian hospitality. Hand-carved golden sandstone courtyards, sunlit scalloped archways, and tranquil flowering gardens create a majestic setting where our families and loved ones gather to begin our forever.',
    note: 'Demonstration venue setting curated for royal wedding celebration concepts · Map features Udaipur, Rajasthan.',
    image: {
      src: '/images/venue-palace.jpg',
      avif: '/images/venue-palace.avif',
      webp: '/images/venue-palace.webp',
      jpg: '/images/venue-palace.jpg',
      alt:
        'The Royal Heritage Palace featuring hand-carved golden Rajasthani sandstone courtyards, traditional scalloped arches, and ceremonial staircases in Udaipur',
      width: 1600,
      height: 1000,
      caption: 'The Royal Heritage Palace · Fictional Demonstration Setting',
    },
    map: {
      embedUrl:
        'https://maps.google.com/maps?q=Udaipur%2C%20Rajasthan%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed',
      title: 'Map of Udaipur, Rajasthan, India showing the wedding destination city',
      openMapUrl:
        'https://www.google.com/maps/search/?api=1&query=Udaipur%2C%20Rajasthan%2C%20India',
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Udaipur%2C%20Rajasthan%2C%20India',
    },
  },
  rsvp: {
    eyebrow: 'KINDLY RESPOND',
    heading: 'We Would Be Honoured',
    subtitle: 'Your presence would make our celebration even more special.',
    placeholderName: 'e.g. Vikram & Ananya Sharma',
    placeholderMessage: 'Share your warm wishes, blessings, or a note for Aarav & Meera...',
    guestCountOptions: [
      { value: 1, label: '1 Guest (Just Me)' },
      { value: 2, label: '2 Guests' },
      { value: 3, label: '3 Guests' },
      { value: 4, label: '4 Guests' },
      { value: 5, label: '5 Guests (Family)' },
    ],
    demonstrationNotice:
      'Portfolio Demonstration Only: This is a design preview. No guest information has been transmitted, stored, or submitted.',
  },
  faq: {
    eyebrow: 'GUEST INFORMATION',
    heading: 'Everything You Need to Know',
    subtitle:
      'We want every moment of your celebration to be effortless and memorable. Here are a few details to help you prepare for our special days together.',
    items: [
      {
        id: 'venue-location',
        question: 'Where will the wedding celebrations take place?',
        answer:
          'The celebrations are set in Udaipur, Rajasthan, at The Royal Heritage Palace. The venue is fictional demonstration content created for this wedding website concept. The map on the website shows Udaipur city rather than a verified venue location.',
      },
      {
        id: 'celebration-dates',
        question: 'When are the celebrations?',
        answer:
          'The wedding celebrations take place from 16 February to 18 February 2027.',
      },
      {
        id: 'event-schedule',
        question: 'What is the schedule of events?',
        answer:
          'The celebrations span three signature events across three memorable days:',
        bulletPoints: [
          'Mehendi: 16 February 2027, 11:00 AM — The Garden Courtyard.',
          'Sangeet: 17 February 2027, 7:00 PM — The Grand Darbar Hall.',
          'Wedding Ceremony: 18 February 2027, 5:00 PM — The Royal Courtyard.',
        ],
        note: 'All times are demonstration schedule details.',
      },
      {
        id: 'dress-code',
        question: 'What should I wear?',
        answer:
          'We invite our guests to embrace traditional Indian festive elegance for each celebration:',
        bulletPoints: [
          'Mehendi: Floral Festive.',
          'Sangeet: Indian Evening Glamour.',
          'Wedding Ceremony: Traditional Indian Attire.',
        ],
      },
      {
        id: 'guest-stay',
        question: 'Where can guests stay?',
        answer:
          'Udaipur offers a range of accommodation options. Guests should independently explore suitable hotels and accommodation near the city. No hotel partnership or booking arrangement is confirmed in this demonstration.',
      },
      {
        id: 'travel-connections',
        question: 'How can I travel to Udaipur?',
        answer:
          'Guests can explore available air, rail and road connections to Udaipur. Specific travel arrangements are not confirmed in this demonstration.',
      },
      {
        id: 'event-transportation',
        question: 'Will transportation be arranged between the events?',
        answer:
          'Transportation arrangements have not been confirmed. Clearly present this as demonstration information rather than promising shuttle services or transfers.',
      },
      {
        id: 'attendance-confirmation',
        question: 'How can I confirm my attendance?',
        answer:
          'Guests can use the RSVP section on this website to indicate whether they will attend and provide their guest details. This is a visual demonstration only; responses are not transmitted or stored.',
      },
    ],
  },
  footer: {
    coupleNames: 'Aarav & Meera',
    closingMessage: 'With love, Aarav & Meera.',
    weddingDate: '18 February 2027',
    location: 'Udaipur, Rajasthan, India',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Our Story', href: '#story' },
      { label: 'Events', href: '#events' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Venue', href: '#venue' },
      { label: 'RSVP', href: '#rsvp' },
      { label: 'Guest Information', href: '#faq' },
    ],
    disclaimer:
      'This website is a fictional wedding experience created for portfolio demonstration purposes. All couple, venue and event details are illustrative.',
    copyright: '© 2027 Royal Heritage. A Wedding Website Concept.',
  },
};
