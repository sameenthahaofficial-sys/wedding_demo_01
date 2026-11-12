import React, { useEffect, useState } from 'react';
import './Welcome.css';
import { Container, Divider } from '../common';
import { getGuestParams } from '../../utils';

export const Welcome: React.FC = () => {
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const { guestName: name } = getGuestParams();
    setGuestName(name);
  }, []);

  return (
    <section id="welcome" className="welcome" aria-label="Welcome & Invitation Message">
      <Container width="narrow">
        <div className="welcome-content">
          {guestName && (
            <div className="welcome-guest-herald" role="region" aria-label={`Personalised invitation for ${guestName}`}>
              <div className="welcome-guest-crest" aria-hidden="true">
                <span className="welcome-guest-diamond">♦</span>
                <span className="welcome-guest-motif">❖</span>
                <span className="welcome-guest-diamond">♦</span>
              </div>
              <p className="welcome-guest-kicker">A PERSONAL INVITATION FOR</p>
              <h3 className="welcome-guest-name">{guestName}</h3>
              <p className="welcome-guest-note">
                We joyfully invite you to celebrate the beginning of our forever.
              </p>
              <div className="welcome-guest-divider-wrap" aria-hidden="true">
                <Divider variant="gold" className="welcome-guest-divider" />
              </div>
            </div>
          )}

          {/* Eyebrow */}
          <p className="welcome-eyebrow">
            THE CELEBRATION OF LOVE
          </p>

          {/* Main Heading */}
          <h2 className="welcome-heading">
            Together with our families
          </h2>

          {/* Subtle Decorative Gold Divider */}
          <Divider variant="gold" className="welcome-divider" />

          {/* Supporting Heading with Editorial Italic Emphasis */}
          <p className="welcome-subheading">
            A beautiful beginning, a lifetime of memories.
          </p>

          {/* Invitation Message */}
          <div className="welcome-body-wrapper">
            <p className="welcome-message">
              With the blessings of our families, we joyfully invite you to join us as we celebrate the beginning of our forever.
            </p>
          </div>

          {/* Closing Signature */}
          <p className="welcome-signature">
            WITH LOVE, AARAV &amp; MEERA
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;

