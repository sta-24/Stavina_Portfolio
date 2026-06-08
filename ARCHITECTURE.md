# Professional React Portfolio - Architecture Plan

## 1. COMPLETE FOLDER STRUCTURE

```
stavina-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── Hero.module.css
│   │   │   │   └── HeroContent.jsx
│   │   │   │
│   │   │   ├── About/
│   │   │   │   ├── About.jsx
│   │   │   │   ├── About.module.css
│   │   │   │   └── AboutCard.jsx
│   │   │   │
│   │   │   ├── MissionControl/
│   │   │   │   ├── MissionControl.jsx
│   │   │   │   ├── MissionControl.module.css
│   │   │   │   ├── DashboardGrid.jsx
│   │   │   │   ├── StatCard.jsx
│   │   │   │   └── MetricGraph.jsx
│   │   │   │
│   │   │   ├── Skills/
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Skills.module.css
│   │   │   │   ├── SkillCategory.jsx
│   │   │   │   └── SkillBar.jsx
│   │   │   │
│   │   │   ├── Timeline/
│   │   │   │   ├── Timeline.jsx
│   │   │   │   ├── Timeline.module.css
│   │   │   │   ├── TimelineItem.jsx
│   │   │   │   └── TimelineConnector.jsx
│   │   │   │
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Projects.module.css
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── ProjectFilter.jsx
│   │   │   │   └── ProjectModal.jsx
│   │   │   │
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Contact.module.css
│   │   │   │   └── ContactForm.jsx
│   │   │   │
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.module.css
│   │   │
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       ├── Card.jsx
│   │       ├── LoadingSpinner.jsx
│   │       └── ScrollToTop.jsx
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useInViewport.js
│   │   ├── useFormHandler.js
│   │   └── useAnimation.js
│   │
│   ├── context/
│   │   ├── PortfolioContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── emailService.js
│   │   └── analyticsService.js
│   │
│   ├── data/
│   │   ├── resume.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   └── dashboard.json
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   └── testimonials/
│   ├── icons/
│   └── documents/
│       └── resume.pdf
│
├── .env.example
├── .gitignore
├── vite.config.js
├── package.json
├── README.md
└── ARCHITECTURE.md
```

---

## 2. COMPONENT HIERARCHY

```
App
│
├── Layout (Wrapper)
│   ├── Navbar
│   │   ├── Logo
│   │   ├── NavMenu
│   │   ├── ThemeToggle
│   │   └── MobileMenu
│   │
│   ├── Main Content
│   │   ├── Hero
│   │   │   └── HeroContent
│   │   │
│   │   ├── About
│   │   │   ├── AboutCard (multiple)
│   │   │   └── Timeline (Brief)
│   │   │
│   │   ├── MissionControl Dashboard
│   │   │   ├── DashboardGrid
│   │   │   ├── StatCard (multiple)
│   │   │   ├── MetricGraph
│   │   │   └── DataVisualization
│   │   │
│   │   ├── Skills
│   │   │   ├── SkillCategory (multiple)
│   │   │   ├── SkillBar (multiple)
│   │   │   └── SkillFilter
│   │   │
│   │   ├── Timeline (Experience)
│   │   │   ├── TimelineItem (multiple)
│   │   │   └── TimelineConnector
│   │   │
│   │   ├── Projects
│   │   │   ├── ProjectFilter
│   │   │   ├── ProjectCard (multiple)
│   │   │   └── ProjectModal
│   │   │
│   │   └── Contact
│   │       └── ContactForm
│   │
│   └── Footer
│       ├── FooterLinks
│       ├── SocialLinks
│       └── Copyright
```

---

## 3. ROUTING PLAN

### Single Page Application (SPA) with Sections

**Routing Strategy:** Hash-based smooth scrolling (no page navigation)

```
/ (HomePage)
  ├── #home (Hero)
  ├── #about (About)
  ├── #mission-control (Dashboard)
  ├── #skills (Skills)
  ├── #experience (Timeline)
  ├── #projects (Projects)
  ├── #contact (Contact)
  └── #footer (Footer)

Features:
- URL updates via hash as user scrolls
- Back/forward button support
- Direct link access to sections
- Smooth scrolling between sections
- Active nav highlighting based on viewport position
```

**Navigation Triggers:**
- Navbar links (smooth scroll + hash update)
- Scroll detection (auto hash update)
- Browser history (back/forward)
- Direct URL entry (hash)

---

## 4. STYLING STRATEGY

### CSS Architecture: Module-Based with Global Variables

```
Strategy:
├── CSS Modules (Component-scoped)
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── MissionControl.module.css
│   ├── Skills.module.css
│   ├── Timeline.module.css
│   ├── Projects.module.css
│   ├── Contact.module.css
│   └── Footer.module.css
│
├── Global Styles
│   ├── variables.css (CSS custom properties)
│   ├── global.css (reset, base styles)
│   ├── animations.css (keyframes, transitions)
│   └── responsive.css (breakpoints)
│
└── Naming Convention: BEM within modules
    [component]__element--modifier
    Example: .skillBar__container--active
```

### Color System

```
Primary Colors:
--color-primary: #00d9ff (Cyan)
--color-primary-dark: #00a8cc
--color-accent: #9d4edd (Purple)
--color-accent-secondary: #ff006e (Pink)

Background:
--bg-primary: #0a0e27
--bg-secondary: #1a1f3a
--bg-tertiary: #252d45

Text:
--text-primary: #e0e0e0
--text-secondary: #a0a0a0
--text-muted: #6b7280

Shadows:
--shadow-sm: 0 2px 4px rgba(0, 217, 255, 0.1)
--shadow-md: 0 8px 16px rgba(0, 217, 255, 0.15)
--shadow-lg: 0 16px 32px rgba(0, 217, 255, 0.2)
```

### Responsive Design

```
Breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

Strategy: Mobile-first
- Base styles for mobile
- @media queries for larger screens
- CSS Grid for complex layouts
- Flexbox for alignment
```

---

## 5. REQUIRED DEPENDENCIES

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "vite": "^8.0.0",
    "@vitejs/plugin-react": "^6.0.0",
    "eslint": "^10.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^7.0.0",
    "eslint-plugin-react-refresh": "^0.5.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

### Optional Enhancements (not required initially)

```
- framer-motion (animations)
- react-intersection-observer (viewport detection)
- axios (API calls)
- react-hook-form (form handling)
- zod (form validation)
- react-hot-toast (notifications)
```

**Rationale:** 
- Keep initial bundle lean
- Use native React for state management
- CSS for animations (performant)
- Vanilla JS hooks for scroll/viewport detection

---

## 6. STATE MANAGEMENT APPROACH

### Architecture: Context API + Custom Hooks

```
Global State:
├── PortfolioContext
│   ├── activeSection (current viewport section)
│   ├── scrollPosition (current scroll Y)
│   ├── isMobileMenuOpen (boolean)
│   └── filteredProjects (projects filter state)
│
├── ThemeContext
│   ├── theme (light/dark)
│   └── toggleTheme()
│
└── Local Component State (useState)
    ├── Form inputs
    ├── Modal states
    ├── Dropdown states
    └── Animation triggers

Hooks:
├── useScrollPosition() → tracks scroll Y
├── useInViewport(ref) → checks if element in view
├── useFormHandler() → form submission logic
└── useAnimation() → triggers animations on viewport enter
```

### Data Flow

```
App (Provider)
  ↓
PortfolioContext
  ↓
Child Components
  ├── Read: useContext(PortfolioContext)
  ├── Write: updateActiveSection(id)
  └── Subscribe: useEffect with context deps
```

### No Global State Needed For:
- Theme (using CSS variables is more efficient)
- Individual component UI states
- Form intermediate states (local only)

---

## 7. ANIMATION STRATEGY

### Animation Layers

```
1. Scroll-Triggered Animations
   ├── Fade-in on viewport enter
   ├── Slide animations
   ├── Scale transforms
   ├── Stagger children animations
   └── Implementation: CSS + Intersection Observer

2. Hover Interactions
   ├── Button effects
   ├── Card elevations
   ├── Icon animations
   └── Implementation: CSS :hover + transitions

3. Page Load Animations
   ├── Hero entrance (staggered)
   ├── Navbar slide-down
   ├── Logo animation
   └── Implementation: CSS keyframes + delay

4. Micro-interactions
   ├── Link underlines
   ├── Form validations
   ├── Success states
   └── Implementation: CSS + React state

5. Dashboard Animations
   ├── Number counter animations
   ├── Graph transitions
   ├── Stat card reveals
   └── Implementation: JS animation loop
```

### Implementation Approach

```
CSS Animations (Primary):
├── Keyframe animations in animations.css
├── Transition properties in component modules
└── CSS classes applied on mount/scroll

JavaScript Animations:
├── useAnimation() hook for complex sequences
├── requestAnimationFrame for smooth 60fps
├── Intersection Observer for scroll triggers
└── React state for trigger events

Performance Optimization:
├── Use transform & opacity (GPU accelerated)
├── Avoid layout shifts
├── Debounce scroll events
├── Use will-change sparingly
└── Measure animations with DevTools
```

### Key Animation Sequences

```
Hero Section:
1. Background stars twinkle (infinite)
2. Grid slides (infinite, slow)
3. Title fades in + scales (on mount)
4. Subtitle fades in with delay (on mount)
5. CTA buttons scale up (on mount, staggered)

Mission Control Dashboard:
1. Title animates in (on viewport enter)
2. Cards slide in from sides (staggered)
3. Numbers count up (on visibility)
4. Graphs draw themselves (animated)
5. Hover: card lifts with shadow

Projects:
1. Grid items fade in (staggered)
2. On hover: scale + overlay appears
3. Modal slides up on open
4. Project images slide in

Timeline:
1. Timeline line grows from top
2. Items fade in (staggered)
3. Connectors animate
4. Content slides in on scroll
```

---

## SUMMARY

| Aspect | Approach |
|--------|----------|
| **Architecture** | React Functional Components + Context API |
| **Routing** | Hash-based SPA with smooth scrolling |
| **Styling** | CSS Modules + Global Variables |
| **State** | Context API + Custom Hooks + Local State |
| **Data** | JSON files in `/src/data/` |
| **Animations** | CSS + Intersection Observer + JS loops |
| **Performance** | Code splitting by section, lazy loading images |
| **Testing** | Component-level (setup for future) |
| **Deployment** | Static build via Vite |

---

## Next Steps

Once approved:
1. Create folder structure
2. Set up package.json and vite.config.js
3. Create data files (resume.json, projects.json, etc.)
4. Build reusable components
5. Implement sections sequentially
6. Add animations and micro-interactions
7. Optimize performance
