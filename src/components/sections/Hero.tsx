import React, { useState } from 'react';
import './Hero.css';
import { Divider } from '../common';
import { weddingConfig } from '../../config/weddingConfig';

export interface HeroProps {
  onScrollToNext?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { couple, displayDate } = weddingConfig.meta;

  const handleScrollClick = () => {
    if (onScrollToNext) {
      onScrollToNext();
      return;
    }
    const targetElement = document.getElementById('welcome') || document.getElementById('discover');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Royal Heritage Wedding Celebration Invitation">
      {/* Responsive Indian Heritage Palace Background (Desktop Landscape + Mobile Portrait) */}
      <div 
        className={`hero-bg ${imageLoaded ? 'hero-bg-loaded' : ''}`}
        aria-hidden="true"
      >
        <picture className="hero-bg-picture">
          {/* Mobile Portrait Sources (≤ 768px viewports) */}
          <source
            media="(max-width: 768px)"
            type="image/avif"
            srcSet="/images/hero-palace-mobile.avif"
          />
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcSet="/images/hero-palace-mobile.webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero-palace-mobile.jpg"
          />

          {/* Desktop Landscape Sources (> 768px viewports) */}
          <source
            type="image/avif"
            srcSet="/images/hero-palace.avif"
          />
          <source
            type="image/webp"
            srcSet="/images/hero-palace.webp"
          />
          <img
            src="/images/hero-palace.jpg"
            alt="Majestic Rajasthani palace courtyard with ornate arches, reflecting pool, and candlelit lanterns at twilight"
            className="hero-bg-img"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1376}
            height={768}
          />
        </picture>

        {/* Continuous Architectural Gradient Overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Central Integrated Invitation Content */}
      <div className="hero-content-wrapper">
        <header className="hero-invitation">
          {/* Subtle Royal Diamond Motif */}
          <div className="hero-crest" aria-hidden="true">
            <span className="hero-crest-diamond">♦</span>
          </div>

          {/* Invitation Kicker */}
          <p className="hero-kicker">
            TOGETHER WITH THEIR FAMILIES
          </p>

          {/* Couple Names - Grand Cormorant Garamond */}
          <h1 className="hero-names">
            <span className="hero-name">{couple.partnerOne.name}</span>
            <span className="hero-ampersand" aria-hidden="true">&amp;</span>
            <span className="sr-only">and</span>
            <span className="hero-name">{couple.partnerTwo.name}</span>
          </h1>

          {/* Refined Gold Motif Divider */}
          <Divider variant="gold" className="hero-divider" />

          {/* Formal Request Line */}
          <p className="hero-invitation-text">
            REQUEST THE PLEASURE OF YOUR COMPANY
          </p>

          {/* Formatted Wedding Date */}
          <div className="hero-date-wrapper">
            <p className="hero-date">{displayDate || '18 · 02 · 2027'}</p>
          </div>
        </header>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll-container">
        <button
          type="button"
          onClick={handleScrollClick}
          className="hero-scroll-btn"
          aria-label="Scroll to discover the wedding celebration"
        >
          <span className="hero-scroll-label">SCROLL TO DISCOVER</span>
          <span className="hero-scroll-indicator" aria-hidden="true">
            <span className="hero-scroll-line" />
            <span className="hero-scroll-arrow">↓</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
