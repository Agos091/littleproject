"use client";

import { useState, type CSSProperties } from "react";

type MediaImgProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Renders an <img>, falling back to a labelled placeholder block if the asset
 * is missing — so the layout stays intact before the real photos are dropped
 * into /public/assets.
 */
export function MediaImg({ src, alt, className, style }: MediaImgProps) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className={`media media-fallback ${className ?? ""}`} style={style} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`media ${className ?? ""}`}
      style={style}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}
