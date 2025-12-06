# XYREL — Encrypted Asset Vault Website (Next.js + Tailwind)

<p align="center">
  <strong>YOUR KEY, YOUR ASSETS.</strong><br/>
  A cyber-teal, security-first marketing site for XYREL: an encrypted platform to manage digital assets privately.
</p>

<p align="center">
  <a href="#overview">Overview</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#features">Features</a> ·
  <a href="#sections--routes">Sections & Routes</a> ·
  <a href="#getting-started">Getting Started</a> ·
  <a href="#customization">Customization</a> ·
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

**XYREL** is a modern, interactive landing website built with **Next.js** and **Tailwind CSS**, designed around a **dark cyber aesthetic** with a single accent palette (cyan/teal). The UI emphasizes:

- High-contrast readability on dark backgrounds
- Glass surfaces, soft glow accents, and subtle grid/noise layers
- Micro-interactions (hover lift, glow, underline)
- Scroll-based reveal (fade in/out) for a more lively experience

This repository contains a complete landing page experience:
- Hero + CTA + contract copy UX
- About
- Features
- Use Cases
- Pricing
- Insights
- Footer

---

## Tech Stack

- **Next.js (App Router)** — React framework for production
- **Tailwind CSS** — utility-first styling
- **IntersectionObserver** — zero-dependency scroll reveal animations
- **CSS Variables** — centralized theme tokens (colors, backgrounds, glow)

---

## Design System

### Color Palette (XYREL Theme)

**Cyber Teal Accent**
- Primary: `#45A7A6`
- Dark Accent (borders/thin elements): `#3B8F8F`
- Glow Accent: `#6ACCCC`

**Background / Gradients**
- Solid Black: `#000000`
- Deep Tint: `#0A0F11`
- Gradient Transition: `#0D1113`
- Shadow Background: `#131A1C`

---

## Features

### Interaction & Motion

- Hover lift + glow effects for cards and buttons
- Animated underline on navigation links
- Scroll reveal animations (fade in/out + blur reduction) powered by `IntersectionObserver`
- Parallax-like background movement tied to scroll position (CSS variable driven)

### UI Building Blocks

- **MovingBackground**: layered glow + grid + noise (`pointer-events: none` so it never blocks clicks/hover)
- **GlassCard**: reusable card style with hover and reveal transitions
- **SectionTitle**: consistent section headers with kicker badge and accent highlight

### UX Touches

- Contract address copy button with “Copied” feedback state
- Responsive layout from mobile to desktop
- Clean content hierarchy and spacing for readability

---

## Sections & Routes

### Sections (single page anchors)

- `#home`
- `#about`
- `#features`
- `#use-cases`
- `#pricing`
- `#insights`

### Routes

- `/` — Landing page
- `/docs` — Optional documentation route (create `app/docs/page.tsx` if needed)

---

## Project Structure

Typical App Router layout:

```bash
.
├─ app/
│  ├─ page.tsx              # main landing page
│  ├─ globals.css           # Tailwind imports + XYREL theme variables + animations
│  └─ layout.tsx            # Next layout wrapper
├─ public/
│  └─ (optional assets)     # logos, icons, images
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## How It Works

1. You Request a Resource: Tell XYREL what service or API you need access to
2. XYREL Handles Payment: The agent automatically detects HTTP 402 responses and processes blockchain payments
3. Instant Access: Once payment is verified, you receive immediate access to the resource

## Use Cases
### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables based on your .env.example
4. Deploy

## Environment Variables

Use .env.example as your template and add only what your x402 setup requires (facilitator URL, network settings, spend limits, etc.).
### x402 Protocol Integration
To make XYREL actually process payments, you'll need to integrate with the x402 protocol:

1. Implement x402 facilitator endpoints for payment verification
2. Add blockchain wallet connectivity (Phantom, WalletConnect, MetaMask)
3. Implement spending limits and transaction monitoring
4. Connect to x402-compatible services

## Important Disclaimers
- User Responsibility: Users are responsible for setting appropriate spending limits and monitoring transactions
- Blockchain Transactions: All blockchain transactions are irreversible
- Service Trust: Always verify and trust the services you're accessing
- Beta Software: This is experimental software for demonstration purposes

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the MIT License.

## Tokenomics
$XYREL Token
XYREL features a sustainable token economy designed to create value for holders through platform fees and automatic buybacks.

## Resources

- [x402 Protocol Website](https://x402.org)
- [x402 Documentation](https://x402.gitbook.io/x402)
- [x402 GitHub](https://github.com/x402)
