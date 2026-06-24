# Team photos

Drop founder and team headshots here. They appear in the "Meet the team"
section on the homepage.

## Format

- **Type:** `.jpg` (or `.webp` for smaller files)
- **Shape:** square, 1:1 aspect ratio (the image is cropped to a square)
- **Size:** founder ~600×600px, other members ~400×400px
- **File weight:** compress to under ~200 KB (founder) / ~150 KB (members)
- **Framing:** centre the face — edges may be cropped
- **Naming:** lowercase, hyphens, no spaces (e.g. `king.jpg`, `jane-doe.jpg`)

## How to add a photo

**Founder** — name the file `king.jpg` and drop it in this folder. It is
already wired up via `founder.photoSrc` in `app/lib/site.ts`.

**Team members** — drop the file here, then add an entry to the `team`
array in `app/lib/site.ts`:

```ts
export const team = [
  {
    name: "Jane Doe",
    role: "Head of Outreach",
    photoSrc: "/team/jane-doe.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jane-doe/",
  },
];
```

Until a photo file exists, a clean initials tile shows in its place, so the
site never displays a broken image.
