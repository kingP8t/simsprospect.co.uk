"use client";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

/**
 * Renders a person's photo, falling back to a clean initials tile if the
 * image file doesn't exist yet. Client component because of the onError
 * handler that hides the broken <img> so the initials show through.
 *
 * Drop a square photo at the `photoSrc` path (under /public) and the
 * placeholder is replaced automatically — no broken image in between.
 */
export function Avatar({
  name,
  photoSrc,
  role,
  className = "",
  shape = "square",
  initialsClassName = "",
}: {
  name: string;
  photoSrc: string;
  role: string;
  className?: string;
  shape?: "square" | "circle";
  initialsClassName?: string;
}) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-2xl";

  return (
    <div className={`relative overflow-hidden ${radius} ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute inset-0 grid place-items-center bg-brand-tint font-bold text-brand ${initialsClassName}`}
      >
        {getInitials(name)}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photoSrc}
        alt={`${name}, ${role}`}
        className="relative h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
