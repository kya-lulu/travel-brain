# Travel Brain — Session Handoff

**Date:** April 10, 2026
**Owner:** Terry Lin (terrylin0817@gmail.com)
**Site:** https://tamlintravel.world

---

## Where Are The Files?

All files live in **Google Drive** on Terry's Mac:

```
/Users/terry/Google Drive/My Drive/AI/Travel/travel-brain-deploy/
```

This is the **git repo** (`kya-lulu/travel-brain`) that auto-deploys to Vercel on push.

In Cowork, the same folder is mounted at:
```
/sessions/*/mnt/AI/Travel/travel-brain-deploy/
```

**There is also an older folder `travel-brain/` (no `-deploy`) — ignore it. The `-deploy` folder is the source of truth.**

---

## How To Deploy

```bash
cd "/Users/terry/Google Drive/My Drive/AI/Travel/travel-brain-deploy"
git add -A
git commit -m "your message"
git push
```

Vercel auto-deploys from the `main` branch. No manual Vercel CLI needed.

**If git complains about index.lock:**
```bash
rm "/Users/terry/Google Drive/My Drive/AI/Travel/travel-brain-deploy/.git/index.lock"
```

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom theme (warm cream: bg=#faf8f5, accent=#c45d3e terracotta)
- **Fonts:** Cormorant Garamond (display), DM Sans (body), DM Mono (mono)
- **Icons:** Lucide React (no emojis)
- **Images:** Unsplash URLs
- **Hosting:** Vercel (team: team_Bh0plANtzyRxM3I4Ouz9oGtn, project: prj_OZGGNYU8x2Pp99JkpRa11S3TXzv1)
- **Domain:** tamlintravel.world (DNS on Cloudflare, nameservers: bristol.ns.cloudflare.com, kianchau.ns.cloudflare.com)
- **GitHub:** github.com/kya-lulu/travel-brain (public repo)

---

## Security (Two Layers)

### Layer 1: Next.js Password Gate
- `src/proxy.ts` — intercepts all requests, checks for `tl-travel-auth` cookie (renamed from `middleware.ts` for Next.js 16)
- `src/app/login/page.tsx` — password entry page
- `src/app/api/auth/route.ts` — validates against `SITE_PASSWORD` env var, sets httpOnly cookie (30 days)
- **Env var `SITE_PASSWORD` must be set in Vercel** (Settings → Environment Variables)

### Layer 2: Cloudflare Access (Zero Trust)
- Application: "TL Travel" on tamlintravel.world
- Team name: tamlin
- Allowed emails: terrylin0817@gmail.com, terrylin921@gmail.com, tlinwharton@gmail.com, janelle.tam@gmail.com
- Sends one-time code to email before site loads
- **Note:** Policy may show "0 policies assigned" in Cloudflare UI but the redirect IS working (verified via web fetch — returns 302 to tamlin.cloudflareaccess.com)

### Confirmation codes are shown in full (unmasked) — site is protected.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/data/trips.ts` | **All trip data** — flights, hotels, itinerary, intel, award tips |
| `src/app/trips/[slug]/page.tsx` | Trip detail page — timeline, inline flights/hotels, intel, gallery |
| `src/app/page.tsx` | Homepage — trip card grid with status badges |
| `src/app/layout.tsx` | Root layout — sticky header, nav, footer |
| `src/app/globals.css` | Light theme CSS, animations |
| `src/app/icon.svg` | Favicon — terracotta globe with "TL" initials |
| `src/proxy.ts` | Password protection (Next.js 16 proxy; formerly middleware.ts) |
| `src/app/login/page.tsx` | Login page |
| `src/app/api/auth/route.ts` | Auth API route |

---

## Data Model (trips.ts)

```typescript
interface Trip {
  slug, title, subtitle, region, country, dates, month, year,
  status: 'booked' | 'partially_booked' | 'needs_action' | 'planning' | 'decision_needed' | 'canceled',
  statusLabel, travelers, heroImage,
  flights: Flight[], hotels: Hotel[], actionItems: ActionItem[],
  intel: IntelSection[], awardTips: AwardTip[], itinerary: ItineraryDay[],
  options?: { name, description }[]
}

interface Flight {
  segment, date (ISO), route, time?, airline?, aircraft?, cabin?,
  confirmation?, status, notes?
}

interface Hotel {
  property, location, checkIn?, checkOut?, program?, status, notes?, cost?
}
```

---

## Current Trips (7 total)

1. **safari-apr-2026** — Greater Kruger Safari (April 12–29)
   - 4 travelers: Terry Lin, Janelle Tam, Dorothy Fong, Kam Chiu Tam
   - 9 flight segments (Terry/Janelle ORD→LHR→JNB→HDS, return JNB→FRA→SEA; Parents YYZ→FRA→JNB, return JNB→FRA→YYZ)
   - BA outbound (Alaska Mileage Plan), Condor return, Airlink regional
   - Hotels: Shindzela Tented Camp, Last Word Kitara (Preferred Points)
   - Award tips updated: Alaska MP (not Virgin Atlantic), Kitara on Preferred Points

2. **mobulas-may-2026** — Mobula Ray Expedition, Sea of Cortez (May 26–31)
   - 2 travelers, Alaska Airlines flights, Park Hyatt Cabo

3. **stans-aug-2026** — Horse Trekking in the Stans (July 31 – Aug 12)
   - Turkish Airlines Business SEA→IST→FRU, return needs booking
   - Hero image: Kyrgyzstan mountains (photo-1506905925346-21bda4d32df4)

4. **iop-sep-2026** — Indonesia & Taipei diving (Sept 24 – Oct 13)
   - Terry solo, complex multi-leg routing through Indonesia
   - Singapore Airlines, Garuda, TransNusa, Air France, EVA Air

5. **korea-oct-2026** — South Korea, Janelle solo (October 2026, planning)

6. **australia-nov-2026** — Australia & Fiji (Nov 13–25)
   - AA→Qantas outbound, Fiji Airways return

7. **singapore-maldives-dec-2026** — Holiday trip (Dec 24+, planning)

---

## UI Architecture

### Integrated Timeline
Flights and hotels are **embedded inline within the day-by-day itinerary** — NOT in separate sections. The `isoMatchesDay()` helper function matches ISO dates from flights/hotels to itinerary day labels (handles formats like "April 21", "Aug 7–11", "Sept 28 – Oct 8").

Each itinerary day card shows:
- Day label and description text
- Matching flight cards (route, time, airline, aircraft, cabin, confirmation, status)
- Hotel check-in / check-out cards

The standalone Flights and Hotels sections were **removed** — all data is in the timeline.

### Other Sections on Trip Detail Page
- Hero image (full-width Unsplash)
- Header with date/status/travelers chips
- Day-by-day itinerary (with inline flights/hotels)
- Cinematic image breaks
- Photo gallery strip
- Action items
- Destination intelligence (magazine layout with ambient images)
- Award tips
- Options (for decision_needed trips)

---

## Past Issues & Lessons

1. **Always use `git add -A`** — The repo was once out of sync because only specific files were added. This reverted the live site to an old dark theme. Always add everything.
2. **Git lock files** — Google Drive syncing sometimes creates stale `.git/index.lock` files. Delete them with `rm` before committing.
3. **Stans hero image** — Was showing Singapore photo. Fixed to Kyrgyzstan mountains (photo-1506905925346-21bda4d32df4). If it breaks again, check both `page.tsx` and `trips/[slug]/page.tsx`.
4. **No build testing in sandbox** — The Cowork VM can't run `next build` (no network, wrong architecture). Use `npx tsc --noEmit` for type checking instead.

---

## Cloudflare DNS Records

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | tamlintravel.world | 76.76.21.21 (Vercel) | Proxied |
| CNAME | www | 4d430f4d6a3c6b9e.vercel-dns-017.com | Proxied |
| CNAME | _domainconnect | _domainconnect.domains.squarespace.com | Proxied |
| TXT | _dmarc | v=DMARC1; p=reject | DNS only |
| TXT | _domainkey | v=DKIM1; p= | DNS only |
| TXT | tamlintravel.world | v=spf1 -all | DNS only |

Domain registered via Google Domains (migrated to Squarespace). Nameservers now point to Cloudflare.
