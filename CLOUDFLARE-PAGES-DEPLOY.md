# Cloudflare Pages Deploy

This site is a static HTML site. GitHub is the source of truth, and Cloudflare Pages should sync from the GitHub repo for production deploys.

## Recommended setup: GitHub sync

1. Push this repo to GitHub.
2. In Cloudflare, go to Workers & Pages.
3. Create a Pages project and connect the GitHub repository.
4. Use these build settings:

- Project name: `scent-bazaar`
- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`

## Custom domains

In Cloudflare Pages, add these custom domains to the `scent-bazaar` project:

- `scentbazaar.co`
- `www.scentbazaar.co`

Use `https://scentbazaar.co/` as the canonical production domain.

## DNS and redirect

Set DNS for both the apex and `www` records through Cloudflare. Proxy both records.

Then create a Cloudflare redirect rule or bulk redirect:

```text
https://www.scentbazaar.co/* -> https://scentbazaar.co/$1
301 permanent redirect
preserve query string
```

Verify after DNS and certificate issuance:

```powershell
curl.exe -I https://www.scentbazaar.co/
curl.exe -I https://scentbazaar.co/
```

Expected result: `www` returns a 301 redirect to the apex domain, and the apex returns the site without a certificate warning.

## Optional manual deploy

Wrangler is kept as an optional fallback if a manual deploy is ever needed:

```powershell
npm run deploy
```
