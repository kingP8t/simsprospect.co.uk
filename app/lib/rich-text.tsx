import Link from "next/link";
import { Fragment } from "react";

export type TextLink = { text: string; href: string };

/**
 * Renders a plain string, turning configured phrases into links on their
 * first occurrence. Used to add internal links inside FAQ answers without
 * giving up plain-string content (which keeps the FAQ schema simple).
 */
export function renderWithLinks(text: string, links?: TextLink[]) {
  if (!links || links.length === 0) return text;

  let nodes: React.ReactNode[] = [text];

  links.forEach((link, li) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (typeof node !== "string") continue;
      const idx = node.indexOf(link.text);
      if (idx === -1) continue;

      const before = node.slice(0, idx);
      const after = node.slice(idx + link.text.length);
      const anchor = (
        <Link
          key={`link-${li}`}
          href={link.href}
          className="font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
        >
          {link.text}
        </Link>
      );
      nodes = [...nodes.slice(0, i), before, anchor, after, ...nodes.slice(i + 1)];
      break; // only link the first occurrence of each phrase
    }
  });

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}
