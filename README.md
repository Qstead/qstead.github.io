# Consulting Website: Quality, Regulatory & Compliance

A free, fast static site for GitHub Pages: one scrolling home page plus separate Blog and Privacy pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The main page: hero, services, why work with me, industries, ways to engage, about, FAQ, and contact form |
| `blog.html` + `blog-capa-effectiveness.html` | Blog list and one starter article |
| `privacy.html` | Basic privacy policy |
| `404.html` | Page-not-found page |
| `training.html`, `education.html`, `resources.html` | "Coming soon" pages linked from the Learning Center dropdown in the nav |
| `logo.png` | Your logo, shown in the header |
| `site.js` | **Your contact details live here** (edit the top block) |
| `styles.css` | All design and colors |

## Before you publish

Already done: business name (QStead Group), email, phone, and the site address in the JSON-LD block.

Still to do:

1. **Your bio:** in the About section of `index.html`, replace the bracketed text with your real background and credentials. Only claim credentials, experience, and services you can substantiate.
2. **Check the wording:** the "Why work with me", pricing, and FAQ answers are general statements. Edit anything that does not match how you actually work.
3. **Blog article and privacy policy:** read both and adjust them to your practice. The privacy policy is a plain-language starting point, not legal advice. Consider having it reviewed.
4. **Contact form:** see "Make the contact form work" below to connect Formspree; until then it opens an email draft instead.
5. **Learning Center pages:** `training.html`, `education.html`, and `resources.html` are placeholder "coming soon" pages linked from the nav dropdown. Replace their content with real material whenever it's ready, or remove the dropdown from each page's `<ul id="menu">` if you'd rather hide it until then.

## Deploy on GitHub Pages (free)

Use a free **GitHub Organization** so the business stays separate from your personal profile.

1. On github.com click **+ > New organization**, choose the **Free** plan, and pick a name (this becomes your address).
2. Inside the organization create a **Public** repository named exactly `<orgname>.github.io`.
3. Click **uploading an existing file**, drag in all the files from this folder, and **Commit changes**.
4. Go to **Settings > Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After 1-2 minutes the site is live at `https://<orgname>.github.io`.

## Make the contact form work

GitHub Pages cannot run server code, so use a free form service:

1. Sign up at formspree.io and create a form.
2. Put the form's address in `formAction` in `site.js` (it looks like `https://formspree.io/f/abcdwxyz`).

Until you do, the form opens the visitor's email app with a pre-filled message to your address.

## Add a blog post

1. Copy `blog-capa-effectiveness.html`, rename it (for example `blog-my-topic.html`), and edit the title, date, and text.
2. In `blog.html`, copy the existing `<a class="card post-card">` block, then update the link and text.

## Optional: custom domain

1. Buy a domain from any registrar (usually $12-20 per year for a .com).
2. In **Settings > Pages > Custom domain**, enter it and save.
3. Add the DNS records GitHub lists (see docs.github.com/pages) at your registrar, then tick **Enforce HTTPS**.

## Get found on Google

- Create a Google Business Profile for the business.
- Add your live URL to Google Search Console and submit it.
- Link to the site from your email signature and any professional profiles you use.
- Publish a blog post every month or two on topics your clients search for.
