type LogoProps = {
  /** Show the "HIGH QUALITY NOISE." slogan under the wordmark. */
  slogan?: boolean;
  className?: string;
};

/**
 * Official Little Project wordmark, reproduced as live text so it stays crisp
 * and adopts the site theme (the source logo is black-on-white).
 */
export function Logo({ slogan = false, className = "" }: LogoProps) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__name">Little Project.</span>
      {slogan && <span className="logo__slogan">High Quality Noise.</span>}
    </span>
  );
}
