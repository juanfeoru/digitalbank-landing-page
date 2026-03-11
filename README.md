# Frontend Mentor - Digitalbank landing page solution

This is a solution to the [Digitalbank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN). This project is a modern, responsive landing page for a digital banking platform, built with a focus on performance, accessibility, and clean code.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Major Improvements](#major-improvements)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Navigate the mobile menu with a smooth overlay.

### Features

- **Responsive Design**: Full support for Mobile (375px) and Desktop (1440px) layouts.
- **Accessibility (A11y)**: ARIA attributes for the mobile menu, descriptive labels for interactive elements, and optimized focus-visible states.
- **Performance**: High-priority rendering for critical Hero assets and lazy loading for off-screen content.
- **Modern Tech**: Built with Astro and the latest Tailwind CSS 4 features.

## My process

### Built with

- **[Astro](https://astro.build/)** - Modern web framework for content-driven websites.
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework with its new 4.0 engine.
- **TypeScript** - Used for robust scripting logic in the navigation.
- **Semantic HTML5** - Focused on proper structure and accessibility.
- **Flexbox & CSS Grid** - For complex, responsive layouts.
- **Mobile-first workflow**.

### Major Improvements

#### 1. Performance Optimizations (LCP & Speed)
- **High Fetch Priority**: Used `fetchpriority="high"` and `loading="eager"` for the Hero section's background and mockups to minimize time to Largest Contentful Paint (LCP).
- **Lazy Loading**: Implemented `loading="lazy"` for all secondary icons and article thumbnails to improve initial page speed.
- **Local Fonts**: Optimized font loading using local `@font-face` with `font-display: swap` to prevent FOIT (Flash of Invisible Text).

#### 2. Accessibility (A11y)
- **ARIA Attributes**: Integrated `aria-expanded`, `aria-controls`, and `aria-label` into the mobile menu for screen reader compatibility.
- **Focus States**: Added a site-wide `:focus-visible` style ensuring clear visual cues for keyboard-only users.
- **Semantic Structure**: Utilized proper heading hierarchy and descriptive `aria-label` tags for all navigation links and logos.

#### 3. Component Architecture
- **Modular Sections**: Refactored the landing page into reusable Astro components (`Hero`, `Features`, `Articles`, `Navbar`, `Footer`).
- **Data-Driven Cards**: Used data objects to dynamically generate Feature and Article cards, ensuring consistency and ease of maintenance.

### What I learned

Working with **Tailwind CSS 4** provided a more streamlined developer experience, especially with its new CSS-native theme configuration. I also refined my approach to **Astro's image optimization**, ensuring that critical assets are always loaded with the correct priority.

Example of optimized Hero image in Astro:

```astro
<Image
  src={imageMockups}
  alt=""
  class="absolute z-10 w-[90%]"
  loading="eager"
  fetchpriority="high"
/>
```
