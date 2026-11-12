import React from 'react';
import { GalleryImageItem } from '../../types';

export interface GalleryItemProps {
  item: GalleryImageItem;
  index: number;
  priority?: boolean;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  index,
  priority = false,
}) => {
  return (
    <article
      className={`gallery-item gallery-item--${item.id}`}
      aria-label={item.category}
    >
      <div className="gallery-item-inner">
        <picture className="gallery-picture">
          <source type="image/avif" srcSet={item.avif || item.src.replace(/\.jpg$/, '.avif')} />
          <source type="image/webp" srcSet={item.webp || item.src.replace(/\.jpg$/, '.webp')} />
          <img
            src={item.jpg || item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading={priority || index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            className="gallery-img"
            style={{
              objectPosition: item.objectPosition || 'center center',
            }}
          />
        </picture>
        {item.category && (
          <div className="gallery-caption" aria-hidden="true">
            {item.category}
          </div>
        )}
      </div>
    </article>
  );
};

