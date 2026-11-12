import React, { useState } from 'react';
import { WeddingEvent } from '../../types';
import { deriveEventDate } from '../../utils';
import { Divider } from '../common';

export interface EventItemProps {
  event: WeddingEvent;
  isReversed?: boolean;
}

export const EventItem: React.FC<EventItemProps> = ({ event, isReversed = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { formattedDate, weekday } = deriveEventDate(event.date);

  return (
    <article
      className={`event-row ${isReversed ? 'event-row-reversed' : ''}`}
      aria-labelledby={`event-title-${event.id}`}
    >
      {/* Event Photography (4:5 Portrait Frame) */}
      <div className="event-image-wrapper">
        <div className={`event-image-container ${imageLoaded ? 'event-image-loaded' : ''}`}>
          <div className={`event-image-accent event-accent-${event.id}`} aria-hidden="true" />
          <picture className="event-picture">
            <source type="image/avif" srcSet={event.image.avif} />
            <source type="image/webp" srcSet={event.image.webp} />
            <img
              src={event.image.jpg}
              alt={event.image.alt}
              className="event-img"
              width={event.image.width}
              height={event.image.height}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
            />
          </picture>
        </div>
      </div>

      {/* Event Editorial Details */}
      <div className="event-content-wrapper">
        <header className="event-header">
          <div className="event-kicker-row">
            <span className="event-number">EVENT {event.eventNumber}</span>
            {event.theme && (
              <span className={`event-theme-tag event-theme-${event.id}`}>
                {event.theme.palette.join(' · ')}
              </span>
            )}
          </div>
          <h3 id={`event-title-${event.id}`} className="event-title">
            {event.name}
          </h3>
          <Divider variant="gold" className="event-divider" />
        </header>

        {/* Structured Event Metadata */}
        <div className="event-metadata-list">
          <div className="event-meta-item">
            <span className="event-meta-label">DATE &amp; DAY</span>
            <span className="event-meta-value">
              {weekday}, {formattedDate}
            </span>
          </div>

          <div className="event-meta-item">
            <span className="event-meta-label">TIME</span>
            <span className="event-meta-value">{event.startTime}</span>
          </div>

          <div className="event-meta-item">
            <span className="event-meta-label">VENUE</span>
            <span className="event-meta-value">
              {event.venue.name} <span className="event-meta-bullet" aria-hidden="true">·</span> {event.venue.location}
            </span>
          </div>

          <div className="event-meta-item">
            <span className="event-meta-label">DRESS CODE</span>
            <span className="event-meta-value event-dress-code">
              {event.dressCode}
            </span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="event-description">
          {event.description}
        </p>
      </div>
    </article>
  );
};

export default EventItem;

