export function XSparkLogo({ className = "", id = "xGrad" }: { className?: string; id?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B008B", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#DC143C", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M10 10 L45 50 L10 90 L30 90 L55 58 L80 90 L100 90 L65 50 L100 10 L80 10 L55 42 L30 10 Z"
        fill={`url(#${id})`}
      />
    </svg>
  )
}
