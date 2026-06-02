# SEO Rank Tracker

A full-stack SEO toolkit that lets you **audit any website with AI** and **track Google keyword rankings over time**. Enter a URL to get a complete SEO report (scores, keyword density, prioritized issues with recommendations), or add keywords to monitor where your domain ranks on Google — refreshed automatically every day.

## Features

- 🔍 **AI-Powered SEO Audits** — Scrapes a fully rendered page (meta tags, headings, links, images, load time, content) via Browserbase + Playwright, then uses OpenAI to produce an overall score, category scores (SEO, performance, accessibility, best practices), top keywords, and 5–15 actionable issues sorted by severity.
- 📈 **Keyword Rank Tracking** — Searches up to 5 pages of Google results for each keyword and records where your domain ranks, with on-demand refresh and per-keyword history.
- ⏰ **Daily Automated Checks** — A cron job (6:00 AM) re-checks every active keyword and updates ranking history.
- 🔐 **Authentication** — JWT-based register/login; every user's analyses and keywords are private.
- 📊 **Dashboard & History** — View past audits, full reports, and rank-tracking detail pages.

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS 4, React Router 7, Axios, react-hot-toast |
| **Backend** | Node.js, Express 5, Mongoose (MongoDB), JWT + bcrypt, node-cron |
| **Scraping** | Browserbase (remote headless browser) + Playwright |
| **AI** | OpenAI API (structured JSON outputs) |
| **Deployment** | Vercel (both client and server include `vercel.json`) |

## Project Structure

```
SEO_rank_tracker/
├── client/                  # React + Vite frontend
│   └── src/
│       ├── pages/           # Home, Login, Dashboard, Analyze, Report, History,
│       │                    # RankTracker, RankDetail
│       ├── components/      # Navbar, ScoreGauge, IssueCard, ProtectedRoute, ...
│       └── context/         # Global app state (auth, API base URL)
└── server/                  # Express REST API
    ├── server.js            # App entry point
    ├── config/              # MongoDB connection
    ├── routes/              # /api/auth, /api/rank, /api/analysis
    ├── controllers/         # Route handlers
    ├── services/            # openaiService (AI audit), scraperService,
    │                        # rankTrackerService, keywordTrackingService
    ├── models/              # User, Analysis, KeywordTracking
    ├── middleware/          # JWT auth middleware
    └── cron/                # Daily rank-tracking job
```

## Getting Started

### Prerequisites

- Node.js 20.19+ (required by Mongoose 9 / MongoDB driver 7)
- A MongoDB database (e.g. [MongoDB Atlas](https://www.mongodb.com/atlas))
- An [OpenAI API key](https://platform.openai.com/api-keys)
- A [Browserbase](https://www.browserbase.com) API key

### 1. Clone & install

```bash
git clone <repo-url>
cd SEO_rank_tracker

# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

### 2. Configure environment variables

Copy the example files and fill in your values:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

**server/.env**

| Variable | Description |
|---|---|
| `PORT` | Server port (default `5000`) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing auth tokens |
| `OPENAI_API_KEY` | OpenAI key for AI SEO analysis |
| `BROWSERBASE_API_KEY` | Browserbase key for scraping & Google searches |

**client/.env**

| Variable | Description |
|---|---|
| `VITE_BACKEND_URL` | Backend base URL (e.g. `http://localhost:5000`) |

### 3. Run

```bash
# Terminal 1 — backend (with auto-reload)
cd server && npm run server

# Terminal 2 — frontend
cd client && npm run dev
```

The app runs at `http://localhost:5173` and the API at `http://localhost:5000`.

## API Overview

All routes except register/login require an `Authorization: Bearer <token>` header.

### Auth — `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Create an account |
| POST | `/login` | Log in, returns JWT |
| GET | `/user` | Get current user |

### SEO Analysis — `/api/analysis`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/analyze` | Start an audit for a URL (runs scrape + AI analysis in the background) |
| GET | `/list` | List your past analyses |
| GET | `/:id` | Get a full analysis report |
| DELETE | `/:id` | Delete an analysis |

### Rank Tracking — `/api/rank`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/add` | Track a keyword for a domain |
| GET | `/list` | List tracked keywords |
| GET | `/:id` | Get a keyword's rank history |
| POST | `/:id/refresh` | Re-check the rank now |
| PUT | `/:id/toggle` | Pause/resume daily tracking |
| DELETE | `/:id` | Stop tracking a keyword |

## How It Works

1. **SEO Audit** — `POST /api/analysis/analyze` immediately returns an analysis ID, then in the background: Browserbase spins up a remote Chromium session, Playwright loads the page and extracts ~30 SEO signals, and OpenAI (with a strict JSON schema) turns that raw data into scores, keywords, and recommendations. Poll `GET /api/analysis/:id` until the status is `completed`.
2. **Rank Check** — The rank tracker opens Google through Browserbase, walks up to 5 result pages (top 50 results), and looks for the target domain, recording position and history.
3. **Cron** — Every day at 6:00 AM the server re-checks all active keywords, with randomized delays between searches to avoid rate limiting.
