# VOSS — Cinematic Scrollytelling Experience

A premium, Awwwards-level landing page featuring scroll-driven canvas animation revealing a water bottle emerging from a glacier.

## Features

- 🎬 Cinematic scroll-driven frame animation (92 frames)
- 🎨 Canvas-based rendering for 60fps performance
- 📱 Fully responsive with mobile optimization
- ✨ Framer Motion narrative overlays
- 🧊 Glacier-themed color palette (#A9D6E5)
- ⚡ Sophisticated preloader with progress tracking

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- HTML5 Canvas

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page orchestration
│   └── globals.css      # Global styles
├── components/
│   ├── GlacierScroll.tsx    # Canvas frame animation
│   ├── NarrativeOverlay.tsx # Text overlays
│   └── Preloader.tsx        # Loading screen
└── public/
    └── sequence/            # Frame images (92 frames)
```

## Animation Timeline

- **0-15%**: "Pure Origin" intro
- **25-40%**: "Untouched. Unfiltered" left text
- **50-65%**: "Crystal clarity" right text
- **80-100%**: Hero VOSS reveal + CTA

## Performance

- Preloads all frames before animation
- Canvas rendering for smooth 60fps
- Aspect ratio preservation on all devices
- Efficient scroll-driven frame selection

## Customization

Adjust frame count in `app/page.tsx`:
```typescript
const TOTAL_FRAMES = 92
```

Modify colors in `tailwind.config.ts` and `app/globals.css`
