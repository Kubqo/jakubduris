const base = "icon-svg";

export const ArrowUpRight = ({ className = "" }) => (
  <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const MailIcon = ({ className = "" }) => (
  <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PhoneIcon = ({ className = "" }) => (
  <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const PinIcon = ({ className = "" }) => (
  <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const SparkleIcon = ({ className = "" }) => (
  <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="M5.6 5.6l3 3M15.4 15.4l3 3M5.6 18.4l3-3M15.4 8.6l3-3" />
  </svg>
);

export const StatusDot = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`relative inline-flex h-2 w-2 ${className}`}
  >
    <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
  </span>
);
