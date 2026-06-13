# Videos

Drop your exported MP4s (and optional poster `.jpg` stills) in this folder,
then flip the matching `enabled: true` flag in `app/lib/video.ts`.

| Purpose            | Video file            | Poster (optional)       | Config key in `app/lib/video.ts` |
| ------------------ | --------------------- | ----------------------- | -------------------------------- |
| Hero founder intro | `founder-intro.mp4`   | `founder-intro.jpg`     | `video.hero`                     |
| Hero background    | `hero-broll.mp4`      | —                       | `video.heroBackground`           |
| How-it-works       | `how-it-works.mp4`    | `how-it-works.jpg`      | `video.explainer`                |

## Tips

- **Keep files small.** Export at 1080p, H.264/AAC, and aim for under ~10 MB.
  Large files slow the page and cost bandwidth. Compress with HandBrake or
  `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -preset slow out.mp4` if needed.
- **Posters** are the still shown before play. A 1280×720 JPG works well.
- The hero **background B-roll** plays muted and looping, so make it a calm,
  texture-style clip — not something with important audio or detail.

## ⚠️ Honesty / legal note

AI-generated video (e.g. Higgsfield) is fine for **explainers, founder
intros, and background motion**. Do **not** use AI or actors to fabricate
**client testimonials**. Presenting fake customers as real can breach UK
ASA/CAP advertising rules and destroys trust. Use only genuine, attributable
recordings as social proof — your real case studies already do that job.
