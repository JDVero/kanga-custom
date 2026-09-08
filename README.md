# Kanga Custom Products — Official Web Application MVP

[![Status](https://img.shields.io/badge/Status-Production%20Ready%20MVP-success)](#)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)](#)
[![License](https://img.shields.io/badge/License-Proprietary-orange)](#)

> **Client:** John Bouwer — Founder & Owner, Kanga Custom Products  
> **Location:** South Salt Lake City, Utah 84115  
> **Direct Phone:** (801) 941-1632 | **Email:** [kangainfo@gmail.com](mailto:kangainfo@gmail.com)  
> **Repository:** [https://github.com/JDVero/kanga-custom](https://github.com/JDVero/kanga-custom)

---

## 📖 Project Overview

**Kanga Custom Products** is a Utah-based specialty provider of custom tournament sporting medals, team trading lapel pins, and championship awards. 

This repository contains the complete, modern MVP web application built to transition Kanga Custom Products from an offline, word-of-mouth referral workflow into an interactive, high-converting digital platform tailored for youth tournament directors, league organizers, and scholastic sports clubs.

---

## 👥 Student Team & Contribution Matrix

| Team Member | Role | Primary Files & Responsibilities | Key Contributions |
| :--- | :--- | :--- | :--- |
| **Jason** | Project Lead & Backend Setup | `components/`, `assets/`, `docs/` | Repository initialization, asset curation, FormSubmit.co backend routing, Instagram growth strategy. |
| **Sami Uddin** | Architecture, Core Story & System | `index.html`, `about.html`, `our-values.html`, `assets/css/style.css` | Header navigation with mobile drawer, authentic Kanga story (John Bouwer, South Salt Lake City), 4-pillar system. |
| **Aashik Siddik** | Products Catalog & Category Flow | `products.html`, `medals.html`, `pins.html` | Products catalog hub, dedicated custom medals page, dedicated trading pins page, external trophy catalog redirect. |
| **Rayan** | Portfolio Gallery & Lightbox | `gallery.html`, `assets/js/main.js` | Portfolio gallery grid, category filter tabs (All, Medals, Pins, Trophies), accessible Lightbox modal with Previous/Next controls. |
| **Noor** | Quote Engine, SEO & QA | `request-quote.html`, `contact.html`, `sitemap.xml`, `robots.txt` | Structured quote inquiry form (quantity tiers, date picker, artwork readiness), SEO metadata, JSON-LD LocalBusiness Schema, sitemap. |

---

## 📁 Clean Directory Structure

```text
kanga-custom-repo/
├── assets/
│   ├── css/
│   │   └── style.css            # Bespoke athletic design system & tokens
│   ├── js/
│   │   └── main.js              # Header/footer loader, lightbox, AJAX forms
│   └── images/
│       ├── logo/
│       │   └── KangaLogo.png    # Brand vector emblem
│       ├── products/
│       │   ├── Bunga Run Medal.jpg
│       │   ├── Dixie Flip 2023.jpg
│       │   └── trophy.jpg
│       └── backgrounds/
│           ├── background1.jpg
│           ├── background2.png
│           └── background3.jpg
├── components/
│   ├── header.html              # Shared navigation bar & mobile drawer
│   └── footer.html              # Shared footer with direct contact channels
├── docs/
│   └── PROJECT_DOCUMENTATION.md # Comprehensive consulting & technical report
├── index.html                   # High-converting homepage & hero spotlight
├── about.html                   # Authentic founder story, stats, 4-step process
├── our-values.html              # 4 core pillars & director guarantees
├── products.html               # Product category hub & specifications
├── medals.html                  # Custom zinc-alloy tournament medals showcase
├── pins.html                    # Soft enamel & trading pins showcase
├── gallery.html                 # Filterable portfolio & modal lightbox
├── contact.html                 # Unified 2-column direct contact interface
├── request-quote.html           # Structured quote request form with timeline
├── robots.txt                   # Search engine crawl directives
├── sitemap.xml                  # XML sitemap for Google Indexing
├── .gitignore                   # Standard ignore rules
└── README.md                    # Project documentation & execution guide
```

---

## 🚀 How to Run Locally

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to project root
cd kanga-custom-repo

# Start local server
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in any modern web browser.

### Option 2: VS Code Live Server
1. Open the repository folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🛠️ Technology Stack & Design Principles

* **Core Structure**: Semantic HTML5 with complete ARIA accessibility landmarks.
* **Styling**: Pure CSS3 variables with curated athletic typography (`Inter` & `Poppins`).
* **Client Logic**: Vanilla JavaScript ES6+ (Zero external npm runtime bloat, fast load times).
* **Form Processing**: Secure AJAX integration via `FormSubmit.co` with custom modal feedback.
* **SEO & Metadata**: Integrated JSON-LD `LocalBusiness` Schema, OpenGraph tags, canonical tags, `sitemap.xml`, and `robots.txt`.

---

## 📋 Key Pages & Features

1. **Homepage (`index.html`)**:
   * 2-column hero with direct CTAs and physical medal spotlight.
   * Numbered 4-pillar value system (`01 Craftsmanship`, `02 Reliability`, `03 In-House Art`, `04 Honest Rates`).
   * 3-column product catalog and direct consultation banner.

2. **Custom Medals (`medals.html`) & Pins (`pins.html`)**:
   * Deep technical specifications on finishes (Antique Gold, Silver, Bronze, Shiny Polished, Black Nickel).
   * Ribbon sublimating details and special pin effects (Glitter, Glow, Spinners, Sliders).

3. **Portfolio Gallery (`gallery.html`)**:
   * Filter tabs (`All`, `Tournament Medals`, `Trading Pins`, `Trophies & Events`).
   * High-resolution lightbox with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).

4. **Quote Request Engine (`request-quote.html`)**:
   * Quantity bracket selection ($50$ to $1000+$ pcs).
   * Event date picker and artwork readiness dropdown.

---

## 📄 License & Ownership
Created for **John Bouwer & Kanga Custom Products**. All rights reserved &copy; 2026.
