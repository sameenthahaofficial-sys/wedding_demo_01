import React, { useState } from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { Container, Divider } from '../common';
import './FAQ.css';

export const FAQ: React.FC = () => {
  const { faq } = weddingConfig;

  // Track expanded accordion item IDs. Open the first item by default for intuitive discovery.
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['venue-location']));

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <Container width="default">
        <div className="faq-grid">
          {/* Column 1 (Left on desktop, Top on mobile): Section Introduction */}
          <div className="faq-intro-column">
            <header className="faq-header">
              <p className="faq-eyebrow">
                <span className="faq-eyebrow-diamond" aria-hidden="true">♦</span>
                <span>{faq.eyebrow}</span>
                <span className="faq-eyebrow-diamond" aria-hidden="true">♦</span>
              </p>
              <h2 id="faq-heading" className="faq-heading">
                {faq.heading}
              </h2>
              <Divider variant="gold" className="faq-divider" />
              <p className="faq-subtitle">{faq.subtitle}</p>

              {/* Editorial Hospitality Note */}
              <div className="faq-note-card">
                <span className="faq-note-icon" aria-hidden="true">❖</span>
                <p className="faq-note-text">
                  For any personal questions or special accommodations, please feel free to reach out to the Sharma &amp; Rajput families or include a note in your response.
                </p>
              </div>
            </header>
          </div>

          {/* Column 2 (Right on desktop, Bottom on mobile): Expandable FAQ Accordion */}
          <div className="faq-accordion-column">
            <div className="faq-accordion" role="presentation">
              {faq.items.map((item, index) => {
                const isOpen = openIds.has(item.id);
                const questionId = `faq-q-${item.id}`;
                const answerId = `faq-a-${item.id}`;
                const itemNumber = (index + 1).toString().padStart(2, '0');

                return (
                  <div
                    key={item.id}
                    className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                  >
                    <button
                      type="button"
                      id={questionId}
                      className="faq-question-btn"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="faq-question-number" aria-hidden="true">
                        {itemNumber}
                      </span>
                      <span className="faq-question-text">{item.question}</span>
                      <span className="faq-indicator" aria-hidden="true">
                        <span className="faq-indicator-icon">{isOpen ? '−' : '+'}</span>
                      </span>
                    </button>

                    <div
                      id={answerId}
                      className="faq-answer-wrapper"
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                    >
                      <div className="faq-answer-content">
                        <p className="faq-answer-paragraph">{item.answer}</p>

                        {/* Optional Schedule / Attire Bullet Points */}
                        {item.bulletPoints && item.bulletPoints.length > 0 && (
                          <ul className="faq-bullet-list">
                            {item.bulletPoints.map((point, i) => (
                              <li key={i} className="faq-bullet-item">
                                <span className="faq-bullet-marker" aria-hidden="true">♦</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Optional Clarifying Note */}
                        {item.note && (
                          <p className="faq-clarification-note">
                            <span className="faq-clarification-icon" aria-hidden="true">ℹ</span>
                            <span>{item.note}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

