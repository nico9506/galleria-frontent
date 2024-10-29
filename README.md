# Galleria

Galleria is a sleek, high-performance web app for showcasing and selling paintings. Built with React, TypeScript, and powered by Vite, this application offers artists and gallery owners a streamlined, user-friendly platform for presenting and managing art collections online.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Art**: Users can explore a wide selection of paintings with high-quality images, descriptions, and prices.
- **Search and Filter**: Easy search and filtering by artist, style, and price range.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Cart and Checkout**: Users can add paintings to a cart and proceed to checkout.
- **User Accounts**: Secure login and registration for users to save their favorite paintings.
- **Admin Panel**: Gallery owners can add, update, and remove paintings from the inventory.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [CSS Modules/Sass/Tailwind CSS] (whichever is applicable)
- **State Management**: [Context API/Redux] (optional depending on project complexity)
- **Routing**: [React Router](https://reactrouter.com/)
- **API**: Custom REST API (for listing and selling paintings)
- **Authentication**: Firebase Auth/Auth0 (optional)

## Getting Started

### Prerequisites

- Node.js (>=14.0)
- npm or yar

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/nico9506/galleria-frontend.git
cd galleria-frontend
npm install
```

### Running the app

To start the app in development mode with Vite's fast build times:

```bash
npm run build
```

Vite will bundle and optimize the app for deployment in the dist folder.

### Previewing the Production Build

After building the app, you can preview it locally with:

```bash
npm run preview
```

## Folder Structure

```graphql
Galleria/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Shared UI components
│   ├── pages/         # Page components
│   ├── services/      # API and backend services
│   ├── types/         # Custom TypeScript types
│   ├── App.tsx        # Main app component
│   └── main.tsx       # App entry point
├── .gitignore
├── package.json
├── tsconfig.json      # TypeScript configuration
└── README.md
```
