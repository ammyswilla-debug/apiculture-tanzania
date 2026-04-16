# Apiculture Tanzania - Project Documentation

## Project Overview

**Apiculture Tanzania** is a modern, production-ready, responsive website designed as a professional educational and information platform for beekeeping in Tanzania. The website serves farmers, students, and organizations seeking comprehensive knowledge about sustainable beekeeping practices.

## Design Philosophy: Organic Warmth

The website implements a carefully crafted design philosophy called **"Organic Warmth"** that combines professional authority with warm, approachable aesthetics.

### Color Palette
- **Primary: Honey Gold (#D4A574)** — Warm, earthy, authentic
- **Secondary: Forest Green (#2D5016)** — Trust, growth, sustainability
- **Accent: Warm Terracotta (#C85A17)** — Energy, passion, African warmth
- **Background: Cream (#F9F5F0)** — Soft, inviting, paper-like
- **Text: Deep Charcoal (#1A1A1A)** — Readable, grounded

### Typography
- **Display Font: Playfair Display (serif)** — Headlines, conveys heritage and authority
- **Body Font: Inter (sans-serif)** — Body text, modern, readable, accessible

### Design Elements
- Organic curves and asymmetric layouts
- Honey-drop SVG accents as section dividers
- Layered shadows and subtle texture for depth
- Smooth animations: fade-in + upward drift on entrance, gentle lift on hover
- Warm, tactile visual experience

## Website Structure

### Pages

1. **Home Page** (`/`)
   - Full-width hero section with background image
   - Feature cards highlighting key offerings
   - "Why Beekeeping Matters" section with benefits
   - Latest updates blog preview
   - Call-to-action banner

2. **Learn Beekeeping** (`/learn`)
   - Knowledge hub with expandable categories
   - Seven main learning categories:
     - Getting Started in Beekeeping
     - Types of Beehives
     - Apiary Site Selection & Setup
     - Hive Inspection & Management
     - Seasonal Beekeeping Practices
     - Pests and Disease Control
     - Honey Harvesting & Processing

3. **Resources** (`/resources`)
   - Download center for educational materials
   - Resource cards with descriptions and file sizes
   - PDF manuals, checklists, and guides
   - One-click download functionality

4. **News & Updates** (`/news`)
   - Blog system with category filtering
   - Blog posts with images, dates, and excerpts
   - Categories: Seasonal Tips, Training, Innovations, Events
   - Card-based layout with search capability

5. **About** (`/about`)
   - Mission and vision statements
   - Core values section
   - Impact statistics
   - Team information

6. **Contact** (`/contact`)
   - Contact form (Name, Email, Subject, Message)
   - Contact information (Email, Phone, Location)
   - WhatsApp integration
   - Professional contact layout

7. **Support Us** (`/support`)
   - Partnership opportunities
   - Contribution options
   - Corporate collaboration information
   - Sponsorship details
   - Impact section

8. **404 Page**
   - Clean error page with navigation back to home

### Navigation

**Header (Sticky)**
- Logo with bee emoji icon
- Main navigation menu: Home, Learn Beekeeping, Resources, News & Updates, About, Contact
- Search icon
- "Support Us" CTA button
- Mobile-responsive hamburger menu

**Footer**
- Quick links section
- Contact information
- Social media links (Facebook, Twitter, Instagram)
- Copyright information

## Technical Stack

- **Framework:** React 19 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS 4 with custom design tokens
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** CSS animations with Tailwind utilities
- **Build Tool:** Vite

## File Structure

```
client/
  ├── public/
  │   └── favicon.ico
  ├── src/
  │   ├── components/
  │   │   ├── Header.tsx          # Sticky navigation
  │   │   ├── Footer.tsx          # Footer with links
  │   │   └── ErrorBoundary.tsx   # Error handling
  │   ├── pages/
  │   │   ├── Home.tsx            # Landing page
  │   │   ├── Learn.tsx           # Knowledge hub
  │   │   ├── Resources.tsx       # Download center
  │   │   ├── News.tsx            # Blog system
  │   │   ├── About.tsx           # About page
  │   │   ├── Contact.tsx         # Contact form
  │   │   ├── Support.tsx         # Support page
  │   │   └── NotFound.tsx        # 404 page
  │   ├── contexts/
  │   │   └── ThemeContext.tsx    # Theme management
  │   ├── App.tsx                 # Main router
  │   ├── main.tsx                # React entry point
  │   └── index.css               # Global styles & design system
  └── index.html                  # HTML template
```

## Design System Implementation

### Colors (CSS Variables)
All colors are defined as CSS variables in `client/src/index.css`:
- `--primary`: Honey Gold
- `--secondary`: Forest Green
- `--accent`: Warm Terracotta
- `--background`: Cream
- `--foreground`: Deep Charcoal
- `--muted`, `--border`, `--input`: Supporting colors

### Spacing System
- Base unit: 8px
- Padding/margin multiples: 4px, 8px, 12px, 16px, 24px, 32px, etc.
- Container max-width: 1280px with responsive padding

### Border Radius
- Small: calc(--radius - 4px)
- Medium: calc(--radius - 2px)
- Large: --radius (24px)
- Extra Large: calc(--radius + 4px)

### Shadows
- `.shadow-warm`: Subtle warm shadow for depth
- `.shadow-warm-lg`: Larger warm shadow for emphasis

### Animations
- `.animate-fade-in-up`: Fade in + upward drift (600ms)
- `.hover-lift`: Hover effect with lift and shadow expansion

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- High contrast text colors
- Clear focus indicators
- Keyboard navigation support
- ARIA labels where appropriate

### Performance
- Optimized image loading with CDN URLs
- Lazy loading for images
- Minimal JavaScript bundle
- Fast page transitions

### SEO
- Descriptive meta tags
- Semantic page structure
- Clean URL hierarchy
- Proper heading hierarchy

## Visual Assets

All images are hosted on CDN and referenced by URL:
- Hero background: Tanzanian apiary at sunset
- Feature images: Hive inspection, honey harvest, community, education
- Blog post images: Seasonal content and updates

## Customization Guide

### Updating Colors
Edit the CSS variables in `client/src/index.css` under `:root` section.

### Adding New Pages
1. Create a new file in `client/src/pages/`
2. Add the route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Header.tsx`

### Modifying Content
- Blog posts: Update `latestPosts` array in `Home.tsx` and `blogPosts` in `News.tsx`
- Resources: Update `resources` array in `Resources.tsx`
- Learning categories: Update `categories` array in `Learn.tsx`
- Features: Update `features` array in `Home.tsx`

### Changing Fonts
Update the Google Fonts import in `client/index.html` and the font-family declarations in `client/src/index.css`.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Format code
npm run format
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features for future development:
- Blog post detail pages with full content
- Resource file uploads and management
- User authentication and accounts
- Newsletter subscription
- Community forum or discussion board
- Video tutorials
- Interactive tools (hive calculator, seasonal planner)
- Multi-language support
- Advanced search functionality

## Contact & Support

For questions or support regarding this website, contact:
- Email: info@apiculture-tz.org
- Phone: +255 123 456 789
- WhatsApp: +255 123 456 789

## License

© 2026 Apiculture Tanzania. All rights reserved.

---

**Project Created:** April 2026
**Last Updated:** April 16, 2026
**Design Philosophy:** Organic Warmth
**Status:** Production Ready
