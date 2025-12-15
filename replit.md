# JackOfAI.com - Personal Brand Website

## Overview

This repository contains a modern, full-stack web application for JackofAI.com, a creative technology studio focused on building small, calm AI applications (ChristmasPulse and FamilyPulse) that support reflection, celebration, and everyday connection.

**Domain**: jackofai.com  
**Production URL**: https://jackofai.com

## Recent Changes (December 2025)

✅ **Complete Landing Page with 10-Page Site Structure**
- Modern glassmorphism design with dark theme (slate-950 gradient)
- Aurora-style animated background effects (cyan, emerald, rose gradients)
- Glass-card styling with backdrop-blur and soft-glow shadows
- Hero section with clarity line about "small, calm products"
- Products section (ChristmasPulse & FamilyPulse)
- Current priority needs strip with pulsing green indicator
- Talent & Freelancers section with 4-card grid layout
- Early Adopters, Investors, Founder Note, Footer sections
- Newsletter signup component for email capture
- Mobile-responsive hamburger menu navigation

✅ **10 Pages Complete**
- Home (landing page)
- About
- Opportunities (with current priority needs)
- Early Access
- Founder
- Press
- Privacy Policy
- Terms & Conditions
- Cookie Notice
- AI Disclaimer

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack TypeScript architecture:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM (uses in-memory storage by default)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend bundling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom glassmorphism effects

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints under `/api/` prefix
- **Validation**: Zod schemas for request/response validation
- **Storage**: In-memory storage (database-ready)

### Database Schema
- **Contacts**: Stores contact form submissions (name, email, category, message)
- **Newsletters**: Manages email subscriptions with uniqueness constraints

### Contact Information
- Email: hello@jackofai.com
- Phone: +61 426 996 009
- Social: LinkedIn, Instagram, YouTube, GitHub (all @jackofai)

### Product Domains
- ChristmasPulse: christmaspulse.com
- FamilyPulse: familypulse.live

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes validate input with Zod schemas
3. **Storage Operations**: Abstract storage interface handles data persistence
4. **Response Handling**: Standardized JSON responses with error handling

## Key Build Commands
- `npm run dev`: Development with hot reload
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Run production build
- `npm run db:push`: Deploy database schema changes
