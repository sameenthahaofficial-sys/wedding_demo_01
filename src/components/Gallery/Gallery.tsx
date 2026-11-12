import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionHeader } from '../common/SectionHeader';
import { GalleryItem } from './GalleryItem';
import './Gallery.css';

export const Gallery: React.FC = () => {
  const { gallery } = weddingConfig;

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <div className="gallery-container">
        <SectionHeader
          kicker={gallery.eyebrow}
          title={gallery.heading}
          subtitle={gallery.subtitle}
          className="gallery-section-header"
        />

        <div className="gallery-grid" role="region" aria-label="Wedding celebration photos">
          {gallery.images.map((image, index) => (
            <GalleryItem
              key={image.id}
              item={image}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

