/**
 * Royal Heritage - Core TypeScript Type Definitions
 * Establishes strong typing contracts for wedding configuration, events, and layout.
 */

export interface CoupleProfile {
  name: string;
  fullName: string;
  role: 'Bride' | 'Groom';
  parents: string[];
  bio?: string;
}

export interface WeddingMetadata {
  title: string;
  couple: {
    partnerOne: CoupleProfile;
    partnerTwo: CoupleProfile;
  };
  weddingDate: string; // ISO date string (YYYY-MM-DD)
  displayDate?: string; // Formatted date e.g. "18 · 02 · 2027"
  city: string;
  state: string;
  country: string;
}

export interface EventImageSources {
  avif: string;
  webp: string;
  jpg: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventVenue {
  name: string;
  location: string;
  address?: string;
  mapUrl?: string;
}

export interface EventVisualTheme {
  palette: string[];
  photoStyle: string;
}

export interface WeddingEvent {
  id: string;
  eventNumber: string; // e.g. "01", "02", "03"
  name: string;        // e.g. "The Mehendi"
  date: string;        // ISO date string (YYYY-MM-DD)
  startTime: string;   // e.g. "11:00 AM"
  endTime?: string;
  venue: EventVenue;
  dressCode: string;   // e.g. "Floral Festive"
  description: string;
  image: EventImageSources;
  theme?: EventVisualTheme;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface GalleryImageItem {
  id: string;
  src: string;
  avif?: string;
  webp?: string;
  jpg?: string;
  alt: string;
  category: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface GalleryConfig {
  eyebrow: string;
  heading: string;
  subtitle: string;
  images: GalleryImageItem[];
}

export interface VenueImageConfig {
  src: string;
  avif?: string;
  webp?: string;
  jpg?: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface VenueMapConfig {
  embedUrl: string;
  title: string;
  openMapUrl: string;
  directionsUrl: string;
}

export interface VenueConfig {
  eyebrow: string;
  heading: string;
  subtitle: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  weddingDateDisplay: string;
  description: string;
  note?: string;
  image: VenueImageConfig;
  map: VenueMapConfig;
}

export type RSVPAttendance = 'accept' | 'decline' | null;

export interface RSVPGuestCountOption {
  value: number;
  label: string;
}

export interface RSVPConfig {
  eyebrow: string;
  heading: string;
  subtitle: string;
  placeholderName: string;
  placeholderMessage: string;
  guestCountOptions: RSVPGuestCountOption[];
  demonstrationNotice: string;
}

export interface RSVPFormData {
  guestName: string;
  attendance: RSVPAttendance;
  guestCount: number;
  message: string;
}

export interface RSVPFormErrors {
  guestName?: string;
  attendance?: string;
  guestCount?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  bulletPoints?: string[];
  note?: string;
}

export interface FAQConfig {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FAQItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  coupleNames: string;
  closingMessage: string;
  weddingDate: string;
  location: string;
  links: FooterLink[];
  disclaimer: string;
  copyright: string;
}

export interface WeddingConfig {
  meta: WeddingMetadata;
  navigation: NavigationItem[];
  events: WeddingEvent[];
  gallery: GalleryConfig;
  venue: VenueConfig;
  rsvp: RSVPConfig;
  faq: FAQConfig;
  footer: FooterConfig;
}
