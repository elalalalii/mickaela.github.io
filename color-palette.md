# MICKAELA Portfolio - Color Palette & Design Guide

## 🎨 Professional 5-Color Palette

### 1. Primary Color - Pure White
- **Hex:** `#FFFFFF`
- **RGB:** `rgb(255, 255, 255)`
- **Usage:** Main background color, card backgrounds, clean space
- **Purpose:** Creates a professional, minimalist foundation that reflects the logo's clarity

### 2. Secondary Color - Pure Black
- **Hex:** `#000000`
- **RGB:** `rgb(0, 0, 0)`
- **Usage:** Primary text, headers, navigation elements, logo color
- **Purpose:** Strong contrast for readability, matches the logo illustration

### 3. Accent Color 1 - Tech Teal
- **Hex:** `#0A7EA4`
- **RGB:** `rgb(10, 126, 164)`
- **Usage:** Buttons, links, key highlights, hover states, section highlights
- **Purpose:** Adds modern tech feel while maintaining professionalism
- **Note:** Complements black/white with a contemporary, trustworthy tech aesthetic

### 4. Accent Color 2 - Subtle Gray
- **Hex:** `#F5F5F7`
- **RGB:** `rgb(245, 245, 247)`
- **Usage:** Secondary backgrounds, alternating sections, card shadows, borders
- **Purpose:** Provides subtle visual separation without disrupting the minimalist aesthetic
- **Note:** Very light gray that maintains the clean, airy feel

### 5. Accent Color 3 - Attention Orange
- **Hex:** `#FF5722`
- **RGB:** `rgb(255, 87, 34)`
- **Usage:** Call-to-action buttons, error messages, important notifications, "Contact Me" elements
- **Purpose:** Draws immediate attention, creates urgency
- **Note:** Use sparingly - maximum 5-10% of visual elements

---

## 📐 Design Guide

### Typography Hierarchy
```css
/* Headers */
h1, h2, h3 { color: #000000; }

/* Body Text */
body { color: #000000; background: #FFFFFF; }

/* Links */
a { color: #0A7EA4; }
a:hover { color: #FF5722; }

/* Subtle Text */
.muted { color: #666666; }
```

### Button Styles
```css
/* Primary CTA Button */
.btn-primary {
  background: #FF5722;
  color: #FFFFFF;
  border: none;
}
.btn-primary:hover {
  background: #E64A19;
}

/* Secondary Button */
.btn-secondary {
  background: #0A7EA4;
  color: #FFFFFF;
  border: none;
}
.btn-secondary:hover {
  background: #086280;
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
}
.btn-outline:hover {
  background: #000000;
  color: #FFFFFF;
}
```

### Layout Sections
```css
/* Main Background */
body { background: #FFFFFF; }

/* Alternate Sections */
.section-alt { background: #F5F5F7; }

/* Card Components */
.card {
  background: #FFFFFF;
  border: 1px solid #F5F5F7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
```

### Visual Hierarchy Rules

1. **White Space is Key**: Embrace generous padding and margins (minimum 2rem between sections)
2. **Black for Impact**: Use pure black for key headings and critical text
3. **Teal for Interaction**: Apply Tech Teal to all interactive elements
4. **Gray for Subtlety**: Use Subtle Gray for backgrounds and dividers
5. **Orange for Urgency**: Reserve Attention Orange for maximum 2-3 CTA elements per page

### Accessibility Standards
- **Contrast Ratios:**
  - Black on White: 21:1 (WCAG AAA) ✓
  - Tech Teal on White: 4.9:1 (WCAG AA) ✓
  - Attention Orange on White: 3.04:1 (WCAG AA for large text) ✓

### Usage Distribution (Recommended)
- **White:** 60% (backgrounds, spacing)
- **Black:** 25% (text, headers)
- **Tech Teal:** 10% (accents, interactions)
- **Subtle Gray:** 4% (dividers, secondary backgrounds)
- **Attention Orange:** 1% (CTAs, alerts)

---

## 🖼️ Component Examples

### Navigation Bar
- Background: `#FFFFFF`
- Text: `#000000`
- Active Link: `#0A7EA4`
- Hover Effect: `#0A7EA4` with underline

### Hero Section
- Background: `#FFFFFF`
- Heading: `#000000`
- Subheading: `#666666`
- CTA Button: `#FF5722`

### Projects/Portfolio Cards
- Card Background: `#FFFFFF`
- Border: `#F5F5F7`
- Title: `#000000`
- Description: `#333333`
- "View Project" Link: `#0A7EA4`

### Footer
- Background: `#F5F5F7`
- Text: `#000000`
- Links: `#0A7EA4`

---

## 💡 Design Philosophy

This palette embodies:
- **Minimalism:** Clean black and white foundation
- **Professionalism:** Tech Teal adds credibility
- **Modernity:** Contemporary color choices for IT/Tech field
- **Clarity:** High contrast ensures excellent readability
- **Action-Oriented:** Strategic use of Attention Orange guides user behavior

Perfect for a BSIT portfolio showcasing technical expertise with modern design sensibility.
