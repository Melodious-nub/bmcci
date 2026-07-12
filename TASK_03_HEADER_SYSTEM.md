# TASK 03 — GLOBAL HEADER SYSTEM

Project:
BMCCI Digital Gateway

Dependencies:

README_01_PROJECT.md

README_02_DESIGN_SYSTEM.md

TASK_01_PROJECT_SETUP.md

TASK_02_GLOBAL_LAYOUT.md

Read every previous document before implementing this task.

---

# OBJECTIVE

Design and build one premium enterprise Header System that will be reused across the entire BMCCI Digital Gateway.

This is not just a navigation bar.

It is the global header experience.

Every page must use exactly the same Header.

Never redesign it later.

---

# HEADER GOALS

The Header should communicate:

Trust

Professionalism

International Business

Modern Technology

Executive Quality

Premium Feel

It should immediately make visitors feel they are browsing an international business platform.

---

# HEADER STRUCTURE

The Header consists of three layers:

1. Utility Bar

2. Main Navigation

3. Mega Menu & Mobile Navigation

---

############################################################

UTILITY BAR

############################################################

Height

40px

Background

Primary Green (#006A4E)

Text

White

Font Size

13px

Purpose

Display quick information and utility actions.

Left Side

• Welcome message

• Chamber contact email

• Office phone number

Right Side

• Facebook

• LinkedIn

• YouTube

• Language Switcher (EN | BM)

• Search Icon

Icons

Lucide Icons only.

Spacing

Clean.

Balanced.

Minimal.

Hide utility bar on small mobile devices.

---

############################################################

MAIN HEADER

############################################################

Height

88px

Background

Transparent on Hero

White after scrolling

Glass Blur

12px backdrop blur

Border

Subtle bottom border on scroll only.

Logo

Left aligned.

Navigation

Centered.

Primary CTA

Right aligned.

Navigation Items

Home

About

Trade & Investment

Economic Intelligence

Events

Membership

Discover

News

Contact

Each navigation item should support dropdown capability.

---

############################################################

LOGO

############################################################

Use BMCCI logo placeholder.

Maximum Height

48px

Clickable.

Returns to homepage.

Maintain proper clear space.

---

############################################################

PRIMARY CTA

############################################################

Button Text

Become a Member

Alternative

Join BMCCI

Button Style

Primary Green

Rounded

Height

48px

Padding

16px 28px

Hover

Slight lift

Darker Green

Shadow

Subtle

---

############################################################

MEGA MENU

############################################################

Supported Menus

Trade & Investment

Discover

Membership

News

Each Mega Menu should include:

Section Titles

Short descriptions

Quick Links

Featured Card

Optional image

Use modern white floating panels.

Rounded corners.

Soft shadows.

Maximum Width

900px

Animation

Fade

Slide Down

200ms–300ms

---

############################################################

SEARCH

############################################################

Search icon inside Header.

Click opens fullscreen search overlay.

Overlay contains:

Search input

Recent searches (placeholder)

Popular pages

Suggested links

ESC closes overlay.

Background blur.

---

############################################################

LANGUAGE SWITCHER

############################################################

Simple Toggle

EN

বাংলা

Minimal pill design.

No dropdown.

Remember active state.

---

############################################################

SCROLL BEHAVIOR

############################################################

Initial State

Transparent

After scrolling

White Background

Soft Shadow

Logo remains fixed.

Navigation stays centered.

CTA remains visible.

Smooth transition.

300ms.

---

############################################################

ACTIVE NAVIGATION

############################################################

Current page should display:

Green underline

Bold text

Smooth animation

Hover

Subtle underline animation.

---

############################################################

MOBILE HEADER

############################################################

Height

72px

Logo Left

Hamburger Right

Utility Bar hidden.

CTA moved inside mobile menu.

---

############################################################

MOBILE DRAWER

############################################################

Full height.

Slide from right.

Contains:

Navigation

Membership CTA

Language Switcher

Social Links

Search

Contact

Spacing should be generous.

---

############################################################

ACCESSIBILITY

############################################################

Keyboard navigation

ARIA labels

Visible focus states

Accessible menu

Proper tab order

ESC closes overlays

---

############################################################

RESPONSIVE

############################################################

Desktop

Mega Menu

Tablet

Dropdown

Mobile

Drawer Navigation

---

############################################################

ANIMATION

############################################################

Hover

Lift 2px

Underline animation

Mega Menu

Fade

Slide Down

Drawer

Slide Right

Search Overlay

Fade

Scale

Keep all animations subtle.

---

############################################################

DO NOT BUILD

############################################################

Homepage

Hero

Footer

Cards

Business Content

Events

Trade Sections

News

Dashboard

Only the Header System.

---

############################################################

EXPECTED OUTPUT

############################################################

One reusable Header Component.

Responsive.

Sticky.

Accessible.

Animated.

Premium.

Reusable on every page.

No duplicate code.

---

############################################################

ACCEPTANCE CRITERIA

The Header should feel comparable to premium enterprise websites.

Navigation should be intuitive.

Spacing should be balanced.

Mega Menu should feel modern.

Mobile experience should be polished.

The Header should never require redesign later.

---

NEXT TASK

TASK_04_FOOTER_SYSTEM.md

Wait for the next task.

End of TASK_03.
