import Link from "next/link";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
};

export default function Hero({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryAction?: Action;
  secondaryAction?: Action;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 text-primary-foreground relative overflow-hidden ${className || ""}`}
      style={{
        background: "linear-gradient(135deg, var(--hero-from), var(--hero-to))",
      }}
    >
      <div className="relative z-10">
        {badge ? (
          <div className="text-xs font-medium opacity-90">{badge}</div>
        ) : null}
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle ? (
          <p className="mt-2 text-sm opacity-90">{subtitle}</p>
        ) : null}
        {(primaryAction || secondaryAction) && (
          <div className="mt-5 flex gap-3 flex-wrap">
            {primaryAction ? (
              <Link href={primaryAction.href} className="btn-primary">
                {primaryAction.icon}
                {primaryAction.icon ? <span className="ml-2">{primaryAction.label}</span> : primaryAction.label}
              </Link>
            ) : null}
            {secondaryAction ? (
              <Link href={secondaryAction.href} className="btn-secondary">
                {secondaryAction.icon}
                {secondaryAction.icon ? <span className="ml-2">{secondaryAction.label}</span> : secondaryAction.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
      {/* pattern dots removed per design request */}
      <div
        aria-hidden
        className="absolute right-6 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-[40%]"
        style={{
          background: "color-mix(in srgb, var(--hero-to) 70%, white)",
          opacity: 0.25,
          filter: "blur(0.5px)",
        }}
      />
    </div>
  );
}


