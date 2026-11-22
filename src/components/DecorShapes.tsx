export function OrbitShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="50" stroke="#D7E2EA" strokeOpacity="0.3" />
      <ellipse cx="60" cy="60" rx="50" ry="20" stroke="#D7E2EA" strokeOpacity="0.5" transform="rotate(20 60 60)" />
      <circle cx="60" cy="60" r="10" fill="#D7E2EA" fillOpacity="0.8" />
      <circle cx="106" cy="45" r="4" fill="#D7E2EA" />
    </svg>
  );
}

export function CubeShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <path d="M60 10 L105 35 L105 85 L60 110 L15 85 L15 35 Z" stroke="#D7E2EA" strokeOpacity="0.5" />
      <path d="M60 10 L60 60 M15 35 L60 60 M105 35 L60 60 M60 60 L60 110" stroke="#D7E2EA" strokeOpacity="0.35" />
    </svg>
  );
}

export function NodeShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r="6" fill="#D7E2EA" fillOpacity="0.8" />
      <circle cx="90" cy="40" r="8" fill="#D7E2EA" fillOpacity="0.5" />
      <circle cx="60" cy="90" r="5" fill="#D7E2EA" fillOpacity="0.7" />
      <path d="M30 30 L90 40 M90 40 L60 90 M60 90 L30 30" stroke="#D7E2EA" strokeOpacity="0.3" />
    </svg>
  );
}

export function BracketShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <path d="M45 20 L20 60 L45 100" stroke="#D7E2EA" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 20 L100 60 L75 100" stroke="#D7E2EA" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
