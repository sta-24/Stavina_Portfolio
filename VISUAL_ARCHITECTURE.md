# Architecture Diagrams & Visual References

## Component Hierarchy Tree

```
App (Root)
│
└─ Layout
   ├─ Navbar (Fixed/Sticky)
   │  ├─ Logo
   │  ├─ NavMenu
   │  │  ├─ NavLink (multiple)
   │  │  │  └─ onClick → scroll + updateActiveSection()
   │  │  └─ Contact CTA
   │  ├─ ThemeToggle (optional)
   │  └─ MobileMenuButton
   │     └─ MobileMenu (conditional)
   │        └─ MobileNavLink (multiple)
   │
   ├─ Main
   │  ├─ Hero (Section)
   │  │  ├─ AnimatedBackground
   │  │  │  ├─ Stars (CSS animation)
   │  │  │  └─ GridPattern (CSS animation)
   │  │  ├─ HeroContent
   │  │  │  ├─ Title (h1)
   │  │  │  ├─ Subtitle
   │  │  │  ├─ ContactLinks
   │  │  │  │  ├─ PhoneLink
   │  │  │  │  ├─ EmailLink
   │  │  │  │  └─ LinkedInLink
   │  │  │  └─ CTAButtons
   │  │  │     ├─ PrimaryButton → scroll('projects')
   │  │  │     └─ SecondaryButton → scroll('contact')
   │  │
   │  ├─ About (Section)
   │  │  ├─ SectionTitle
   │  │  └─ AboutContent
   │  │     └─ AboutCard (multiple)
   │  │        ├─ Icon
   │  │        ├─ Title
   │  │        └─ Description
   │  │
   │  ├─ MissionControl (Section)
   │  │  ├─ SectionTitle
   │  │  ├─ DashboardGrid
   │  │  │  ├─ StatCard (multiple)
   │  │  │  │  ├─ Icon
   │  │  │  │  ├─ Label
   │  │  │  │  ├─ AnimatedNumber
   │  │  │  │  └─ Trend
   │  │  │  ├─ MetricGraph
   │  │  │  │  ├─ ChartTitle
   │  │  │  │  └─ SVGChart
   │  │  │  └─ AnimatedCounter (component)
   │  │
   │  ├─ Skills (Section)
   │  │  ├─ SectionTitle
   │  │  ├─ SkillCategoryFilter (optional)
   │  │  └─ SkillsGrid
   │  │     └─ SkillCategory (multiple)
   │  │        ├─ CategoryTitle
   │  │        └─ SkillBar (multiple)
   │  │           ├─ SkillName
   │  │           ├─ ProgressBar (animated fill)
   │  │           └─ ProficiencyPercent
   │  │
   │  ├─ Timeline (Section)
   │  │  ├─ SectionTitle
   │  │  ├─ TimelineContainer
   │  │  │  ├─ TimelineConnector (vertical line, grows on scroll)
   │  │  │  └─ TimelineItems (multiple)
   │  │  │     └─ TimelineItem
   │  │  │        ├─ Marker (dot)
   │  │  │        ├─ ItemContent
   │  │  │        │  ├─ Title
   │  │  │        │  ├─ Organization
   │  │  │        │  ├─ DateRange
   │  │  │        │  ├─ Description
   │  │  │        │  └─ BulletPoints
   │  │  │        └─ Connector (to next item)
   │  │
   │  ├─ Projects (Section)
   │  │  ├─ SectionTitle
   │  │  ├─ ProjectFilter
   │  │  │  ├─ CategoryButton (multiple)
   │  │  │  └─ SearchBox
   │  │  ├─ ProjectGrid
   │  │  │  └─ ProjectCard (multiple, filtered)
   │  │  │     ├─ ProjectImage
   │  │  │     ├─ ProjectOverlay
   │  │  │     │  ├─ Category Badge
   │  │  │     │  └─ ViewButton → setSelectedProject()
   │  │  │     ├─ ProjectTitle
   │  │  │     ├─ ProjectDescription
   │  │  │     ├─ TechStack
   │  │  │     │  └─ TechBadge (multiple)
   │  │  │     └─ ProjectLinks
   │  │  │        ├─ GitHubLink
   │  │  │        ├─ LiveLink
   │  │  │        └─ DemoLink
   │  │  │
   │  │  └─ ProjectModal (conditional)
   │  │     ├─ ModalHeader
   │  │     │  ├─ ProjectTitle
   │  │     │  └─ CloseButton
   │  │     ├─ ModalContent
   │  │     │  ├─ ProjectImageCarousel
   │  │     │  ├─ FullDescription
   │  │     │  ├─ KeyHighlights
   │  │     │  ├─ Team & Timeline
   │  │     │  ├─ Technologies
   │  │     │  └─ Links
   │  │     └─ ModalFooter
   │  │
   │  ├─ Contact (Section)
   │  │  ├─ SectionTitle
   │  │  ├─ ContactContent
   │  │  │  ├─ ContactInfo
   │  │  │  │  ├─ Email
   │  │  │  │  ├─ Phone
   │  │  │  │  └─ Location
   │  │  │  └─ ContactForm
   │  │  │     ├─ FormGroup (multiple)
   │  │  │     │  ├─ Label
   │  │  │     │  └─ Input/Textarea
   │  │  │     ├─ ValidationError (conditional)
   │  │  │     ├─ SubmitButton
   │  │  │     ├─ SuccessMessage (conditional)
   │  │  │     └─ ErrorMessage (conditional)
   │  │
   │  └─ ScrollToTop (Floating Button)
   │     └─ onClick → scrollTop()
   │
   └─ Footer (Fixed/Sticky)
      ├─ FooterContent
      │  ├─ FooterLinks
      │  │  ├─ FooterSection (multiple)
      │  │  │  └─ FooterLink (multiple)
      │  │  ├─ Company
      │  │  ├─ Resources
      │  │  └─ Connect
      │  ├─ SocialLinks
      │  │  ├─ LinkedInLink
      │  │  ├─ GitHubLink
      │  │  └─ TwitterLink
      │  └─ Copyright
      └─ BackToTop (optional, same as scroll-to-top)
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        JSON DATA FILES                           │
└──────────┬──────────┬──────────┬──────────┬──────────┬───────────┘
           │          │          │          │          │
    ┌──────▼┐  ┌─────▼┐  ┌─────▼┐  ┌─────▼┐  ┌──────▼┐
    │Resume │  │Skills│  │Project│  │Exper.│  │Dashb. │
    └──────┬┘  └─────┬┘  └─────┬┘  └─────┬┘  └──────┬┘
           │          │          │          │          │
           └──────────┼──────────┼──────────┼──────────┘
                      │
        ┌─────────────▼──────────────────┐
        │   JSON Import/Processing      │
        │   (data/*.json)                │
        └─────────────┬──────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
    ▼                 ▼                 ▼
┌───────────┐  ┌──────────────┐  ┌──────────────┐
│ Portfolio │  │  Theme       │  │ Local State  │
│ Context   │  │  Context     │  │ (Components) │
└─────┬─────┘  └──────┬───────┘  └──────┬───────┘
      │               │                 │
      └───────┬───────┴────────┬────────┘
              │                │
              ▼                ▼
        ┌──────────────────────────┐
        │   React Components       │
        │                          │
        │  (Sections, Cards, etc)  │
        └──────────────────────────┘
              │
              ▼
        ┌──────────────────────────┐
        │   Browser Rendering      │
        │   (DOM + Animations)     │
        └──────────────────────────┘
```

---

## State Management Flow

```
┌────────────────────────────────────────────────────────┐
│          PORTFOLIO CONTEXT (Global State)              │
└───┬──────────────────────────────────────────────────┬─┘
    │                                                  │
    ├─ activeSection: string                         │
    │  └─ Updated by: Navbar clicks, scroll events  │
    │  └─ Read by: Navbar (highlighting), all sections│
    │                                                 │
    ├─ scrollPosition: number                        │
    │  └─ Updated by: Window scroll event            │
    │  └─ Read by: Animation triggers                │
    │                                                 │
    ├─ viewport: { width, height, isMobile }        │
    │  └─ Updated by: Window resize event            │
    │  └─ Read by: Responsive behavior               │
    │                                                 │
    ├─ isMobileMenuOpen: boolean                     │
    │  └─ Updated by: Hamburger button               │
    │  └─ Read by: Navbar (show/hide menu)           │
    │                                                 │
    ├─ projectFilter: { category, search }           │
    │  └─ Updated by: Filter buttons                 │
    │  └─ Read by: Projects section                  │
    │                                                 │
    └─ contactForm: { isSubmitting, error }          │
       └─ Updated by: Form submission                │
       └─ Read by: Contact form UI                   │
```

---

## Event Flow for Navigation

```
User Action: Click Navbar Link
    │
    ▼
Navigation Link onClick Handler
    │
    ▼
scrollToElement(sectionId)
    │
    ├─ updateActiveSection(sectionId)  ← Update context
    │  │
    │  └─ Navbar re-renders with highlight
    │
    └─ Smooth scroll to section
       └─ element.scrollIntoView({ behavior: 'smooth' })


Automatic: Page Scroll
    │
    ▼
useScrollPosition() Hook Detects Scroll Event
    │
    ▼
detectCurrentSection()
    │
    └─ Uses Intersection Observer to find section in viewport
       │
       └─ updateActiveSection(detected)  ← Update context
          │
          └─ Navbar highlights current section
```

---

## Animation Triggering Flow

```
┌─────────────────────────────────────┐
│     Component Mounts                │
└────────────────┬────────────────────┘
                 │
        ┌────────▼────────┐
        │ useInViewport() │
        │ Hook            │
        └────────┬────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
Element Not Visible      Element In Viewport
    │                     │
    ▼                     ▼
Hold State          Trigger Animation
    │               │
    ├─ No animations│
    │               ├─ Add CSS class
    │               ├─ Start counters
    ├─ Ready        ├─ Begin transitions
    │               └─ Stagger children
    │
    └─ When scrolled into view, ▼ triggers animation
```

---

## CSS Animation Layers

```
Layer 1: Infinite Background Animations
├─ Stars twinkling (opacity)
└─ Grid sliding (background-position)

Layer 2: Page Load Animations
├─ Title fade-in + scale
├─ Subtitle fade-in (delayed)
└─ Buttons scale-up (staggered)

Layer 3: Scroll-Triggered Animations
├─ Fade in on viewport enter
├─ Slide animations
├─ Scale transforms
└─ Number counter animations

Layer 4: Hover Interactions
├─ Button scale + shadow
├─ Card elevation
├─ Image overlay
└─ Link underline

Layer 5: State-Based Animations
├─ Modal open/close
├─ Menu slide-in
├─ Form validation states
└─ Success/error messages

Layer 6: Complex Sequences
├─ Timeline line growth
├─ Chart drawing
└─ Stat card reveals

Layer 7: Micro-interactions
├─ Focus states
├─ Active states
└─ Loading spinners
```

---

## Responsive Design Breakpoints

```
MOBILE (320px - 767px)
├─ Single column layouts
├─ Full-width sections
├─ Hamburger menu (Navbar)
├─ Stacked cards
├─ Larger touch targets
└─ Simplified animations

TABLET (768px - 1023px)
├─ Two column layouts
├─ Wider sections (with padding)
├─ Horizontal navbar (or collapsed)
├─ 2x2 grid for cards
├─ Readable font sizes
└─ Moderate animations

DESKTOP (1024px - 1439px)
├─ 3 column layouts
├─ Max-width container (1200px)
├─ Full horizontal navbar
├─ 3 column grids
├─ Optimal spacing
├─ Full animations
└─ Hover effects

LARGE DESKTOP (1440px+)
├─ Max-width maintained (1200px)
├─ Centered content
├─ Generous spacing
├─ All features enabled
└─ Advanced animations
```

---

## Performance Flow Optimization

```
User Opens Site
    │
    ▼
Index.html loads
    │
    ├─ Critical CSS inlined (if using Vite optimization)
    │
    └─ React bundle downloads
       │
       └─ 100KB max (gzipped)


App Renders
    │
    ├─ Layout component mounts
    ├─ Navbar renders
    ├─ Hero renders (with background animations)
    └─ useScrollPosition hook attaches listener


Below Fold Content
    │
    ├─ Lazy loaded on demand
    ├─ useInViewport triggers load
    ├─ CSS animations deferred until visible
    └─ Images lazy loaded


Images Loading
    │
    ├─ Hero image: critical (preload)
    ├─ Section images: lazy (load on demand)
    └─ Thumbnails: responsive sizes


Final Result
    └─ FCP: < 1.5s
    └─ LCP: < 2.5s
    └─ CLS: < 0.1
    └─ TTI: < 3.5s
```

---

## Component Lifecycle Example: ProjectCard

```
┌─────────────────────────────────┐
│  ProjectCard (Mounts)           │
└────────┬────────────────────────┘
         │
         ├─ Receives props: { id, title, image, tags }
         │
         ▼
    ┌─────────────────────────────┐
    │ useInViewport() Hook        │
    │ Starts watching for scroll  │
    └────────┬────────────────────┘
             │
        ┌────┴─────────────────────────┐
        │                              │
        ▼ (Not yet visible)            ▼ (Now visible)
    No animation              CSS fade-in + scale
        │                     │
        │                     ├─ Add class: animate__fadeIn
        │                     ├─ Add class: animate__scaleIn
        │                     ├─ Delay: stagger index * 100ms
        │                     └─ Set isAnimating = true
        │                     
        └──────────────────┬──────────────────┘
                           │
                   On Hover Over Card
                           │
                           ├─ :hover styles applied
                           ├─ Scale up slightly (transform)
                           ├─ Shadow elevation (box-shadow)
                           └─ Image overlay appears
                           
                   On Click "View"
                           │
                           └─ setSelectedProject(id)
                              │
                              └─ Modal opens with animation
```

---

## Form Submission Flow

```
User Fills Form & Clicks Submit
    │
    ▼
submitForm(e) Handler
    │
    ├─ Prevent default
    ├─ Validate fields locally
    │
    └─ If validation fails:
       └─ Display error messages
       └─ Highlight invalid fields
       └─ Return (don't submit)
    
    │
    └─ If validation passes:
       │
       ├─ Set isSubmitting = true (show spinner)
       │
       └─ Call sendContactEmail(formData)
          │
          └─ API call (EmailJS, FormSubmit, etc.)
             │
             ├─ Success ────────┐
             │                  ├─ Set submitStatus = 'success'
             └─ Error ──────┐   ├─ Display success message
                            │   └─ Clear form after 3s
                            │
                            └─ Set submitStatus = 'error'
                               ├─ Display error message
                               └─ Show retry button
```

---

## Browser Compatibility & Polyfills

```
Target Support:
├─ Chrome 90+          (100%)
├─ Firefox 88+         (100%)
├─ Safari 14+          (100%)
├─ Edge 90+            (100%)
└─ Mobile browsers     (90%+)

No polyfills needed for:
✓ CSS Grid
✓ CSS Flexbox
✓ CSS Custom Properties
✓ Fetch API
✓ Intersection Observer
✓ RequestAnimationFrame

Progressive Enhancement:
├─ JavaScript disabled → Static HTML visible
├─ CSS disabled → Text readable (no styling)
└─ Images disabled → Alt text visible
```

---

## Cache Strategy

```
Browser Cache:
├─ Static assets (images, fonts): 1 year
├─ CSS/JS bundles: 1 month
└─ HTML file: 1 hour

CDN Cache (if using Vercel):
├─ All assets cached globally
├─ Instant delivery worldwide
├─ Automatic invalidation on deploy
└─ ~50ms latency worldwide

Build Time Cache:
├─ node_modules cached between builds
├─ Dependencies only reinstalled if package.json changes
└─ ~80% faster rebuilds
```

---

## SEO Structure

```
HTML Meta Tags
├─ <title> (60 chars)
├─ <meta description> (160 chars)
├─ <meta og:*> (social sharing)
└─ <meta twitter:*> (Twitter cards)

Semantic HTML
├─ <nav> for navigation
├─ <main> for main content
├─ <section> for each major section
├─ <h1> for page title
├─ <h2> for section titles
├─ <article> for projects
└─ <footer> for footer content

Structured Data (Optional)
├─ Schema.org Person markup
├─ Project schema for projects
├─ BreadcrumbList for navigation
└─ LocalBusiness for contact

Robots & Sitemap
├─ robots.txt
├─ sitemap.xml
└─ Allow all for crawlers
```

This visual documentation complements the detailed text documents with architectural diagrams and flowcharts.
