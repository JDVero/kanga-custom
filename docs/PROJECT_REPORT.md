# Kanga Custom Products
## Website Development and MVP Consulting Report

Company Name: Kanga Custom Products  
Contact Person: John Bouwer, Owner  
Email / Phone: kangainfo@gmail.com | 801-941-1632  
Location: South Salt Lake City, Utah, United States  
Website / Repo: http://www.kangapro.com | https://github.com/JDVero/kanga-custom  
Consulting Team: Jason (Lead), Sami Uddin, Aashik Siddik, Rayan, Noor  

---

## 1. Introduction and Business Background

### 1.1 Organizational Context and Mission
Kanga Custom Products is a custom awards manufacturer/importer out of South Salt Lake City, Utah. The business falls into the Arts and Recreation Services industry and specializes in producing and direct distribution of heavy weight die cast tournament sporting medals, printed custom neck ribbons, collectible team trading lapel pins, and championship trophies.

Owner John Bouwer's core philosophy is to offer youth sports organizers stress-free and reliable awards procurement. 'If you have the job of organizing medals, we will do the worrying for you,' says the company motto. 'Nothing makes us happier than the sight of enthusiastic children getting their medals on the day of the final.'

The main competitive advantages of Kanga Custom Products are:
- Competition with the direct manufacturer and importer in the form of pricing that is consistently Below Retail Distributors (e.g., Wilson Trophy Company, Symbol Arts, Mission Awards) by 10-20%.
- In-house custom graphic design services - Digital proofs and vector artwork adjustments - at no extra cost.
- Zinc alloy high precision two dimensional and three dimensional mold detailing for custom high quality zinc alloy die casting.
- Headlined and guaranteed production and delivery dates, specifically for tournament opening ceremonies and finals days.

### 1.2 Target Customer Profiles
The customer base of Kanga Custom Products is composed of three main institutional segments:
- **1. Youth Tournament Directors:** Directors of weekend invitationals and regional championships for soccer, baseball, softball, basketball, gymnastics and martial arts who need bulk orders of custom medals and commemorative ribbons.
- **2. Club & League Directors:** Directors of youth sports organizations who buy participation awards, milestone trophies for the year, and team trading pins for the season.
- **3. Educational and Sporting Association Directors:** School athletic directors and regional governing officials who obtain standardized championship awards, plaques and scholastic recognitions.

### 1.3 Competitive Environment
The custom awards and sports recognition market in Utah and nationwide features several established competitors:
- **1. Wilson Trophy Company:** Large regional distributor of standard trophies, plaques, and generic sporting awards that have higher catalog mark-ups.
- **2. Symbol Arts:** Utah-based producer specializing in custom badges, high-end lapel pins, and corporate coins.
- **3. Mission Awards and CustomMedals.com:** Online ordering systems that feature standard medal options and are automated.

Competitors have automated retail catalog infrastructure, but they often charge steep mold setup fees, minimum order penalties, and take long custom proofing turnaround times. Kanga's standout features include its direct importer pricing, complete custom mold flexibility, and personalized consultation with John Bouwer.

---

## 2. System Analysis and Gap Assessment (Objective 1)

### 2.1 Baseline Legacy Operations
Before the introduction of this Minimum Viable Product (MVP), Kanga Custom Products relied solely on traditional offline and manual sales and distribution channels:
- **Customer Acquisition:** Only dependent on word-of-mouth, previous personal networks, and repeat seasonal tournament clients.
- **Product Inquiries:** Directors took up calls from John Bouwer by means of unstructured telephone calls or text messages without the use of standard specification documentation.
- **Quote Calculations:** Quotes were periodically created by hand, as a result of back-and-forth exchanges by email, where issues of vector artwork status, piece count and delivery dates were often missing.
- **Portfolio Presentation:** There was no single digital showcase or direct contact inquiry flow to provide prospective buyers with a clear view of past medals, enamel finishes, or immediate support channels.

### 2.2 Gap Analysis Matrix

| Functional Dimension | Legacy Operational Workflow | Proposed and Delivered MVP Solution |
| :--- | :--- | :--- |
| **Search Discoverability** | Zero search engine visibility; absent from online directories. | Full on-page and technical SEO architecture with JSON-LD LocalBusiness metadata and XML sitemap. |
| **Product Exploration** | Prospective clients had to request physical samples or verbal explanations. | Dedicated catalog pages with full product galleries detailing zinc alloy medals, enamel options, ribbon types, and Marco Awards catalog link. |
| **Customer Journey & Process** | No documented workflow; clients uncertain about proofing and mold timelines. | Clear 4-step "How It Works" process guide from initial inquiry to finals day delivery. |
| **Lead Generation** | Fragmented phone messages and informal email threads. | Unified quote engine capturing event dates, quantity brackets (50-1,000+), and artwork readiness in a standardized format. |
| **Brand Legitimacy** | Limited digital footprint creating hesitation among first-time regional directors. | Professional, responsive web interface emphasizing Utah workshop roots, customer guarantees, and founder values. |
| **Customer Support & Inquiries** | Direct telephone reliance with no automated confirmation. | Dedicated Contact Us section with direct phone/email cards and asynchronous AJAX message form with instant confirmation modal. |

### 2.3 Feature Prioritization Framework (MoSCoW Method)
To deliver immediate commercial value within the project lifecycle, functional requirements were categorized using the MoSCoW framework:
- **1. Must Have (Delivered in MVP):** Multi-page website fully responsive to mobile devices, dedicated Contact Us interface with direct channels and form routing, comprehensive product galleries for custom medals and trading pins, Marco Awards Group catalog integration, quote request engine, and local Utah SEO.
- **2. Should Have (Planned Phase 2 Implementation):** User Registration, User Auth, Password Recovery, Direct Connection to Payment Gateway (Stripe/PayPal), and Customer Orders History.
- **3. Could Have (Future Architectural Upgrades):** In-app messaging and digital proof markup system, push notifications, SMS milestone updates, and embedded 3D medal customizer visualizer.
- **4. Won't Have (Excluded from Current Scope):** Complicated ticketing systems, internal healthcare systems, and speculative gamification features that are not relevant to Kanga's current B2B sales goals.

---

## 3. System Architecture, UI/UX Design, and Implementation (Objective 2)

### 3.1 Technology Stack Justification
The application was engineered utilizing a lightweight, standards-compliant technology foundation:
- **1. Structure:** Semantic HTML5 using landmark tags (header, main, section, article, nav, footer) and ARIA attributes for full accessibility.
- **2. Presentation:** Vanilla CSS3, using CSS Custom Properties (Design Tokens), CSS Grid and Flexbox layouts. This way there are no external framework dependencies, no overhead at runtime and quick network loading speeds.
- **3. Client-Side Scripting:** Modern Vanilla JavaScript (ES6+): Loading of dynamic components, modal dialogues, form AJAX handlers, and asynchronous HTTP fetch operations.
- **4. Backend Routing:** FormSubmit.co AJAX gateway handling form serialization, spam prevention, and structured JSON output directly to John Bouwer's email.

### 3.2 Information Architecture and Directory Structure
The web application utilizes a hierarchical information architecture structured into clean operational directories:
- **Root Level:** Primary public endpoints such as `index.html`, `contact.html`, `products.html`, `medals.html`, `pins.html`, `how-it-works.html`, `about.html`, `our-values.html`, `request-quote.html`, `sitemap.xml` and `robots.txt`.
- **Components Module (`components/`):** Modular templates for `header.html` and `footer.html` resolved asynchronously and dynamically inserted into views via client-side fetch calls.
- **Assets Directory (`assets/` & `products/`):** Core styling system (`CSS.css`), client script (`script.js`), brand emblem (`logo/KangaLogo.png`), and extensive real product photo libraries (`products/medals/` with 50+ photos, `products/pins/` with 8 photos, `products/trophy/`).
- **Documentation Repository (`docs/`):** Technical documentation, live presenter guides, and consulting analysis reports.

### 3.3 Core Page Engineering Breakdown
- **Homepage (`index.html`):** The landing page uses an editorial split-column layout for optimization of conversions. The key value proposition and primary CTAs (Request a Free Quote and View Product Line) are featured alongside a customer trust strip highlighting 100% custom molds, price-beat guarantees and on-time delivery. Under the hero is a 4-pillar numbered grid (01 Craftsmanship, 02 Reliability, 03 In-House Art, 04 Honest Rates), followed by a 4-step ordering process preview, product category cards, and direct consultation callouts.
- **Contact Us (`contact.html`):** Built as a dedicated communication hub for prospective and returning tournament directors. Features direct contact cards (Phone: 801-941-1632, Email: kangainfo@gmail.com, South Salt Lake City workshop location), an asynchronous direct message form with instant modal confirmation, and direct importer value reminders.
- **About Us (`about.html`) and Our Values (`our-values.html`):** These views create institutional credibility by showcasing the John Bouwer founder story, operating roots in South Salt Lake City, direct importer pricing savings (10-20% below retail), and director guarantees backed up by core values.
- **Products Ecosystem (`products.html`, `medals.html`, `pins.html`):** The product catalog offers a central entry point to custom medals, trading pins, and championship awards. Medals and Pins specification pages feature complete multi-image photo galleries displaying over 40 genuine tournament awards (Dixie, Avalanche, LaRoca, Rage, Wasatch, Alien, Park City, West Haven). Trophies connect directly to the official supplier catalog: Marco Awards Group (https://www.marcoawardsgroup.com/catalog).
- **Customer Journey Flow (`how-it-works.html`):** A 4-stage interactive journey guiding directors step-by-step through Tell Us What You Need (01), Discuss Requirements (02), Precision Production (03), and Guaranteed Delivery (04).
- **Lead Capture Engine (`request-quote.html`):** Collects tournament contact details, organization names, volume tiers (50 to 1,000+ pieces), event deadline date pickers, and vector artwork readiness with instant AJAX submission.

---

## 4. Search Engine Optimization (SEO) and Digital Marketing (Part of Objective 3)

### 4.1 Keyword Strategy and Research
To establish organic search visibility across the Salt Lake Valley and the Intermountain West, keyword research targeted high-intent transactional search phrases:
- **Primary Keywords:** custom medals, custom pins, tournament medals, sporting event medals, custom awards, trophies.
- **Regional Geo-Targeted Keywords:** custom medals Salt Lake City, tournament awards Utah, youth soccer medals Utah, baseball trading pins South Salt Lake.
- **Long-Tail Specific Phrases:** die cast zinc sporting medals with custom ribbon, rush order tournament pins Utah, cheap custom medals for youth tournaments.

### 4.2 On-Page and Technical SEO Implementation
Every document within the application was configured in compliance with modern search engine crawling standards:
- **Unique Title Tags:** Descriptive, brand-aligned page titles under sixty characters across all views.
- **Compelling Meta Descriptions:** Transaction-focused summaries between one hundred forty and one hundred sixty characters with local keywords.
- **Semantic Heading Hierarchy:** Strict enforcement of a single primary H1 tag per page, followed by logical H2 section headings and H3 functional subheadings.
- **Descriptive Image Alt Text:** All visual assets in the medal and pin galleries include informative alt attributes detailing product materials and event names.
- **Structured Data Markup (JSON-LD):** Integrated LocalBusiness and WebSite structured data declaring Kanga's business name, geographic address (South Salt Lake City, UT 84115), phone contact, and product categories.
- **XML Sitemap and Robots Directive:** Complete XML sitemap (`sitemap.xml`) cataloging all URLs and crawler directives (`robots.txt`) referencing the canonical index.

### 4.3 Social Media and Instagram Marketing Plan
To reinforce digital discoverability and provide social proof, an Instagram Business deployment strategy was formulated, including establishing a Professional Business profile linked to `kangainfo@gmail.com`, weekly tournament spotlight posts featuring champions wearing medals, and regional athletic hashtag curation (`#UtahYouthSoccer`, `#SaltLakeSports`, `#TournamentDirector`, `#CustomMedals`).

---

## 5. Testing, Quality Assurance, and Performance Evaluation (Objective 3)

### 5.1 Usability and Responsive Testing
Testing was executed across physical hardware and emulated viewport resolutions:
- **Desktop Displays (1920x1080, 1440x900, 1280x800):** Verified grid symmetry, desktop navigation menu alignment, hover transitions, and multi-column photo galleries.
- **Tablet Viewports (768px - 1024px):** Validated the transition of two-column contact layouts and three-column medal grids into structured two-by-two layouts.
- **Mobile Handsets (375px - 428px):** Tested hamburger navigation drawer toggle, touch targets (minimum 44x44 pixel tap zones), full-width form inputs, and stacked showcase cards.

### 5.2 Functional Test Log

| Test ID | Component Tested | Action Executed | Expected System Behavior | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Shared Navigation | Client loads subpage view. | Header/footer dynamically fetch; active link highlights. | **Pass** |
| **TC-02** | Mobile Menu Drawer | User taps hamburger icon. | Drawer expands vertically; ARIA expanded updates. | **Pass** |
| **TC-03** | Product Specs Routing | User clicks Medals/Pins CTA links. | Browser routes to dedicated medals.html and pins.html. | **Pass** |
| **TC-04** | Marco Awards Trophy Link | User clicks Browse Marco Awards Catalog. | Opens Marco Awards Group catalog in secure new tab. | **Pass** |
| **TC-05** | Medals Photo Gallery | User browses custom medals grid. | 12+ tournament medal cards render with high-res images. | **Pass** |
| **TC-06** | Pins Photo Gallery | User browses trading pins grid. | 8 custom pin cards render with zoom hover and alt tags. | **Pass** |
| **TC-07** | Contact Direct Inquiries | User submits message on contact.html. | FormSubmit AJAX handles request; modal popup appears. | **Pass** |
| **TC-08** | Quote Form Validation | User submits empty required fields. | HTML5 validation halts submission and flags inputs. | **Pass** |
| **TC-09** | Quote Submit (AJAX) | User submits complete quote form. | Asynchronous POST dispatches; confirmation modal appears. | **Pass** |
| **TC-10** | Network Error Fallback | Network disconnect simulated. | System catches error and displays direct phone/email fallback. | **Pass** |

---

## 6. Task Delegation, GitHub Branches, and Student Contribution Matrix

All student contributions were developed in dedicated feature branches and pushed directly to the official GitHub repository (https://github.com/JDVero/kanga-custom) using collaborator tokens with verified author attribution:

| Student Name | Assigned Branch | Live Commit SHA | Primary Module Responsibility |
| :--- | :--- | :--- | :--- |
| **Jason (Lead)** | `main` | `a03bf3df` | Client Communication, Asset Management, Social Media Strategy, How It Works Flow |
| **Sami Uddin** | `sami-about-us` | `ce5e029c` | Navigation Architecture, Home, About Us, Values, CSS Design System |
| **Aashik Siddik** | `aashik-products` | `cf64b77e` | Products Hub, Medals & Pins Multi-Image Galleries, Marco Awards Integration |
| **Rayan** | `rayan-gallery` | `04a0a7dc` | Contact Us Section, Direct Support Channels, Inquiry Form Routing & QA |
| **Noor** | `main (QA/SEO)` | `a03bf3df` | Quote Request Engine, On-Page/Technical SEO, Usability Testing, LocalBusiness Schema |

### 6.1 Individual Contribution Breakdown
- **Jason - Project Lead, Coordination, Content and Social Media**
  - Tasks: Kept project aligned with John Bouwer; in charge of confirmed functional requirements; curated product photography assets; set up backend email routing for FormSubmit; developed social media marketing plan.
  - Deliverables and Evidence: FormSubmit.co integration for the backend, raw assets collection, directory structuring, Instagram business operational plan, and team task tracking.
- **Sami Uddin - Website Structure, Architecture and Main Pages**
  - Responsibilities: Designed overall website semantic architecture, global navigation header with mobile drawer toggle, footer layouts, central CSS design system and core brand pages.
  - Deliverables and Evidence: index.html (Homepage architecture & split hero), about.html (Company background & founder story), our-values.html (4 core value pillars), CSS.css (Core design system), and shared components (header.html, footer.html). Branch: `sami-about-us` (SHA: `ce5e029c`).
- **Aashik Siddik - Products Section and Technical Specifications**
  - Responsibilities: Designed full products catalog hub, created detailed technical specification breakdowns and multi-image photo galleries for custom medals and trading pins, and integrated the Marco Awards Group catalog.
  - Deliverables and Evidence: products.html (Category hub and comparison), medals.html (Multi-image medal gallery and zinc alloy specs), pins.html (Multi-image trading pin gallery and enamel specs), and Marco Awards Group external catalog integration. Branch: `aashik-products` (SHA: `cf64b77e`).
- **Rayan - Contact Us Section, Direct Support Channels and Form Integration**
  - Responsibilities: Engineered and optimized the Contact Us section, implemented direct phone/email channels, built the validated message inquiry form with AJAX handling, and verified contact routing.
  - Deliverables and Evidence: contact.html (Direct contact cards, inquiry form, and confirmation modal), responsive mobile presentation, direct support channels, and QA validation. Branch: `rayan-gallery` (SHA: `04a0a7dc`).
- **Noor - SEO Strategy, Quote Functionality and Quality Assurance**
  - Responsibilities: Developed and executed overall SEO strategy, built structured quote request system, deployed JSON-LD structured data and multi-device testing.
  - Deliverables and Evidence: request-quote.html (Structured tournament inquiry form), sitemap.xml & robots.txt indexing files, Schema.org JSON-LD LocalBusiness metadata, and cross-device QA testing log.

---

## 7. Future Strategic Roadmap and Implementation Plan

### Phase 1: Local Digital Authority and Domain Launch (Months 1 to 2)
1. **Production Domain Setup:** Point www.kangapro.com to production hosting infrastructure (e.g., GitHub Pages, Cloudflare Pages, or Netlify).
2. **Google Business Profile and Local Maps:** Claim and optimize Kanga's Google Business Profile in South Salt Lake City, ensuring telephone, address, and category details align with website schema.
3. **Google Search Console Verification:** Submit sitemap.xml to monitor organic keyword indexing and impression growth.

### Phase 2: Transactional Maturity and Payment Processing (Months 3 to 6)
1. **Live Payment Gateway Integration:** Implement Stripe Checkout or PayPal Commerce Platform to enable tournament directors to pay fifty percent mold deposits securely online via credit card or ACH transfer upon artwork approval.
2. **User Registration and Customer Accounts:** Deploy a lightweight authentication system enabling returning tournament directors to access previous mold specifications, re-order seasonal batches, and view billing invoices.

### Phase 3: Operational Automation and Digital Proofing Portal (Months 6 to 12)
1. **Digital Proof Approval Workflow:** Build an interactive customer dashboard where John Bouwer can upload 3D PDF mockups and directors can digitally approve Pantone color swatches and ribbon dimensions.
2. **Automated Milestone Notifications:** Implement transactional email notifications via SendGrid or Postmark, alerting directors when molds are cast, enameled, and dispatched for venue delivery.
3. **Real-Time Analytics Dashboard:** Integrate privacy-focused website analytics to monitor traffic volume, quote conversion rates, and popular product categories.

---

## 8. Conclusion

The Minimum Viable Product created for Kanga Custom Products drives the company from offline and word-of-mouth to a modernized and discovery-driven digital business. The solution offers a fast, responsive, customer-focused platform, solving Kanga's problems: removing the delay of communicating quotes, making a presence in the local Utah market, and providing a professional-looking showcase of custom awards.

The modular design allows John Bouwer to capture and convert high value tournament leads, and still have a solid base for future developments like online payments, user portals and automated online digital proofing processes.
