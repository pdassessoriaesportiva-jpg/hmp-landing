type HmpIconProps = {
  className?: string;
};

function IconShell({ children, className = "" }: HmpIconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="62" height="62" rx="18" stroke="currentColor" opacity="0.18" />
      {children}
    </svg>
  );
}

export function BreathIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <path d="M15 29C21 18 35 18 40 28C43 34 39 41 31 41H15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 49H41C49 49 53 42 50 36C48 32 44 30 39 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 19C22 14 29 12 36 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </IconShell>
  );
}

export function MobilityIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <path d="M18 42C26 24 39 20 48 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 16H50V24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 44C24 48 35 49 47 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <circle cx="21" cy="41" r="4" stroke="currentColor" strokeWidth="2.5" />
    </IconShell>
  );
}

export function PostureIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <path d="M32 13V51" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 24C29 29 35 29 42 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M21 39C28 35 36 35 43 39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="2.5" />
    </IconShell>
  );
}

export function CoreIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <path d="M25 15H39L45 30L40 49H24L19 30L25 15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M25 31C30 35 34 35 39 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 22H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M28 41H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </IconShell>
  );
}

export function VacuumIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <path d="M18 23C27 30 37 30 46 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M21 28C25 42 39 42 43 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 16V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.55" />
      <path d="M26 36H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </IconShell>
  );
}

export function BodyAwarenessIcon(props: HmpIconProps) {
  return (
    <IconShell {...props}>
      <circle cx="32" cy="32" r="15" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      <path d="M32 10V17M32 47V54M10 32H17M47 32H54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
      <path d="M18 18L23 23M46 18L41 23M18 46L23 41M46 46L41 41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </IconShell>
  );
}
