import React, { useState } from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { Container, SectionHeader } from '../common';
import './Venue.css';

export const Venue: React.FC = () => {
  const { venue } = weddingConfig;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="venue" className="venue" aria-labelledby="venue-heading">
      <Container width="default">
        <SectionHeader
          kicker={venue.eyebrow}
          title={venue.heading}
          subtitle={venue.subtitle}
          className="venue-section-header"
        />

        <div className="venue-grid">
          {/* Column 1 (Left on desktop, First on mobile): Large Palace Photograph */}
          <div className="venue-image-column">
            <div className={`venue-image-frame ${imageLoaded ? 'venue-image-loaded' : ''}`}>
              <div className="venue-image-accent" aria-hidden="true" />
              <picture className="venue-picture">
                <source type="image/avif" srcSet={venue.image.avif || '/images/venue-palace.avif'} />
                <source type="image/webp" srcSet={venue.image.webp || '/images/venue-palace.webp'} />
                <img
                  src={venue.image.jpg || venue.image.src}
                  alt={venue.image.alt}
                  className="venue-palace-img"
                  loading="lazy"
                  decoding="async"
                  width={venue.image.width}
                  height={venue.image.height}
                  onLoad={() => setImageLoaded(true)}
                />
              </picture>
            </div>
            {venue.image.caption && (
              <p className="venue-image-caption">
                <span className="venue-caption-icon" aria-hidden="true">♦</span>
                <span>{venue.image.caption}</span>
              </p>
            )}
          </div>

          {/* Column 2 (Right on desktop, Below on mobile): Venue Information */}
          <div className="venue-info-column">
            <header className="venue-info-header">
              <h3 id="venue-name" className="venue-name">
                {venue.name}
              </h3>
              <div className="venue-ornament" aria-hidden="true">
                <span className="venue-ornament-line" />
                <span className="venue-ornament-diamond">♦</span>
                <span className="venue-ornament-line" />
              </div>
            </header>

            {/* Structured Meta Details */}
            <dl className="venue-meta-list">
              <div className="venue-meta-item">
                <dt className="venue-meta-label">Celebration Date</dt>
                <dd className="venue-meta-value">{venue.weddingDateDisplay}</dd>
              </div>
              <div className="venue-meta-item">
                <dt className="venue-meta-label">Destination</dt>
                <dd className="venue-meta-value">
                  {venue.city}, {venue.state}, {venue.country}
                </dd>
              </div>
              <div className="venue-meta-item">
                <dt className="venue-meta-label">Address</dt>
                <dd className="venue-meta-value venue-address">{venue.address}</dd>
              </div>
            </dl>

            {/* Palace Description */}
            <p className="venue-description">{venue.description}</p>

            {venue.note && (
              <p className="venue-note" role="note">
                <span className="venue-note-icon" aria-hidden="true">ℹ</span>
                <span>{venue.note}</span>
              </p>
            )}

            {/* Google Maps Integration */}
            <div className="venue-map-block">
              <h4 className="venue-map-title">Destination Map &amp; City Access</h4>
              <div className="venue-map-container">
                <iframe
                  src={venue.map.embedUrl}
                  title={venue.map.title}
                  className="venue-map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={false}
                />
              </div>

              {/* Action Navigation Links */}
              <div className="venue-actions">
                <a
                  href={venue.map.openMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm venue-action-btn"
                  aria-label="Open Udaipur location in Google Maps (opens in a new tab)"
                >
                  <span className="venue-action-icon" aria-hidden="true">↗</span>
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={venue.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm venue-action-btn"
                  aria-label="Get directions to Udaipur on Google Maps (opens in a new tab)"
                >
                  <span className="venue-action-icon" aria-hidden="true">📍</span>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Venue;

