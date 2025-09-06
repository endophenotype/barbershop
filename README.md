# Barber Shop Website

**URL**: [https://marick.vercel.app/](https://marick.vercel.app/)

A modern, responsive website for a barbershop built with React, TypeScript, and Tailwind CSS. This project provides a professional online presence for barber services with features for booking appointments, showcasing the team, displaying services, and sharing customer testimonials.

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Service Booking**: Easy appointment scheduling system
- **Team Showcase**: Display barber profiles and expertise
- **Service Portfolio**: Visual gallery of haircuts and styles
- **Customer Testimonials**: Social proof and reviews section
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **TypeScript Support**: Strong typing for better code quality
- **Vite Build System**: Fast development and production builds

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **UI Components**: Radix UI
- **Linting**: ESLint
- **Package Manager**: pnpm (with fallback to npm)

## Project Structure

```
src/
├── assets/           # Image assets (barber photos, portfolio)
├── components/       # Reusable components
│   ├── ui/           # UI component library (Radix UI)
│   ├── BookingModal.tsx  # Appointment booking
│   ├── Header.tsx        # Site header
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services listing
│   ├── Team.tsx          # Team members
│   ├── Testimonials.tsx  # Customer reviews
│   └── ...              # Other components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
│   ├── Index.tsx        # Home page
│   └── NotFound.tsx     # 404 page
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`

## Deployment

The project can be deployed using `pnpm build`

