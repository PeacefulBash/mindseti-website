# Mindset.i website

Next.js, TypeScript, React, Tailwind CSS v4, Lucide. Fonts are installed through npm (Bricolage Grotesque, Figtree, Source Serif 4 italic, and Montserrat for the logo wordmark only), so nothing loads from a third-party font server.

## Run locally (PowerShell)

Requires Node.js 20 or newer.

```powershell
npm install
Copy-Item ".env.example" ".env.local"
npm run dev        # http://localhost:3000
```

Other commands: `npm run build`, `npm start`, `npm run typecheck`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/programmes` | Overview of the four programmes and the term-by-term view |
| `/programmes/student-motivation`, `/prefect-training`, `/teacher-team-building`, `/the-home-team` | One page per programme, generated from `content/programmes.ts` |
| `/whole-school` | The Whole-School Partnership |
| `/poetry` | Poetry and spoken word (separate audience) |
| `/about` | Belief, what every school receives, how working with us runs |
| `/request` | The single enquiry form |

## Adding real photographs

The site shows illustrated scenes until real photos exist. Save photos in `public/images/photos/` using these names (jpg, jpeg, webp or png) and they replace the illustrations automatically, with the same curved frames and glow:

`home`, `students`, `prefects`, `teachers`, `parents`, `poetry`

Portrait or 4:5 works best for `home`, `students`, `prefects`, `teachers` and `parents`. Use landscape only if the subject is centred. Compress to under about 300 KB each. Only use photographs with written consent from every learner, parent and adult shown.

## Where to edit things

| To change | Edit |
|---|---|
| Programme pages (names, facts, what schools receive) | `content/programmes.ts` |
| Homepage copy, terms, process, poetry occasions | `content/home.ts` |
| Schools visited, testimonials | `content/home.ts`. Both hide their sections while empty. |
| Colours and glow effect | `app/globals.css` |
| Curved header | `components/layout/Header.tsx` |
| Curved section dividers | `components/ui/Wave.tsx` |
| Illustrated scenes | `components/ui/Scene.tsx` |
| Logo | `components/ui/Logo.tsx`. Approximate redraw. Replace with the official SVG. |
| Contact details, form options | `lib/site.ts` and `.env.local` |

Rules baked into the design: no fabricated figures or claims, no prices on the site, no white text on light backgrounds (every section is a brand colour), no em dashes in copy, and "visited" (not "served") for schools until a track record is agreed.

## Enquiry form

`POST /api/proposal` validates on the server, has a honeypot field and a basic rate limit, and sends email through Resend when `RESEND_API_KEY`, `PROPOSAL_TO_EMAIL` and `PROPOSAL_FROM_EMAIL` are set. Without them, development mode logs the request to the console and production returns a friendly failure that points visitors to WhatsApp.

Production security notes:
- The rate limiter is in memory and best-effort. Use a shared store or the host's firewall before real traffic.
- Add a CAPTCHA (for example Cloudflare Turnstile) if spam appears.
- A content security policy is not set yet.
- The site stores no passwords or sessions, and has no admin area.
- The privacy policy must be reviewed by a qualified professional against Eswatini data protection requirements.

## Deploy

Any Node host that supports Next.js works. Set the variables from `.env.example` on the host, set `NEXT_PUBLIC_SITE_URL` to the live domain, then deploy.

## Not built yet

CMS connection, privacy and terms pages, favicon set, a full SEO and performance pass, and QA.
