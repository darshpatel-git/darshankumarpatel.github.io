# Dr. Darshankumar Patel — Academic Website

A responsive, static academic portfolio built with HTML, CSS and vanilla JavaScript. Designed for GitHub Pages with the custom domain `darshankumarpatel.com`.

## Files

- `index.html` — website content and page structure
- `styles.css` — responsive navy-and-white visual design
- `script.js` — mobile navigation and current-year footer
- `assets/favicon.svg` — DP site icon
- `CNAME` — custom domain configuration for GitHub Pages

## Before publishing — personalize these items

Search `index.html` for the following placeholders and replace them:

1. `YOUR-EMAIL@example.com` — your official academic email address.
2. `href="#" data-placeholder-link` — replace each with your real LinkedIn, Google Scholar, ORCID, Scopus and ResearchGate profile URLs.
3. Replace the DP portrait placeholder in the hero section with your professional photograph. A simple option is to add `assets/profile.jpg` and replace the `.portrait-placeholder` block with:
   `<img class="profile-photo" src="assets/profile.jpg" alt="Dr. Darshankumar Patel">`
   Then add `.profile-photo { width:100%; aspect-ratio:4/4.4; object-fit:cover; display:block; }` to `styles.css`.
4. Verify the exact official institutional name, current designation, qualification wording and dates.
5. Update the publications section with final author order, journal/conference name, year, volume, issue, pages and DOI/publisher URLs. Do not present a manuscript as published unless it has been accepted/published.
6. Confirm the project descriptions and repository links before making them public.
7. Add a downloadable CV PDF if desired, e.g. `assets/Darshankumar_Patel_CV.pdf`, and add a link in the About section.

## Publish using GitHub Pages

1. Sign in to GitHub and create a **new public repository** named `darshankumarpatel.github.io` (recommended for a user/organization site).
2. Upload all files and folders from this project to the repository root. The `index.html` file must be at the root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for the Pages deployment to finish. Your default site should be available at `https://darshankumarpatel.github.io/`.
6. In **Settings → Pages → Custom domain**, enter `darshankumarpatel.com` and save. The repository already includes a `CNAME` file.
7. At your domain registrar, configure DNS:
   - Apex/root (`@`) A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional AAAA records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` CNAME: `darshankumarpatel.github.io`
   Remove conflicting parking/forwarding records. DNS propagation can take time.
8. Return to **Settings → Pages** and enable **Enforce HTTPS** once GitHub makes it available.

Official instructions: https://docs.github.com/en/pages

## Important domain note

The custom domain is only a proposed domain until you register it and control its DNS. Check availability and purchase it through a reputable registrar. Do not add DNS records until you own or manage the domain.

## Updating the website

Edit `index.html`, `styles.css` or `script.js` in GitHub and commit your changes. GitHub Pages will rebuild the site automatically. You can also edit locally and upload the changed files.

## Privacy and academic integrity

This is a public website. Publish only information you intend to make public. Do not upload student personal data, unpublished confidential datasets, examination material or third-party copyrighted content without permission. Verify every academic claim and bibliographic entry before publication.
