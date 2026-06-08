# Component Specifications & Interface Documentation

## Component Template

```
Component Name: [Name]
Location: src/components/[section]/[Component].jsx
Styling: src/components/[section]/[Component].module.css

Responsibilities:
- [List main responsibilities]

Props Interface:
- prop1: type, description
- prop2: type, description (optional)

Internal State:
- state1: description

Context Usage:
- PortfolioContext: [which properties]

Hooks Used:
- useState, useEffect, useContext, custom hooks

Child Components:
- [List immediate children]

Parent Components:
- [List parents]

Event Handlers:
- [List events triggered]

Side Effects:
- [Describe lifecycle behaviors]

Animation Triggers:
- [Describe animation states]

Accessibility:
- [ARIA labels, keyboard navigation, etc.]
```

---

## LAYOUT COMPONENTS

### Navbar Component

```
Component Name: Navbar
Location: src/components/layout/Navbar.jsx
Styling: Uses global navbar styles + module CSS

Responsibilities:
- Render navigation menu with section links
- Detect active section based on scroll position
- Highlight current section in navigation
- Toggle mobile menu on small screens
- Smooth scroll to sections when links clicked
- Sticky positioning at top of viewport
- Responsive mobile hamburger menu

Props Interface:
- None (uses context)

Internal State:
- isMobileMenuOpen: boolean (mobile menu visibility)
- isScrolled: boolean (navbar styling based on scroll)

Context Usage:
- PortfolioContext: activeSection, viewport.isMobile, updateActiveSection()

Hooks Used:
- useState (menu state)
- useContext (portfolio context)
- useEffect (scroll listener)
- useScrollPosition() (custom hook)

Child Components:
- Logo (div with styling)
- NavMenu (ul with navigation links)
- MobileMenuToggle (hamburger button)
- MobileMenu (collapsible menu for mobile)

Parent Components:
- Layout

Event Handlers:
- onNavLinkClick(sectionId) → smooth scroll + update context
- onHamburgerClick() → toggle mobile menu

Side Effects:
- Listen to scroll position
- Update active section based on scroll
- Close mobile menu on link click
- Handle resize for responsive behavior

Animation Triggers:
- Navbar slides down on page load
- Background opacity changes on scroll
- Mobile menu slides in from top

Accessibility:
- Semantic nav element
- ARIA-expanded for mobile menu
- Keyboard navigation (Tab through links)
- Focus visible states on buttons
- Semantic link structure
```

### Layout Component

```
Component Name: Layout
Location: src/components/layout/Layout.jsx

Responsibilities:
- Wrap entire application
- Provide context providers
- Render Navbar, main content, Footer
- Handle viewport dimensions
- Manage scroll position globally

Props Interface:
- children: ReactNode (main page content)

Internal State:
- None (all state in context)

Context Usage:
- PortfolioContext Provider: wrap entire app
- ThemeContext Provider: wrap entire app

Child Components:
- Navbar
- ScrollToTop button
- Main (content slot)
- Footer

Side Effects:
- Initialize context on mount
- Update viewport dimensions on resize
- Handle scroll events globally

Accessibility:
- Proper semantic structure (nav > main > footer)
```

### Footer Component

```
Component Name: Footer
Location: src/components/sections/Footer/Footer.jsx

Responsibilities:
- Display footer information
- Show social media links
- Display quick links
- Show copyright information
- Contact information in footer

Props Interface:
- None

Internal State:
- None

Context Usage:
- PortfolioContext: for quick navigation

Child Components:
- SocialLinks (icons/links)
- FooterLinks (organized by category)
- CopyRight text

Animation Triggers:
- Fade in on viewport enter
- Staggered reveal of sections
```

---

## SECTION COMPONENTS

### Hero Component

```
Component Name: Hero
Location: src/components/sections/Hero/Hero.jsx

Responsibilities:
- Create compelling first impression
- Display name and professional title
- Show quick contact options
- Provide CTA buttons
- Render animated background elements

Props Interface:
- None

Internal State:
- isVisible: boolean (for animation trigger)

Context Usage:
- PortfolioContext: activeSection

Hooks Used:
- useEffect (animation on mount)
- useInViewport() (trigger animations)

Child Components:
- HeroContent (main content)
- AnimatedBackground (stars, grid pattern)
- HeroCTA (buttons)

Animation Triggers:
- On mount: title scales in
- On mount: subtitle fades in (delayed)
- On mount: buttons scale up (staggered)
- Infinite: background animation
- On hover: button effects

Accessibility:
- h1 for main heading
- Semantic button elements
- Good color contrast
- Focus visible states
```

### About Component

```
Component Name: About
Location: src/components/sections/About/About.jsx

Responsibilities:
- Introduce personal background
- Highlight key achievements
- Show education summary
- Display personality/work style
- Transition to next section

Props Interface:
- None

Child Components:
- AboutCard (multiple cards for different aspects)
- KeyAchievements (list)
- Timeline (brief timeline preview)

Animation Triggers:
- Cards fade in on viewport enter
- Staggered reveal

Accessibility:
- Semantic section element
- Proper heading hierarchy
```

### MissionControl Dashboard Component

```
Component Name: MissionControl
Location: src/components/sections/MissionControl/MissionControl.jsx

Responsibilities:
- Display key statistics about portfolio
- Show visual metrics/charts
- Create engaging dashboard aesthetic
- Display progress and achievements
- Visualize skills distribution

Props Interface:
- None

Internal State:
- animationState: 'idle' | 'entering' | 'active'
- chartData: processed data for visualization

Context Usage:
- Portfolio data from context

Hooks Used:
- useInViewport() (trigger number counters)
- useEffect (animate numbers)

Child Components:
- DashboardGrid (layout container)
- StatCard (multiple stat cards)
- MetricGraph (chart visualization)
- AnimatedCounter (number animation)

Data Requirements:
- dashboard.json (stats, metrics)

Animation Triggers:
- On viewport enter: cards slide in (staggered)
- On viewport enter: numbers count up (animated)
- On viewport enter: graphs draw themselves
- On hover: card elevation/scale effect

Accessibility:
- aria-labels for chart data
- Semantic HTML structure
- Color contrast meets WCAG
- Alt text for visualizations
```

### Skills Component

```
Component Name: Skills
Location: src/components/sections/Skills/Skills.jsx

Responsibilities:
- Display all skills organized by category
- Show proficiency levels
- Allow filtering/sorting (optional)
- Create visual representation of skill levels
- Show endorsements/validations

Props Interface:
- None

Internal State:
- selectedCategory: string | null (filter state)
- animatedSkills: Set<string> (track which skills animated)

Context Usage:
- Skills data from JSON
- PortfolioContext: viewport info

Hooks Used:
- useState (filter state)
- useInViewport() (animate on view)

Child Components:
- SkillCategory (multiple)
  - SkillBar (multiple per category)
  - SkillTag (alternative display)

Animation Triggers:
- Category headers fade in
- Skill bars fill from left on viewport enter
- Staggered reveal per category

Accessibility:
- Proper ARIA labels on progress bars
- Semantic HTML
- Keyboard navigable filter buttons
```

### Timeline (Experience) Component

```
Component Name: Timeline
Location: src/components/sections/Timeline/Timeline.jsx

Responsibilities:
- Display chronological work/education history
- Show timeline visualization
- Alternate left/right layout
- Highlight current/featured items
- Group by type (work, education, projects)

Props Interface:
- None

Internal State:
- expandedItem: string | null (which timeline item expanded)
- scrollProgress: number (for animation)

Context Usage:
- Experience data
- PortfolioContext: scroll position

Hooks Used:
- useState (expanded state)
- useEffect (scroll listener)
- useInViewport() (animate items)

Child Components:
- TimelineItem (multiple)
- TimelineConnector (visual line)
- TimelineMarker (dots)

Animation Triggers:
- Timeline line grows from top as scroll
- Items fade in when scrolled into view
- Connectors animate between items
- On hover: item highlights, detail expands

Accessibility:
- Semantic list structure
- ARIA labels for timeline
- Keyboard navigation
- Screen reader friendly dates
```

### Projects Component

```
Component Name: Projects
Location: src/components/sections/Projects/Projects.jsx

Responsibilities:
- Display all projects in grid layout
- Allow filtering by category/tags
- Show project cards with images/description
- Open project details in modal
- Support search functionality

Props Interface:
- None

Internal State:
- selectedCategory: string | null
- searchQuery: string
- selectedProject: string | null (for modal)
- filteredProjects: Project[] (computed)

Context Usage:
- Projects data
- PortfolioContext: projectFilter, updateProjectFilter()

Hooks Used:
- useState (filters, modal)
- useMemo (filter projects)
- useEffect (update context)

Child Components:
- ProjectFilter (category/search buttons)
- ProjectGrid (layout)
  - ProjectCard (multiple)
- ProjectModal (detail view)

Animation Triggers:
- Cards fade in on viewport enter
- Staggered grid reveal
- On hover: image overlay, scale effect
- Modal slides up on open
- Filter transition (opacity fade)

Accessibility:
- Semantic button elements
- ARIA labels on filter buttons
- Modal: focus trap, ESC to close
- Image alt text
- Keyboard navigable
```

### Contact Component

```
Component Name: Contact
Location: src/components/sections/Contact/Contact.jsx

Responsibilities:
- Display contact information
- Render contact form
- Handle form validation
- Submit form data
- Show success/error states
- Direct contact links

Props Interface:
- None

Internal State:
- formData: object (form field values)
- formErrors: object (validation errors)
- isSubmitting: boolean
- submitStatus: 'idle' | 'success' | 'error'

Hooks Used:
- useState (form state)
- useFormHandler() (custom hook)

Child Components:
- ContactForm
  - FormInput (multiple)
  - FormTextarea
  - SubmitButton
- ContactInfo (phone, email, social)
- SuccessMessage
- ErrorMessage

Event Handlers:
- onFormSubmit(data) → validate → submit → show status
- onFormChange(field, value) → update state
- onFormReset() → clear form

Animation Triggers:
- Form fades in on viewport enter
- Success message slides up
- Error messages appear with animation

Accessibility:
- Semantic form element
- Proper label associations
- Required field indicators
- Error messages linked to inputs
- Keyboard navigable
- Form validation feedback
```

---

## COMMON/REUSABLE COMPONENTS

### Button Component

```
Component Name: Button
Location: src/components/common/Button.jsx

Props Interface:
- variant: 'primary' | 'secondary' | 'ghost' | 'outlined'
- size: 'sm' | 'md' | 'lg'
- disabled: boolean
- loading: boolean
- onClick: function
- children: ReactNode
- className: string (optional)
- type: 'button' | 'submit' | 'reset'
- ariaLabel: string (optional)

Responsibilities:
- Consistent button styling
- Handle loading states
- Support multiple variants
- Accessibility features
```

### Card Component

```
Component Name: Card
Location: src/components/common/Card.jsx

Props Interface:
- children: ReactNode
- className: string
- onClick: function (optional)
- hoverable: boolean
- featured: boolean
- gradient: boolean

Responsibilities:
- Consistent card styling
- Elevation/shadow management
- Hover effects
```

### Badge Component

```
Component Name: Badge
Location: src/components/common/Badge.jsx

Props Interface:
- label: string
- variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- size: 'sm' | 'md' | 'lg'
- icon: string (optional)

Responsibilities:
- Display categorical tags
- Support different styles
```

### LoadingSpinner Component

```
Component Name: LoadingSpinner
Location: src/components/common/LoadingSpinner.jsx

Props Interface:
- size: 'sm' | 'md' | 'lg'
- fullScreen: boolean

Responsibilities:
- Animated loading indicator
- Various sizes
- Page/section overlay option
```

### ScrollToTop Component

```
Component Name: ScrollToTop
Location: src/components/common/ScrollToTop.jsx

Props Interface:
- visibility: number (show after scrolling X pixels)

Responsibilities:
- Float button to scroll to top
- Show/hide based on scroll position
- Smooth scroll animation
```

---

## CUSTOM HOOKS

### useScrollPosition()
```
Returns: { scrollY, isScrolling }
Triggers: scroll event listener
Cleanup: event listener removal
Purpose: Track scroll position globally
```

### useInViewport(ref, options?)
```
Returns: { isInViewport, progress }
Params:
  - ref: React ref to element
  - options: {
      threshold: number | number[] (default: 0.5)
      rootMargin: string (default: '0px')
    }
Purpose: Detect when element enters viewport
Usage: Trigger animations on scroll
```

### useFormHandler(initialValues, onSubmit)
```
Returns: { 
  values, 
  errors, 
  touched,
  isSubmitting,
  handleChange,
  handleSubmit,
  handleBlur,
  resetForm
}
Purpose: Handle form state and validation
```

### useAnimation(triggerCondition)
```
Returns: { isAnimating, triggerAnimation }
Purpose: Manage animation sequences
Usage: Coordinate multiple animations
```

---

## Context Hooks

### usePortfolio()
```
Returns: PortfolioContext value
Purpose: Access portfolio state globally
Usage: In any component needing portfolio data
```

### useTheme()
```
Returns: { theme, toggleTheme }
Purpose: Access theme state
Usage: For dark/light mode switching
```

---

## Service Modules

### emailService.js
```
Functions:
- sendContactEmail(formData): Promise
- validateEmail(email): boolean
- formatEmailTemplate(data): string

Purpose: Handle email submissions
```

### analyticsService.js
```
Functions:
- trackPageView(sectionId)
- trackClick(element)
- trackFormSubmit()

Purpose: Analytics tracking
```

### helpers.js
```
Functions:
- formatDate(date, format)
- debounce(fn, delay)
- throttle(fn, delay)
- truncateText(text, length)
- formatNumber(num)

Purpose: Utility functions
```

---

## Component Implementation Order (Suggested)

1. **Foundation** (without content)
   - Layout wrapper
   - Navbar
   - Context setup

2. **Basic Sections** (simpler, no interactivity)
   - Hero
   - About
   - Footer

3. **Data-Driven Sections**
   - Skills
   - Experience Timeline
   - Projects

4. **Interactive Components**
   - MissionControl Dashboard
   - Contact Form

5. **Enhancements**
   - Animations
   - Accessibility improvements
   - Performance optimization

---

## Naming Conventions

```
Files:
- Components: PascalCase (Hero.jsx)
- Styles: kebab-case (hero.module.css)
- Hooks: camelCase starting with "use" (useScrollPosition.js)
- Utils: camelCase (helpers.js)
- Data: lowercase with hyphens (resume.json)

CSS Classes (within modules):
- Block: component__element
- Element: component__element
- Modifier: component__element--modifier

Examples:
.skillBar__container
.skillBar__fill--active
.skillBar__label
```

---

## State Management Decision Matrix

| State Type | Location | Reason |
|-----------|----------|--------|
| Active Section | Context | Needed by multiple components (Navbar, sections) |
| Scroll Position | Context | Needed globally for animations |
| Mobile Menu | Context | Top-level state affecting layout |
| Form Inputs | Local (Component) | Only used in Contact section |
| Modal Open | Local (Component) | Only used in Projects section |
| Filter State | Local (Component) | Can be lifted if needed in future |
| Theme | CSS Variables | Performance, no context needed |

