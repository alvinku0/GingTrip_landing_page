# Landing Page of GingTrip

## 📦 Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/xxxxxxxx
   cd xxxxxxxx
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Tech Stack

### Frontend Framework
- **Next.js 14** - React-based framework with App Router for server-side rendering and static generation
- **React 18** - Component-based UI library with modern features
- **TypeScript 5** - Type-safe JavaScript for better development experience

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework for responsive design
- **Framer Motion 11** - Animation library for smooth interactions and transitions
- **React Icons 5** - Comprehensive icon library
- **tailwind-merge** - Utility for merging Tailwind classes conditionally

### Build & Development Tools
- **PostCSS** - CSS transformation and processing
- **ESLint** - Code linting and formatting
- **Sharp** - High-performance image optimization
- **Node.js** - JavaScript runtime environment

### External Dependencies
- **Font Awesome 6** - Icon library loaded via CDN
- **Custom Fonts** - Helvetica Neue font stack for typography

## Architecture

### Component Architecture
- **Modular Design** - Each section is a separate, reusable component
- **Client-Side Components** - Interactive components use "use client" directive
- **Server Components** - Static components leverage SSR by default
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

### Performance Optimizations
- **Image Optimization** - Next.js Image component with Sharp for WebP/AVIF formats
- **Bundle Optimization** - Experimental package import optimization for Framer Motion
- **Code Splitting** - Automatic code splitting via Next.js App Router
- **Caching Strategy** - Long-term caching for static assets (31536000s)

### Security Features
- **Content Security Policy** - Comprehensive CSP headers
- **Security Headers** - XSS protection, frame options, content type sniffing prevention
- **Permissions Policy** - Restricts camera, microphone, and geolocation access
- **Referrer Policy** - Controls referrer information sharing

### Animation & Interactions
- **Scroll-based Animations** - Framer Motion scroll triggers and transforms
- **3D CSS Animations** - Custom word carousel with 3D transforms
- **Smooth Scrolling** - Custom smooth scroll implementation
- **Floating Elements** - CSS keyframe animations for background layers
- **Responsive Animations** - Reduced motion support for accessibility

### Build & Deployment
- **Static Export** - Optimized for static hosting
- **Environment Variables** - Configurable via environment
- **Redirect Handling** - Automatic redirects for invalid routes
- **Compression** - Gzip compression enabled
