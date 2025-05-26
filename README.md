# Event Buddy Frontend

A responsive event booking platform frontend built with Next.js (App Router), React, and Tailwind CSS.

---

## Features

- Browse upcoming and previous events
- Event details with full description and booking options
- Dummy authentication (signup/login) with role-based dashboards (user/admin)
- Responsive design optimized for desktop and mobile devices
- Client-side state management via React Context API
- Static JSON data used to simulate backend data

---

## Tech Stack

- Next.js 13+ (App Router)  
- React 18+  
- TypeScript  
- Tailwind CSS  
- Next/Image for optimized images  
- React Context for authentication state management  

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/event-buddy-frontend.git
cd event-buddy-frontend
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

* `/app` - Contains the Next.js App Router pages and layouts
* `/components` - React components like Navbar, Banner, EventCard, etc.
* `/context` - React Context for authentication and global state management
* `/public` - Static assets including images and JSON data

---

## Usage Notes

* Event data is currently sourced from a static JSON file (`/public/event.json`).
* Authentication is simulated and does not persist beyond session.
* No backend API integration is included; can be added in the future for full functionality.

---

## Deployment

Build and start for production:

```bash
npm run build
npm run start
```

Ensure your environment supports Next.js 13 App Router.

---