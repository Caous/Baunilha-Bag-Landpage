export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="#4A2F1F" strokeLinecap="round">
        <path d="M7 45 C20 41 38 38 51 30 C55.5 27.2 57.5 30 53.5 33" strokeWidth="4.6" />
        <path d="M11 33 C23 39 41 46 53 45 C57.4 44.6 56.6 41 52.6 41.4" strokeWidth="4.2" />
      </g>
      <g fill="#FFFEF8" stroke="#E3D5B2" strokeWidth="0.9">
        <ellipse transform="rotate(0 32 27)" cx="32" cy="16.5" rx="5.6" ry="11" />
        <ellipse transform="rotate(72 32 27)" cx="32" cy="16.5" rx="5.6" ry="11" />
        <ellipse transform="rotate(144 32 27)" cx="32" cy="16.5" rx="5.6" ry="11" />
        <ellipse transform="rotate(216 32 27)" cx="32" cy="16.5" rx="5.6" ry="11" />
        <ellipse transform="rotate(288 32 27)" cx="32" cy="16.5" rx="5.6" ry="11" />
      </g>
      <circle cx="32" cy="27" r="5.2" fill="#F5E7A8" stroke="#DDC161" strokeWidth="1" />
      <circle cx="32" cy="27" r="2.4" fill="#FFFEF8" stroke="#E0C878" strokeWidth="0.8" />
    </svg>
  )
}
