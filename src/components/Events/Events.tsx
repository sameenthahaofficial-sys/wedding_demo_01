import React from 'react';
import './Events.css';
import { Container, SectionHeader } from '../common';
import { EventItem } from './EventItem';
import { weddingConfig } from '../../config/weddingConfig';

export const Events: React.FC = () => {
  const { events } = weddingConfig;

  return (
    <section id="events" className="events" aria-label="The Wedding Celebrations">
      <Container width="default">
        <SectionHeader
          kicker="THE WEDDING CELEBRATIONS"
          title="A Celebration to Remember"
          subtitle="Three beautiful celebrations, three unforgettable moments, and one beginning of forever."
          showDivider={true}
          className="events-section-header"
        />

        <div className="events-list">
          {events.map((event, index) => (
            <EventItem
              key={event.id}
              event={event}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;

