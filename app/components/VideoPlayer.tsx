"use client";

import { useRef, useState } from "react";

type Props = {
  /** Path under /public, e.g. "/videos/founder-intro.mp4". */
  src: string;
  /** Optional still shown before play. */
  poster?: string;
  /** Accessible label for the play button. */
  title?: string;
  className?: string;
};

/**
 * Lazy, dependency-free video player. Shows the poster with a play button
 * and only loads the video bytes once the visitor clicks play
 * (`preload="none"`), so it never slows down the initial page.
 */
export function VideoPlayer({ src, poster, title, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    ref.current?.play();
  }

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-200 ${className}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        preload="none"
        playsInline
        className="h-full w-full object-cover"
        onPlay={() => setStarted(true)}
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={title ? `Play video: ${title}` : "Play video"}
          className="group absolute inset-0 grid place-items-center bg-slate-900/20 transition-colors hover:bg-slate-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-brand shadow-lg transition-transform group-hover:scale-105">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="ml-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
