# Design Platform

A modern, award-winning design platform website built with Next.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Awwwards-quality aesthetic with smooth animations
- **Framer Motion**: Extensive use of animations, transitions, and micro-interactions
- **Dark/Light Mode**: Seamless theme switching with system preference support
- **Fully Responsive**: Optimized for all screen sizes and devices
- **Type-Safe**: Built with TypeScript for robust development
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── portfolio/         # Portfolio showcase
│   ├── pricing/           # Pricing tiers
│   ├── services/          # Services overview
│   └── page.tsx           # Home page
├── components/
│   ├── animations/        # Reusable animation components
│   ├── sections/          # Page sections
│   │   ├── home/         # Home page sections
│   │   ├── Navigation.tsx # Main navigation
│   │   └── Footer.tsx    # Site footer
│   ├── ui/               # UI components
│   └── theme-provider.tsx # Theme provider
└── lib/                  # Utility functions
```

## 🎨 Pages

1. **Home** - Hero, services showcase, testimonials, portfolio preview, stats, CTA
2. **Services** - Complete list of all platform services with descriptions
3. **Pricing** - Pricing tiers, comparison table, FAQs
4. **Portfolio** - Filterable project gallery
5. **About** - Company story, values, timeline, team
6. **Contact** - Contact form, information, and communication options

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jiwuuuu/design-platform.git
cd design-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎭 Animation Features

- **Page Transitions**: Smooth transitions between pages
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on all interactive elements
- **Micro-interactions**: Button presses, card hovers, and more
- **Staggered Animations**: Sequential animations for groups of elements
- **Parallax Effects**: Background elements with depth

## 🎨 Customization

### Colors

Edit the color scheme in `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%;    /* Purple */
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

### Fonts

The project uses Inter and Space Grotesk fonts via Google Fonts CDN.

## 📦 Key Dependencies

- `next`: ^15.5.9
- `react`: ^19.2.3
- `framer-motion`: ^12.23.26
- `next-themes`: ^0.4.6
- `tailwindcss`: ^3.4.17
- `lucide-react`: ^0.561.0

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Jiwuuuu/design-platform)

Or deploy to any platform that supports Next.js.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, reach out to hello@designplatform.com
