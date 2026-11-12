import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { Container, Divider } from '../common';
import './Footer.css';

export const Footer: React.FC = () => {
  const { footer } = weddingConfig;

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="footer" aria-label="Wedding celebration footer">
      <Container width="default">
        <div className="footer-content">
          {/* Top Decorative Flourish */}
          <div className="footer-flourish" aria-hidden="true">
            <span className="footer-flourish-diamond">♦</span>
            <span className="footer-flourish-motif">❖</span>
            <span className="footer-flourish-diamond">♦</span>
          </div>

          {/* Couple Identity */}
          <h2 className="footer-couple-names">
            <span>Aarav</span>
            <span className="footer-ampersand" aria-hidden="true">&amp;</span>
            <span>Meera</span>
          </h2>

          {/* Closing Editorial Message */}
          <p className="footer-closing-message">
            &ldquo;{footer.closingMessage}&rdquo;
          </p>

          {/* Wedding Date & Location */}
          <div className="footer-meta-row">
            <span className="footer-meta-item">{footer.weddingDate}</span>
            <span className="footer-meta-dot" aria-hidden="true">·</span>
            <span className="footer-meta-item">{footer.location}</span>
          </div>

          {/* Subtle Antique Gold Divider */}
          <Divider variant="inverse" className="footer-divider" />

          {/* Section Navigation Links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {footer.links.map((link) => (
                <li key={link.href} className="footer-nav-item">
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to Top Accessible Control */}
          <div className="footer-back-to-top-wrapper">
            <button
              type="button"
              onClick={handleScrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top of page"
            >
              <span className="footer-back-to-top-arrow" aria-hidden="true">↑</span>
              <span className="footer-back-to-top-text">Back to Top</span>
            </button>
          </div>

          {/* Portfolio Demonstration Disclaimer */}
          <div className="footer-disclaimer-wrapper">
            <p className="footer-disclaimer">
              {footer.disclaimer}
            </p>
          </div>

          {/* Copyright Line */}
          <p className="footer-copyright">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

