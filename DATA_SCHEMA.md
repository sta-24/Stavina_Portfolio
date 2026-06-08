# Data Structure & Schema Documentation

## Resume Data Structure (`data/resume.json`)

```json
{
  "personalInfo": {
    "name": "Stavina Nicole D'Souza",
    "title": "Computer & Communication Engineer",
    "subtitle": "IoT & Networking Enthusiast",
    "phone": "9606835113",
    "email": "stavinadsouza@gmail.com",
    "location": "Karnataka, India",
    "links": {
      "linkedin": "https://www.linkedin.com/in/stavinadsouza/",
      "github": "",
      "twitter": ""
    },
    "summary": "Computer and Communication Engineering student..."
  },
  
  "sections": {
    "enabled": ["hero", "about", "mission-control", "skills", "experience", "projects", "contact"],
    "order": ["hero", "about", "mission-control", "skills", "experience", "projects", "contact"]
  }
}
```

## Experience Timeline (`data/experience.json`)

```json
{
  "experiences": [
    {
      "id": "exp-001",
      "title": "Executive Member",
      "organization": "Aeroclub Nitte, NMAM Institute of Technology",
      "location": "Karnataka, India",
      "startDate": "2024-08",
      "endDate": null,
      "current": true,
      "type": "experience",
      "description": "Learning Aircraft and UAV design basics",
      "responsibilities": [
        "Learning Aircraft and UAV design basics",
        "Participating in hands-on workshops",
        "Working with peers on electronics and drone components"
      ],
      "skills": ["UAV Design", "Electronics", "Teamwork"],
      "featured": true
    }
  ]
}
```

## Skills Data (`data/skills.json`)

```json
{
  "skillCategories": [
    {
      "id": "cat-001",
      "name": "Languages",
      "description": "Programming Languages",
      "skills": [
        {
          "id": "skill-001",
          "name": "Python",
          "proficiency": 85,
          "years": 2,
          "endorsements": 12
        },
        {
          "id": "skill-002",
          "name": "C/C++",
          "proficiency": 80,
          "years": 2.5
        }
      ]
    },
    {
      "id": "cat-002",
      "name": "Developer Tools",
      "skills": [...]
    },
    {
      "id": "cat-003",
      "name": "Areas of Interest",
      "skills": [...]
    }
  ]
}
```

## Projects Data (`data/projects.json`)

```json
{
  "projects": [
    {
      "id": "proj-001",
      "title": "Smart Parcel Lock System",
      "description": "Built an IoT-enabled parcel locker...",
      "fullDescription": "Comprehensive description...",
      "category": "iot",
      "tags": ["IoT", "ESP32", "C++", "Security"],
      "technologies": [
        { "name": "ESP32", "icon": "chip" },
        { "name": "Arduino IDE", "icon": "code" },
        { "name": "C++", "icon": "code" }
      ],
      "startDate": "2024-08",
      "endDate": "2024-12",
      "status": "completed",
      "featured": true,
      "role": "Developer",
      "highlights": [
        "OTP-based authentication",
        "Secure timeout handling",
        "Owner-triggered unlock"
      ],
      "links": {
        "github": "",
        "live": "",
        "demo": ""
      },
      "images": {
        "thumbnail": "/images/projects/smart-lock-thumb.jpg",
        "hero": "/images/projects/smart-lock-hero.jpg",
        "gallery": [
          "/images/projects/smart-lock-1.jpg"
        ]
      },
      "metrics": {
        "lines_of_code": 1200,
        "development_hours": 80,
        "team_size": 1
      }
    }
  ]
}
```

## Mission Control Dashboard (`data/dashboard.json`)

```json
{
  "stats": [
    {
      "id": "stat-001",
      "label": "Projects Completed",
      "value": 3,
      "icon": "code-square",
      "trend": "up",
      "previousValue": 1,
      "timeframe": "This Year"
    },
    {
      "id": "stat-002",
      "label": "Skills Mastered",
      "value": 8,
      "icon": "star",
      "trend": "up"
    },
    {
      "id": "stat-003",
      "label": "Development Hours",
      "value": 500,
      "icon": "clock",
      "trend": "up",
      "unit": "hrs"
    },
    {
      "id": "stat-004",
      "label": "Current Focus",
      "value": "Networking",
      "icon": "network",
      "type": "string"
    }
  ],
  "charts": [
    {
      "id": "chart-001",
      "type": "timeline",
      "title": "Development Journey",
      "dataPoints": [
        { "year": 2023, "projects": 1 },
        { "year": 2024, "projects": 3 }
      ]
    },
    {
      "id": "chart-002",
      "type": "skills-distribution",
      "title": "Skills by Category",
      "data": {
        "languages": 4,
        "tools": 4,
        "interests": 4
      }
    }
  ]
}
```

## Education Data (`data/resume.json` extended)

```json
{
  "education": [
    {
      "id": "edu-001",
      "degree": "Bachelor of Technology",
      "field": "Computer and Communication Engineering",
      "institution": "NMAM Institute of Technology, NITTE",
      "location": "Karnataka, India",
      "startDate": "2023",
      "endDate": "2027",
      "current": true,
      "gpa": null,
      "highlights": [],
      "coursework": []
    }
  ]
}
```

---

## Context API Schema

### PortfolioContext

```javascript
{
  // Current active section (based on scroll)
  activeSection: 'home' | 'about' | 'mission-control' | 'skills' | 'experience' | 'projects' | 'contact',
  
  // Current scroll position
  scrollPosition: number,
  
  // Viewport dimensions
  viewport: {
    width: number,
    height: number,
    isMobile: boolean
  },
  
  // Mobile menu state
  isMobileMenuOpen: boolean,
  
  // Projects filtering
  projectFilter: {
    activeCategory: string | null,
    searchQuery: string
  },
  
  // Contact form state
  contactForm: {
    isSubmitting: boolean,
    isSuccess: boolean,
    error: string | null
  },
  
  // Methods
  updateActiveSection(sectionId): void,
  updateScrollPosition(y): void,
  toggleMobileMenu(): void,
  setProjectFilter(category): void,
  submitContactForm(data): Promise<void>
}
```

---

## Component Props Schema

### Hero Component
```javascript
{
  // No props required - uses context
  // Animation state managed internally
}
```

### SkillBar Component
```javascript
{
  name: string,
  proficiency: number (0-100),
  category: string,
  animated: boolean,
  delay?: number
}
```

### ProjectCard Component
```javascript
{
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[],
  onOpen: (projectId) => void,
  featured?: boolean
}
```

### TimelineItem Component
```javascript
{
  id: string,
  title: string,
  subtitle: string,
  date: string,
  description: string,
  side: 'left' | 'right',
  index: number
}
```

### ContactForm Component
```javascript
{
  onSubmitSuccess: () => void,
  onSubmitError: (error) => void
}
```

---

## API Integration Points

### Email Service (`services/emailService.js`)

```javascript
Interface:
- sendContactEmail(formData): Promise<{success, message}>
  Input: { name, email, subject, message }
  Output: { success: boolean, message: string }

- sendAutoReply(email): Promise<void>

Implementation:
- Could use: EmailJS, FormSubmit, Backend API
- Includes validation & error handling
```

---

## Types & Constants

### Section IDs
```javascript
SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  MISSION_CONTROL: 'mission-control',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  CONTACT: 'contact',
  FOOTER: 'footer'
}
```

### Project Categories
```javascript
PROJECT_CATEGORIES = {
  IOT: 'iot',
  MOBILE: 'mobile',
  WEB: 'web',
  RESEARCH: 'research'
}
```

### Skill Proficiency Levels
```javascript
PROFICIENCY = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
  EXPERT: 4
}
```

---

## Data Validation Rules

### Contact Form
```
- name: required, 2-50 chars
- email: required, valid email format
- subject: required, 5-100 chars
- message: required, 10-1000 chars
```

### Skill Entry
```
- name: required, non-empty string
- proficiency: 0-100 integer
- years: positive integer or null
```

### Project Entry
```
- title: required, 3-100 chars
- description: required, 10-500 chars
- tags: array of strings, 1-10 items
- startDate: valid ISO date
- status: one of [completed, in-progress, planned]
```
