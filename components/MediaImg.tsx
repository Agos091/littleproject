"use client";

import { useState, type CSSProperties } from "react";

// Under GitHub Pages the app lives at /<repo>/, so root-absolute asset paths
// (`/assets/...`) need the basePath prepended. Empty locally.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => (p.startsWith("/") ? `${BASE}${p}` : p);

type MediaImgProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /**
   * Wrap the image in a VHS/chromatic-glitch treatment (auto-plays, no hover needed).
   * `true` = full effect (covers); `"subtle"` = gentle flicker for photos.
   */
  glitch?: boolean | "subtle";
};

/**
 * Renders an <img>, falling back to a labelled placeholder block if the asset
 * is missing — so the layout stays intact before the real photos are dropped
 * into /public/assets.
 *
 * With `glitch`, the image is wrapped in a figure that layers two chromatic
 * copies + scanlines over it. The effect auto-plays on a slow loop (so touch
 * devices see it without hovering) and intensifies on hover where available.
 */
export function MediaImg({ src, alt, className, style, glitch }: MediaImgProps) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className={`media media-fallback ${className ?? ""}`} style={style} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  const resolved = withBase(src);

  if (glitch) {
    const glitchStyle = { ...style, "--glitch-src": `url("${resolved}")` } as CSSProperties;
    const variant = glitch === "subtle" ? "glitch--subtle" : "";
    return (
      <span className={`glitch ${variant} ${className ?? ""}`} style={glitchStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt}
          className="glitch__img"
          loading="lazy"
          onError={() => setBroken(true)}
        />
        <span className="glitch__layer glitch__layer--r" aria-hidden="true" />
        <span className="glitch__layer glitch__layer--c" aria-hidden="true" />
        <span className="glitch__scan" aria-hidden="true" />
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      className={`media ${className ?? ""}`}
      style={style}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}
