import React, { useState } from 'react';
import './OurStory.css';
import { Container, Divider } from '../common';

export const OurStory: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="story" className="story" aria-label="Our Story">
      <Container width="default">
        <div className="story-grid">
          {/* Column 1: Editorial Couple Photograph */}
          <div className="story-image-column">
            <div className={`story-image-frame ${imageLoaded ? 'story-image-loaded' : ''}`}>
              {/* Outer decorative gold accent line */}
              <div className="story-image-accent" aria-hidden="true" />

              <picture className="story-picture">
                <source type="image/avif" srcSet="/images/story-couple.avif" />
                <source type="image/webp" srcSet="/images/story-couple.webp" />
                <img
                  src="/images/story-couple.jpg"
                  alt="Aarav and Meera in royal Rajasthani wedding attire standing together gracefully on a palace balcony"
                  className="story-img"
                  loading="lazy"
                  decoding="async"
                  width={896}
                  height={1200}
                  onLoad={() => setImageLoaded(true)}
                />
              </picture>
            </div>
          </div>

          {/* Column 2: Story Editorial Prose */}
          <div className="story-text-column">
            <header className="story-header">
              <p className="story-eyebrow">
                A STORY WRITTEN IN THE STARS
              </p>
              <h2 className="story-heading">
                Our Story
              </h2>
              <Divider variant="gold" className="story-divider" />
            </header>

            <div className="story-narrative">
              <p className="story-paragraph story-paragraph-lead">
                Somewhere between unexpected conversations and shared dreams, two hearts found their way to each other.
              </p>
              <p className="story-paragraph">
                What began as a simple connection slowly became something beautiful — a journey filled with laughter, little moments and memories that will last a lifetime.
              </p>
              <p className="story-paragraph">
                And now, with the blessings of our families, we are ready to begin our forever.
              </p>
            </div>

            <footer className="story-signature-wrapper">
              <p className="story-signature">
                Aarav &amp; Meera
              </p>
            </footer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;

