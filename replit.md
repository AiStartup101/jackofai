# JackOfAI.com - Personal Brand Website

## Overview

This repository contains a modern, full-stack web application for JackOfAI.com, a personal brand website for a Melbourne-based AI entrepreneur. The application showcases professional services, thought leadership, and provides contact functionality for potential collaborators and investors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack TypeScript architecture with a clear separation between client and server code:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM (configured but may use in-memory storage initially)
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **Build System**: Vite for frontend bundling and development

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints under `/api/` prefix
- **Validation**: Zod schemas for request/response validation
- **Storage**: Abstracted storage interface with in-memory implementation (database-ready)
- **Development**: Vite integration for hot module replacement

### Database Schema
Two main entities are defined:
- **Contacts**: Stores contact form submissions (name, email, category, message)
- **Newsletters**: Manages email subscriptions with uniqueness constraints

### UI Component Structure
- **Landing Page**: Single-page design with smooth scrolling navigation
- **Sections**: Hero, About, Services, Insights, Community, Contact, Footer
- **Forms**: Contact form and newsletter subscription with validation
- **Responsive Design**: Mobile-first approach with breakpoint considerations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes validate input with Zod schemas
3. **Storage Operations**: Abstract storage interface handles data persistence
4. **Response Handling**: Standardized JSON responses with error handling
5. **UI Updates**: React Query manages cache updates and UI state

### Contact Form Flow
- User fills contact form → Zod validation → API call → Storage → Success/error toast

### Newsletter Flow
- User enters email → Validation → Duplicate check → Storage → Confirmation

## External Dependencies

### Core Framework Dependencies
- **React**: UI library with hooks and context
- **Express**: Web server framework
- **Drizzle ORM**: Type-safe database operations
- **TanStack Query**: Server state management
- **Wouter**: Lightweight routing

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component system

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast bundling for production

### Database Integration
- **Neon Database**: Serverless PostgreSQL (configured)
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **API Development**: Express server with automatic restart
- **Database**: Can run with in-memory storage or PostgreSQL

### Production Build
- **Frontend**: Static files built with Vite to `dist/public`
- **Backend**: Bundled with ESBuild to `dist/index.js`
- **Environment**: NODE_ENV=production with environment variables

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **Development**: Uses in-memory storage as fallback
- **Production**: Requires proper database connection

### Key Build Commands
- `npm run dev`: Development with hot reload
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Run production build
- `npm run db:push`: Deploy database schema changes

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar services with automatic build detection and environment variable configuration.