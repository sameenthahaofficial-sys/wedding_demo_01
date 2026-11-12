import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { Container, Divider, SectionHeader } from '../common';
import { RSVPAttendance, RSVPFormData, RSVPFormErrors } from '../../types';
import {
  downloadCalendarFile,
  downloadInvitationCardImage,
  generateCalendarIcs,
  getGuestParams,
  getRandomInvitationMessage,
} from '../../utils';
import './RSVP.css';

export const RSVP: React.FC = () => {
  const { rsvp } = weddingConfig;

  const initialFormData: RSVPFormData = {
    guestName: '',
    attendance: null,
    guestCount: 2,
    message: '',
  };

  const [formData, setFormData] = useState<RSVPFormData>(initialFormData);
  const [errors, setErrors] = useState<RSVPFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<RSVPFormData | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<string>('');
  const [urlGuestName, setUrlGuestName] = useState<string | null>(null);

  // Parse URL Parameters on Mount (?guest=Name&demoGuest=1)
  useEffect(() => {
    const { guestName: name, isDemoGuest } = getGuestParams();
    if (name) {
      setUrlGuestName(name);
    }
    if (name || isDemoGuest) {
      setFormData((prev) => ({
        ...prev,
        ...(name ? { guestName: name } : {}),
        ...(isDemoGuest
          ? {
              attendance: 'accept',
              guestCount: 3,
              message: "Wouldn't miss it, bro! Can't wait to celebrate with you.",
            }
          : {}),
      }));
    }
  }, []);

  // Handle Attendance Selection
  const handleAttendanceChange = (choice: RSVPAttendance) => {
    setFormData((prev) => ({
      ...prev,
      attendance: choice,
      // Reset guest count to default 1 or 2 when accepting, or keep intact
      guestCount: choice === 'accept' ? (prev.guestCount || 2) : 0,
    }));

    if (errors.attendance) {
      setErrors((prev) => ({ ...prev, attendance: undefined }));
    }
  };

  // Field validation
  const validate = (): boolean => {
    const newErrors: RSVPFormErrors = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your full name.';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please let us know whether you can attend.';
    }

    if (formData.attendance === 'accept') {
      if (!formData.guestCount || formData.guestCount < 1 || formData.guestCount > 5) {
        newErrors.guestCount = 'Please select the number of guests attending.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission (Client-side demonstration only)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setConfirmedData({ ...formData });
      const randomMsg = getRandomInvitationMessage();
      setSelectedMessage(randomMsg);
      setIsSubmitted(true);
    }
  };

  // Reset / Edit Response
  const handleReset = () => {
    setIsSubmitted(false);
    setConfirmedData(null);
    setSelectedMessage('');
    const { guestName: name, isDemoGuest } = getGuestParams();
    if (name) {
      setFormData({
        guestName: name,
        attendance: isDemoGuest ? 'accept' : null,
        guestCount: isDemoGuest ? 3 : 2,
        message: isDemoGuest ? "Wouldn't miss it, bro! Can't wait to celebrate with you." : '',
      });
    } else {
      setFormData(initialFormData);
    }
    setErrors({});
  };

  // Download high-resolution digital invitation PNG
  const handleDownloadInvitation = () => {
    if (!confirmedData) return;
    downloadInvitationCardImage({
      guestName: confirmedData.guestName,
      quote: selectedMessage,
      attendance: confirmedData.attendance || 'accept',
      guestCount: confirmedData.guestCount,
    });
  };

  // Add to Calendar (.ics download)
  const handleAddToCalendar = () => {
    if (!confirmedData) return;
    const icsContent = generateCalendarIcs({
      guestName: confirmedData.guestName,
      selectedMessage,
    });
    const safeName = confirmedData.guestName.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
    downloadCalendarFile(icsContent, `Wedding-Aarav-Meera-${safeName || 'Guest'}.ics`);
  };

  return (
    <section id="rsvp" className="rsvp" aria-labelledby="rsvp-heading">
      <Container width="narrow">
        <SectionHeader
          kicker={rsvp.eyebrow}
          title={rsvp.heading}
          subtitle={rsvp.subtitle}
          className="rsvp-section-header"
        />

        <div className="rsvp-card card-royal card-royal-ornate">
          {/* Subtle Corner Filigree Accents */}
          <div className="rsvp-filigree rsvp-filigree-tl" aria-hidden="true">❖</div>
          <div className="rsvp-filigree rsvp-filigree-tr" aria-hidden="true">❖</div>
          <div className="rsvp-filigree rsvp-filigree-bl" aria-hidden="true">❖</div>
          <div className="rsvp-filigree rsvp-filigree-br" aria-hidden="true">❖</div>

          {!isSubmitted ? (
            /* =========================================================
               ACTIVE RSVP FORM
               ========================================================= */
            <form onSubmit={handleSubmit} className="rsvp-form" noValidate>
              {/* Optional Personal Invitation Badge if URL guest is detected */}
              {urlGuestName && (
                <div className="rsvp-guest-header-badge" role="region" aria-label={`Personalised invitation for ${urlGuestName}`}>
                  <span className="rsvp-guest-badge-diamond" aria-hidden="true">♦</span>
                  <span className="rsvp-guest-badge-text">
                    Personalised Invitation for <strong>{urlGuestName}</strong>
                  </span>
                  <span className="rsvp-guest-badge-diamond" aria-hidden="true">♦</span>
                </div>
              )}

              <div className="rsvp-card-header">
                <p className="rsvp-card-eyebrow">CELEBRATION INQUIRY</p>
                <h3 className="rsvp-card-title">Response Card</h3>
                <Divider variant="gold" className="rsvp-card-divider" />
              </div>

              {/* Field 1: Guest Name */}
              <div className="rsvp-field">
                <label htmlFor="rsvp-guest-name" className="rsvp-label">
                  <span>Guest Name</span>
                  <span className="rsvp-required-star" aria-hidden="true">*</span>
                </label>
                <input
                  id="rsvp-guest-name"
                  type="text"
                  name="guestName"
                  value={formData.guestName}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, guestName: e.target.value }));
                    if (errors.guestName) {
                      setErrors((prev) => ({ ...prev, guestName: undefined }));
                    }
                  }}
                  placeholder={rsvp.placeholderName}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.guestName}
                  aria-describedby={errors.guestName ? 'rsvp-name-error' : undefined}
                  className={`rsvp-input ${errors.guestName ? 'rsvp-input-error' : ''}`}
                />
                {errors.guestName && (
                  <p id="rsvp-name-error" className="rsvp-error-text" role="alert">
                    {errors.guestName}
                  </p>
                )}
              </div>

              {/* Field 2: Attendance Selection */}
              <fieldset
                className="rsvp-fieldset"
                aria-required="true"
                aria-invalid={!!errors.attendance}
                aria-describedby={errors.attendance ? 'rsvp-attendance-error' : undefined}
              >
                <legend className="rsvp-label">
                  <span>Will you be attending?</span>
                  <span className="rsvp-required-star" aria-hidden="true">*</span>
                </legend>

                <div className="rsvp-attendance-options" role="radiogroup" aria-label="Attendance options">
                  {/* Option A: Accept */}
                  <label
                    className={`rsvp-attendance-option ${
                      formData.attendance === 'accept' ? 'rsvp-option-selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="accept"
                      checked={formData.attendance === 'accept'}
                      onChange={() => handleAttendanceChange('accept')}
                      className="rsvp-radio-native"
                    />
                    <div className="rsvp-option-content">
                      <span className="rsvp-option-icon" aria-hidden="true">✦</span>
                      <span className="rsvp-option-text">Joyfully Accept</span>
                    </div>
                  </label>

                  {/* Option B: Decline */}
                  <label
                    className={`rsvp-attendance-option ${
                      formData.attendance === 'decline' ? 'rsvp-option-selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="decline"
                      checked={formData.attendance === 'decline'}
                      onChange={() => handleAttendanceChange('decline')}
                      className="rsvp-radio-native"
                    />
                    <div className="rsvp-option-content">
                      <span className="rsvp-option-icon" aria-hidden="true">✧</span>
                      <span className="rsvp-option-text">Regretfully Decline</span>
                    </div>
                  </label>
                </div>

                {errors.attendance && (
                  <p id="rsvp-attendance-error" className="rsvp-error-text" role="alert">
                    {errors.attendance}
                  </p>
                )}
              </fieldset>

              {/* Field 3: Number of Guests (Conditional on Joyfully Accept) */}
              {formData.attendance === 'accept' && (
                <div className="rsvp-field rsvp-guest-count-field">
                  <label htmlFor="rsvp-guest-count" className="rsvp-label">
                    <span>Number of Guests Attending</span>
                    <span className="rsvp-required-star" aria-hidden="true">*</span>
                  </label>
                  <div className="rsvp-select-wrapper">
                    <select
                      id="rsvp-guest-count"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        setFormData((prev) => ({ ...prev, guestCount: val }));
                        if (errors.guestCount) {
                          setErrors((prev) => ({ ...prev, guestCount: undefined }));
                        }
                      }}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.guestCount}
                      aria-describedby={errors.guestCount ? 'rsvp-guest-error' : undefined}
                      className={`rsvp-select ${errors.guestCount ? 'rsvp-input-error' : ''}`}
                    >
                      {rsvp.guestCountOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="rsvp-select-arrow" aria-hidden="true">▾</span>
                  </div>
                  {errors.guestCount && (
                    <p id="rsvp-guest-error" className="rsvp-error-text" role="alert">
                      {errors.guestCount}
                    </p>
                  )}
                </div>
              )}

              {/* Field 4: A Message for the Couple */}
              <div className="rsvp-field">
                <label htmlFor="rsvp-message" className="rsvp-label">
                  <span>A Message for the Couple</span>
                  <span className="rsvp-optional-tag">(Optional)</span>
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={rsvp.placeholderMessage}
                  className="rsvp-textarea"
                />
              </div>

              {/* Form Actions */}
              <div className="rsvp-submit-wrapper">
                <button type="submit" className="btn btn-primary btn-lg rsvp-submit-btn">
                  <span>SEND RSVP</span>
                  <span className="rsvp-submit-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              {/* Portfolio Demonstration Notice */}
              <div className="rsvp-demo-notice" role="note">
                <span className="rsvp-notice-icon" aria-hidden="true">ℹ</span>
                <span>{rsvp.demonstrationNotice}</span>
              </div>
            </form>
          ) : (
            /* =========================================================
               PERSONALISED DIGITAL INVITATION CARD & CONFIRMATION
               ========================================================= */
            <div className="rsvp-confirmation" role="status" aria-live="polite">
              <div className="digital-invitation-card">
                {/* Ornamental Inset Corner Filigrees */}
                <div className="invitation-filigree invitation-filigree-tl" aria-hidden="true">❖</div>
                <div className="invitation-filigree invitation-filigree-tr" aria-hidden="true">❖</div>
                <div className="invitation-filigree invitation-filigree-bl" aria-hidden="true">❖</div>
                <div className="invitation-filigree invitation-filigree-br" aria-hidden="true">❖</div>

                {/* Header & Crest */}
                <header className="invitation-header">
                  <div className="invitation-crest" aria-hidden="true">
                    <span className="invitation-crest-diamond">♦</span>
                    <span className="invitation-crest-motif">❖</span>
                    <span className="invitation-crest-diamond">♦</span>
                  </div>
                  <p className="invitation-eyebrow">ROYAL HERITAGE WEDDING CELEBRATION</p>
                  <h3 className="invitation-couple-names">Aarav &amp; Meera</h3>
                  <p className="invitation-formal-request">
                    CORDIALLY REQUEST THE HONOUR OF THE PRESENCE OF
                  </p>
                  <h2 className="invitation-guest-name">{confirmedData?.guestName}</h2>
                </header>

                <Divider variant="gold" className="invitation-divider" />

                {/* Randomly Selected Personalised Message (Stable while displayed) */}
                <div className="invitation-quote-wrapper">
                  <blockquote className="invitation-quote">
                    &ldquo;{selectedMessage}&rdquo;
                  </blockquote>
                </div>

                {/* Celebration Details Grid */}
                <div className="invitation-details-grid">
                  <div className="invitation-detail-item">
                    <span className="invitation-detail-label">WEDDING DATE</span>
                    <span className="invitation-detail-value">18 February 2027</span>
                  </div>
                  <div className="invitation-detail-item">
                    <span className="invitation-detail-label">CEREMONY TIME</span>
                    <span className="invitation-detail-value">5:00 PM IST</span>
                  </div>
                  <div className="invitation-detail-item">
                    <span className="invitation-detail-label">LOCATION</span>
                    <span className="invitation-detail-value">Udaipur, Rajasthan, India</span>
                  </div>
                </div>

                {/* Confirmed Attendance & Party Summary */}
                <div className="invitation-status-row">
                  <div className="invitation-status-badge">
                    <span className="invitation-status-dot" aria-hidden="true">●</span>
                    <span className="invitation-status-text">
                      {confirmedData?.attendance === 'accept'
                        ? `Joyfully Attending · Party of ${confirmedData?.guestCount} ${confirmedData?.guestCount === 1 ? 'Guest' : 'Guests'}`
                        : 'Regretfully Declining with Warm Wishes'}
                    </span>
                  </div>
                </div>

                {confirmedData?.message?.trim() && (
                  <div className="invitation-guest-note">
                    <span className="invitation-note-label">Your Note:</span>
                    <span className="invitation-note-text">&ldquo;{confirmedData.message.trim()}&rdquo;</span>
                  </div>
                )}

                {/* Action Buttons: Download Invitation, Add to Calendar, Return to Website */}
                <div className="invitation-actions">
                  <button
                    type="button"
                    onClick={handleDownloadInvitation}
                    className="btn btn-gold btn-sm invitation-action-btn invitation-download-btn"
                    aria-label={`Download digital wedding invitation for ${confirmedData?.guestName}`}
                  >
                    <span className="invitation-btn-icon" aria-hidden="true">↓</span>
                    <span>Download Invitation</span>
                  </button>

                  {confirmedData?.attendance === 'accept' && (
                    <button
                      type="button"
                      onClick={handleAddToCalendar}
                      className="btn btn-secondary btn-sm invitation-action-btn invitation-calendar-btn"
                      aria-label="Add wedding to your calendar as an ICS event"
                    >
                      <span className="invitation-btn-icon" aria-hidden="true">📅</span>
                      <span>Add to Calendar</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline btn-sm invitation-action-btn rsvp-reset-btn"
                    aria-label="Return to website and edit response"
                  >
                    <span>Return to Website</span>
                  </button>
                </div>
              </div>

              {/* Demonstration Disclaimer Banner */}
              <div className="rsvp-disclaimer-box">
                <p className="rsvp-disclaimer-heading">
                  <span className="rsvp-disclaimer-icon" aria-hidden="true">❖</span>
                  <span>Portfolio Demonstration Interaction</span>
                </p>
                <p className="rsvp-disclaimer-text">
                  This website is a portfolio demonstration for the Royal Heritage wedding experience. No guest details have been transmitted, recorded, or stored on any server or database.
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default RSVP;

