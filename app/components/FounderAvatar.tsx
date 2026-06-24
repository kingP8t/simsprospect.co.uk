import { Avatar } from "@/app/components/Avatar";
import { founder } from "@/app/lib/site";

/**
 * Thin wrapper around <Avatar> bound to the founder. Kept as its own
 * component because the hero and final CTA both reference the founder
 * directly. To add other people, use <Avatar> with explicit props.
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
  return (
    <Avatar
      name={founder.name}
      photoSrc={founder.photoSrc}
      role={founder.role}
      className={className}
      shape={shape}
      initialsClassName={initialsClassName}
    />
  );
}
