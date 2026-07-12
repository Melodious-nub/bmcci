# TASK 02 — GLOBAL LAYOUT & APPLICATION SHELL

Project:
BMCCI Digital Gateway

Dependencies:

- README_01_PROJECT.md
- README_02_DESIGN_SYSTEM.md
- TASK_01_PROJECT_SETUP.md

Read all previous documents before starting.

---

# OBJECTIVE

Build the global application shell for the entire BMCCI Digital Gateway.

This task creates the reusable layout structure that every page will inherit.

Do NOT build any business pages.

Do NOT build the homepage.

Do NOT build the navbar or footer yet.

Focus only on the application's structural foundation.

---

# DESIGN GOAL

The website should immediately feel premium before any content is added.

Everything should feel spacious, elegant, and modern.

The layout must emphasize readability, whitespace, and visual consistency.

Every future page must reuse this layout.

---

# GLOBAL PAGE STRUCTURE

Every page should follow the same structure.

```

<html>

↓

<body>

↓

Global Loading Screen

↓

Scroll Progress Indicator

↓

Announcement Bar (optional)

↓

Navbar (placeholder only)

↓

Main Content

↓

Footer (placeholder only)

↓

Back To Top Button

↓

Global Scripts

```

Do not design the Navbar or Footer in this task.

Only reserve their layout positions.

---

# CONTAINER SYSTEM

Create reusable container classes.

.container

Maximum Width:
1320px

Margin:
Auto

Responsive Padding:

Desktop
32px

Tablet
24px

Mobile
20px

Never hardcode widths inside sections.

Always use reusable containers.

---

# PAGE WRAPPER

Create a reusable page wrapper.

Purpose:

Maintain consistent spacing

Provide vertical rhythm

Support future layouts

Every page must inherit this wrapper.

---

# SECTION SYSTEM

Create reusable section classes.

Example:

Hero Section

Large Section

Standard Section

Compact Section

Alternate Background Section

Each section should use the spacing system defined in README_02.

Never create custom spacing for individual pages.

---

# GRID SYSTEM

Prepare:

12-column desktop grid

Responsive tablet grid

Single-column mobile layout

Support:

2-column sections

3-column cards

4-column statistics

Feature layouts

Content with side panels

All grids must collapse gracefully on smaller screens.

---

# BACKGROUND SYSTEM

Prepare reusable background utilities.

White

Light Gray

Dark

Gradient Accent (very subtle)

Pattern Overlay (optional)

Avoid heavy gradients.

---

# PAGE HEADER TEMPLATE

Create a reusable page header layout.

It should support:

Breadcrumb

Page Title

Subtitle

Optional CTA

Optional Background Image

Do not create actual content.

Only create the reusable layout.

---

# SECTION TITLE TEMPLATE

Create one reusable section title component.

Structure:

Small Label

↓

Main Heading

↓

Description

↓

Optional Button

Every page must reuse this component.

---

# BREADCRUMB

Prepare a reusable breadcrumb component.

Desktop:

Inline

Mobile:

Scrollable if necessary

Keep styling minimal.

---

# DIVIDERS

Prepare reusable divider styles.

Light Gray

Soft

Minimal

Never use thick borders.

---

# SCROLL EXPERIENCE

Integrate Lenis.

Smooth scrolling.

Natural inertia.

Professional feel.

No excessive motion.

---

# PAGE TRANSITIONS

Prepare global transition utilities.

Fade

Opacity

Translate Y

Duration

300ms

Keep transitions subtle.

---

# LOADING SCREEN

Create a premium loading screen.

Requirements:

Minimal

White background

Centered BMCCI Logo placeholder

Animated loading indicator

Fade out smoothly

Display only on initial page load.

---

# SCROLL PROGRESS BAR

Fixed at the top.

Thin line.

Brand Green.

Animate based on page scroll.

---

# BACK TO TOP BUTTON

Bottom right.

Circular.

Hidden by default.

Appears after scrolling.

Smooth scroll to top.

Minimal design.

---

# GLOBAL ANIMATION FOUNDATION

Prepare animation utilities for:

Fade Up

Fade In

Slide Left

Slide Right

Scale

Stagger

Count Up

These utilities will be reused later.

---

# RESPONSIVE RULES

Desktop

Large spacing

Tablet

Reduce spacing proportionally

Mobile

Stack layouts vertically

Never hide important content.

---

# ACCESSIBILITY

Maintain semantic HTML.

Respect keyboard navigation.

Visible focus states.

Proper landmarks.

---

# DO NOT BUILD

Do NOT create:

Homepage

Hero

Cards

Events

Trade

Economic Dashboard

Membership

News

Contact

Navbar UI

Footer UI

Business content

---

# EXPECTED OUTPUT

The project should now have:

✔ Global Page Shell

✔ Reusable Containers

✔ Grid System

✔ Section Templates

✔ Loading Screen

✔ Scroll Progress Bar

✔ Back To Top Button

✔ Smooth Scrolling

✔ Page Transition Foundation

✔ Responsive Layout System

✔ Animation Utilities

Everything should be ready for UI implementation.

---

# ACCEPTANCE CRITERIA

Every future page should inherit this layout without modification.

No duplicated layout code.

Consistent spacing across the project.

Reusable containers.

Reusable sections.

Professional loading experience.

Responsive foundation complete.

---

# NEXT TASK

Wait for:

TASK_03_NAVBAR.md

Do not continue automatically.

End of TASK_02.
