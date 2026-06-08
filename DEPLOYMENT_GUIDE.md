# Performance, Deployment & Setup Guide

## PROJECT SETUP CHECKLIST

### Pre-Implementation
- [ ] Review ARCHITECTURE.md
- [ ] Review DATA_SCHEMA.md
- [ ] Review COMPONENT_SPECS.md
- [ ] Gather all resume/project information
- [ ] Prepare project images/assets

### Folder Structure Creation
- [ ] Create `/src/components/layout/`
- [ ] Create `/src/components/sections/` with subdirectories
- [ ] Create `/src/components/common/`
- [ ] Create `/src/hooks/`
- [ ] Create `/src/context/`
- [ ] Create `/src/services/`
- [ ] Create `/src/data/`
- [ ] Create `/src/styles/`
- [ ] Create `/src/utils/`
- [ ] Create `/src/pages/`
- [ ] Create `/public/images/` subdirectories

### Configuration Files
- [ ] Setup vite.config.js
- [ ] Configure package.json scripts
- [ ] Create .env.example
- [ ] Setup .gitignore

### Data Files Creation
- [ ] resume.json with personalInfo
- [ ] experience.json with timeline data
- [ ] skills.json with skill categories
- [ ] projects.json with project data
- [ ] dashboard.json with stats/metrics
- [ ] education section in resume.json

### Dependencies Installation
```bash
npm install

# Optional (install as needed):
npm install framer-motion
npm install react-intersection-observer
npm install axios
npm install react-hook-form zod
npm install react-hot-toast
```

---

## PERFORMANCE OPTIMIZATION STRATEGY

### Code Splitting
```
Strategy: By route/section
- Each major section can be lazy loaded
- Hero and navbar always loaded (above fold)
- Other sections loaded when entering viewport

Implementation:
- React.lazy() for section components
- Suspense boundaries
- Loading placeholders
```

### Image Optimization
```
Requirements:
- Optimize all images (WebP format when possible)
- Use multiple sizes for responsive images
- Lazy load images below fold
- Compress before uploading

Sizes:
- Hero image: 1200x600px (compressed)
- Project thumbnails: 400x300px
- Project full: 1200x800px
- Icons: 64x64px or SVG

Tools:
- TinyPNG for compression
- ImageMagick for bulk conversion
- Figma for WebP export
```

### Bundle Analysis
```
Tools:
- vite-plugin-visualizer
- Rollup analyzer

Target Metrics:
- Initial bundle: < 150KB (gzipped)
- Core JS: < 100KB
- CSS: < 50KB
```

### Performance Budgets

```
Metric | Target | Tool
-------|--------|------
FCP | < 1.5s | Lighthouse
LCP | < 2.5s | Lighthouse
CLS | < 0.1 | Lighthouse
TTI | < 3.5s | Lighthouse
Total JS | < 100KB | Bundlesize
Images | < 500KB | Manual check
```

### CSS Performance
```
Strategies:
- Use CSS modules (scoped, no specificity wars)
- Minimize global CSS
- Use CSS variables (computed once)
- Avoid complex selectors
- Use will-change sparingly
- Prefer transform & opacity for animations

Measurements:
- No unused CSS in production
- Minified and gzipped CSS
- Critical CSS inlined on first load
```

### JavaScript Performance
```
Strategies:
- Debounce scroll events (200ms)
- Throttle resize events (300ms)
- Use requestAnimationFrame for animations
- Memoize expensive computations
- Lazy load non-critical components
- Code split by route/section

Tools:
- React DevTools Profiler
- Chrome DevTools Performance tab
- Lighthouse DevTools
```

### Network Performance
```
Strategies:
- Service Worker for offline support (optional)
- Browser caching with proper headers
- CDN for static assets
- Gzip compression enabled
- HTTP/2 push for critical resources

Headers:
- Cache-Control: public, max-age=31536000 (assets)
- Cache-Control: public, max-age=3600 (HTML)
```

---

## ANIMATION PERFORMANCE

### GPU Acceleration
```
Use these properties for animations:
✓ transform
✓ opacity
✓ filter

Avoid these (cause layout recalculations):
✗ left, right, top, bottom
✗ width, height
✗ margin, padding
✗ box-shadow (use filter instead)
```

### Animation Checklist
```
For each animation:
- [ ] Use only GPU-accelerated properties
- [ ] Test on low-end devices
- [ ] Use DevTools Performance tab
- [ ] Measure FPS (target: 60fps)
- [ ] Reduce animation during scroll
- [ ] Use will-change on animated elements
- [ ] Prefer CSS over JavaScript animations
```

### Scroll Animation Strategy
```
Performance Tips:
- Debounce scroll listener (200ms)
- Use Intersection Observer instead of scroll events
- Batch DOM reads/writes
- Use transform instead of position changes
- Consider reducing motion preference (@media prefers-reduced-motion)
```

---

## ACCESSIBILITY CHECKLIST

### WCAG 2.1 Level AA Compliance

#### Perceivable
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] 3:1 for large text (18pt+)
- [ ] 3:1 for UI components
- [ ] Images have alt text
- [ ] Color not sole means of conveying information
- [ ] Resize text to 200% without loss of function
- [ ] Support high contrast mode

#### Operable
- [ ] All interactive elements keyboard accessible
- [ ] Logical tab order (top to bottom)
- [ ] No keyboard traps
- [ ] Focus visible indicators (outline)
- [ ] Links underlined or high contrast
- [ ] Touch targets ≥ 44x44px
- [ ] Animations can be paused/stopped
- [ ] ESC key closes modals

#### Understandable
- [ ] Clear page structure with headings
- [ ] Form labels associated with inputs
- [ ] Error messages clearly identified
- [ ] Error suggestions provided
- [ ] Consistent navigation
- [ ] Consistent component behavior
- [ ] Language clear and simple

#### Robust
- [ ] Valid HTML
- [ ] Semantic markup
- [ ] ARIA labels where needed
- [ ] Proper heading hierarchy
- [ ] Status changes announced
- [ ] Forms properly marked
- [ ] Links have descriptive text

### Accessibility Testing
```
Manual Testing:
- Keyboard navigation (Tab, Shift+Tab, Enter, ESC)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast check (WebAIM Contrast Checker)
- Mobile accessibility (touch targets, zoom)

Automated Tools:
- axe DevTools browser extension
- WAVE browser extension
- Lighthouse (DevTools)
- Pa11y command line tool

Commands:
npx pa11y http://localhost:5173
npx lighthouse http://localhost:5173 --view
```

---

## DEPLOYMENT OPTIONS

### Option 1: Vercel (Recommended)
```
Pros:
- Automatic deployments from Git
- Built-in performance optimizations
- Global CDN
- Free tier sufficient
- Edge functions (future)

Steps:
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push
4. Custom domain setup
5. Environment variables in dashboard

Cost: Free (or $20+/month for advanced)
```

### Option 2: Netlify
```
Pros:
- Git-based deployments
- Instant rollbacks
- Built-in CMS optional
- Free tier sufficient
- Form handling built-in

Steps:
1. Connect GitHub repository
2. Build command: npm run build
3. Deploy to production
4. Custom domain

Cost: Free (or paid for advanced features)
```

### Option 3: GitHub Pages
```
Pros:
- Free hosting
- Git-based deployment
- No backend needed
- Simple setup

Steps:
1. Update vite.config.js with base
2. Push to GitHub
3. Enable GitHub Pages in settings
4. Select main/dist branch

Limitations:
- Cannot use client-side routing easily
- Must use hash-based routing (#/)

Cost: Free
```

### Option 4: Self-Hosted (VPS)
```
Providers: AWS, DigitalOcean, Linode

Steps:
1. Setup Node.js environment
2. Install dependencies
3. Build production: npm run build
4. Serve dist folder with nginx/apache
5. Setup SSL with Let's Encrypt
6. Auto-deploy with GitHub Actions

Cost: $5-20+/month
```

---

## BUILD & DEPLOYMENT SCRIPTS

### package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "analyze": "vite-plugin-visualizer",
    "lighthouse": "lighthouse http://localhost:5173"
  }
}
```

### GitHub Actions CI/CD (Optional)

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## ENVIRONMENT VARIABLES

### .env.example
```
# Email Service
VITE_EMAIL_SERVICE_ID=your_email_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key

# API Endpoints
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key

# Analytics
VITE_ANALYTICS_ID=your_analytics_id

# Site Configuration
VITE_SITE_NAME=Stavina Nicole D'Souza
VITE_SITE_URL=https://stavina.dev
```

---

## DEVELOPMENT WORKFLOW

### Initial Setup
```bash
# 1. Clone repository
git clone <repo-url>
cd stavina-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:5173
```

### Feature Development
```bash
# 1. Create feature branch
git checkout -b feature/section-name

# 2. Make changes
# ... code ...

# 3. Test locally
npm run dev

# 4. Lint code
npm run lint:fix

# 5. Commit and push
git add .
git commit -m "feat: add section-name"
git push origin feature/section-name

# 6. Create Pull Request on GitHub
# 7. Merge after review
```

### Building for Production
```bash
# 1. Build distribution
npm run build

# 2. Preview build
npm run preview

# 3. Test performance
npm run lighthouse

# 4. Deploy
# Automatic via Vercel/Netlify
# or manual push to hosting
```

---

## MAINTENANCE & UPDATES

### Regular Tasks
```
Weekly:
- Check for broken links
- Monitor form submissions
- Review analytics

Monthly:
- Update dependencies: npm update
- Check for security vulnerabilities: npm audit
- Review performance metrics
- Update resume/content as needed

Quarterly:
- Full security audit: npm audit fix
- Performance optimization pass
- SEO review
- User feedback review
```

### Dependency Management
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Major version updates (be careful)
npm install package@latest

# Security fixes only
npm audit fix

# Automated checks (optional)
npm install -g npm-check-updates
ncu -i
```

---

## MONITORING & ANALYTICS

### Recommended Tools

1. **Google Analytics 4**
   - Page views by section
   - User behavior flows
   - Project card clicks
   - Form submissions

2. **Vercel Analytics** (if hosted there)
   - Web Vitals
   - Performance metrics
   - Deployment status

3. **Sentry** (error tracking)
   - JavaScript errors
   - Form submission failures
   - API errors

4. **Lighthouse CI** (performance)
   - Automated performance testing
   - Performance regression detection
   - Accessibility checks

---

## SECURITY BEST PRACTICES

```
✓ Always use HTTPS
✓ Sanitize user inputs (contact form)
✓ Validate form data on server (if using backend)
✓ Use Content Security Policy headers
✓ Keep dependencies updated
✓ No sensitive data in frontend code
✓ Rate limit form submissions
✓ Use CORS properly
✓ Protect API keys (.env file)
✓ Regular security audits

Headers to Set:
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=()
```

---

## TROUBLESHOOTING

### Common Issues

#### Build Errors
```
Problem: CSS import errors
Solution: Verify .module.css naming convention

Problem: Module not found
Solution: Check relative paths, use absolute imports

Problem: Context not defined
Solution: Ensure context provider wraps component
```

#### Performance Issues
```
Problem: Slow scrolling/animations
Solution:
- Use DevTools Performance profiler
- Check for scroll listeners
- Reduce animation complexity
- Enable GPU acceleration

Problem: Large bundle size
Solution:
- Run bundle analyzer
- Remove unused dependencies
- Code split components
- Tree shake unused code
```

#### Deployment Issues
```
Problem: Page not loading after deploy
Solution: Check base URL in vite.config.js

Problem: Images not loading
Solution: Verify public folder, check paths

Problem: Contact form not working
Solution: Verify API endpoint, environment variables
```

---

## DOCUMENTATION STANDARDS

### Code Comments
```javascript
// Use for complex logic
// Explain WHY, not WHAT (code shows what)

// ❌ Bad
// Increment counter
count++

// ✓ Good
// Increment counter to trigger re-render
// when animation completes
count++
```

### Git Commits
```
Format: type(scope): subject

Types: feat, fix, docs, style, refactor, perf, test

Examples:
- feat(hero): add animated background
- fix(contact): validate email format
- docs(architecture): update component specs
- perf(skills): optimize animation timing
```

### File Documentation
```
Every component file should start with:

/**
 * Component: [Name]
 * Purpose: [Main responsibility]
 * Props: [prop list]
 * Context: [what context it uses]
 */
```

---

## NEXT STEPS AFTER ARCHITECTURE REVIEW

1. **Approval** - Confirm architecture aligns with vision
2. **Asset Preparation** - Gather images, write content
3. **Setup** - Create folder structure, install dependencies
4. **Component Development** - Build components in recommended order
5. **Data Integration** - Connect JSON data to components
6. **Styling** - Implement CSS and animations
7. **Testing** - Test functionality and accessibility
8. **Optimization** - Performance and SEO improvements
9. **Deployment** - Deploy to production
10. **Monitoring** - Setup analytics and monitoring

