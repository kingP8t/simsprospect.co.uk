"use client";

import { founder } from "@/app/lib/site";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

/**
 * Renders the founder photo, falling back to an initials tile if the
 * image file doesn't exist yet. Client component because of the onError
 * handler that hides the broken <img>.
 *
 * Drop a square photo at the path in `founder.photoSrc` (default:
 * /public/founder.jpg) and the placeholder is replaced automatically.
 */
export function FounderAvatar({
  className = "",
  shape = "square",
  initialsClassName = "",
}: {
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
        {getInitials(founder.name)}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={founder.photoSrc}
        alt={`${founder.name}, ${founder.role}`}
        className="relative h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
