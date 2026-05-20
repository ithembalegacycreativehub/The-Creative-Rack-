# The Creative Rack V1

The Creative Rack is a public creative discovery platform for African fashion designers, stylists, and visual artists. V1 helps people view creative work, learn creative stories, discover locations and specialties, and connect through social/contact placeholders and events.

## V1 Purpose

This release is a static GitHub Pages-ready website focused on credibility, visibility, community discovery, and public launch readiness. It is not a sales platform.

## Current Features

- Responsive sticky navigation
- Editorial hero and African-inspired visual identity
- Three core creative categories: Fashion Designers, Stylists, Visual Artists
- Searchable and filterable creative directory
- Location and specialty filters
- Featured creative horizontal scroll section
- The Walk Way digital runway preview with non-transactional demand bars
- The Design Corner premium mini atelier with live SVG preview, front/back view, rotation controls, local save/load, concept board, JSON download, and application form handoff
- Profile modal with bio, work highlights, collaboration interests, tags, and social/contact placeholder
- Copy profile link interaction
- Demo save/favourite interaction using `localStorage`
- Upcoming events section rendered from an admin-editable JavaScript array
- Event type filters and no-event state
- Front-end-only Join the Platform form
- GitHub Pages-compatible relative paths

## Intentionally Disabled for V1

V1 removes selling and transaction functionality. The site does not include cart logic, checkout flows, payment options, delivery options, purchase confirmations, or store-style product actions. Work examples are presented as portfolio and profile showcases only.

The Walk Way demand bars are demo audience-interest signals only. They do not create orders, reservations, payments, or product availability commitments.

The Design Corner is also browser-only. Saved concepts are stored in the visitor's `localStorage` on that device and are not submitted anywhere unless the visitor copies the concept into the front-end application form.

## File Structure

```text
/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
```

## Run Locally

Open `index.html` directly in a browser, or run a simple local server from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `the-creative-rack`.
2. Upload all files and folders from this project so `index.html` is in the repository root.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings** > **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/root`, then save.
7. Wait for GitHub Pages to publish the site.
8. Open the live Pages URL and confirm the homepage loads from `index.html`.

## Updating Creative Profiles

Open `assets/js/script.js` and find:

```js
// ================================
// ADMIN EDIT AREA: CREATIVES
// Add or update creative profiles here
// ================================
```

Add or edit objects inside the `creatives` array. Keep image paths relative, for example `assets/images/designer-studio-profile.png`.

## Updating Upcoming Events

Open `assets/js/script.js` and find:

```js
// ================================
// ADMIN EDIT AREA: EVENTS
// Add or update upcoming events here
// ================================
```

Add or edit objects inside the `events` array. Use `Upcoming`, `Closed`, or `Coming Soon` for the `status` field. Events marked `Closed` are hidden from the active event grid.

## Updating The Walk Way

Open `assets/js/script.js` and find:

```js
// ================================
// ADMIN EDIT AREA: THE WALK WAY
// Add runway concepts or live preview pieces here.
// ================================
```

Add or edit objects inside the `runwayLooks` array. Each look can include a title, designer, region of inspiration, image, status, and starting demand percentage.

## Updating The Design Corner

The Design Corner lives in `index.html`, `assets/css/style.css`, and `assets/js/script.js`. The main setup function is:

```js
initDesignCorner()
```

Garment types, colour swatches, and pattern/detail options can be edited in `designCornerConfig` inside `assets/js/script.js`.

The preview supports fabric texture selection, front/back view, garment lighting, clipped SVG texture overlays, and a rotation angle so visitors can inspect the concept like a small digital studio mockup.

The feature uses:

- `creativeRackLastDesignConcept` for the latest saved concept
- `creativeRackConceptBoard` for the small local concept board

Both are browser `localStorage` keys. There is no backend database in V1.

## Roadmap

### V1 — Static Discovery Platform

- Creative profiles
- Events section
- The Walk Way runway preview
- The Design Corner concept studio
- Search and filters
- Static admin-editable data

### V2 — Admin Dashboard

- Login for admins
- Add/edit/delete creatives
- Add/edit/delete events
- Review submitted applications

### V3 — Full Platform

- User accounts
- Creative dashboards
- Portfolio uploads
- Event registration
- Brand collaboration requests
- Monetisation options

## Notes

The Join the Platform form is front-end-only in V1. It shows a professional demo confirmation but does not submit or permanently store profile information.
