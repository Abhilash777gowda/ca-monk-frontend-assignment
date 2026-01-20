# CA Monk Blog Assignment

A modern, responsive blog platform built for finance professionals, featuring a premium design, dark mode support, and seamless authentication flows. This project was developed as a frontend assignment to replicate a specific design aesthetic and functionality.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8)

## 🚀 Features

-   **Premium UI/UX**: A polished interface matching the "CA Monk" brand aesthetic with glassmorphism effects, smooth transitions, and high-quality typography.
-   **Landing Page**: A dedicated Hero section with entrance animations and stats.
-   **Authentication System**:
    -   **Sign Up & Login**: Fully functional mock authentication using `localStorage`.
    -   **Profile Management**: User profile page with logout functionality.
    -   **Route Protection**: "Create Blog" feature is strictly restricted to authenticated users.
-   **Blog Management**:
    -   **Listing**: Categorized blog list with timestamps and icons.
    -   **Detail View**: Rich article view with cover images, author info, and social interactions (likes/shares).
    -   **Creation**: Form to add new blog posts (protected route).
-   **Dark Mode**: Global theme toggle (Light/Dark/System) with persistent state.
-   **Responsive Design**: Mobile-first approach ensuring a seamless experience across all devices.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), TypeScript
-   **Styling**: Tailwind CSS, Shadcn UI (Radix Primitives), Lucide Icons
-   **State Management**: React Context (Auth), TanStack Query (Data Fetching)
-   **Routing**: React Router v6
-   **Backend**: JSON Server (Mock API)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Abhilash777gowda/ca-monk-frontend-assignment.git
    cd ca-monk-frontend-assignment
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

You need to run both the frontend development server and the mock backend server.

1.  **Start the Mock Backend** (in a new terminal)
    ```bash
    npm run server
    ```
    *This runs `json-server` on port 3001.*

2.  **Start the Frontend App** (in the main terminal)
    ```bash
    npm run dev
    ```
    *This starts Vite on port 5173 (usually).*

3.  **Open your browser**
    Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Navbar, Footer, etc.)
│   ├── ui/             # Shadcn UI primitives (Button, Input, etc.)
├── context/            # Global state providers (AuthContext, ThemeProvider)
├── lib/                # Utilities and API functions
└── App.tsx             # Main application routing and layout
```

## 🔐 Auth Credentials

Since this project uses a mock backend with local storage persistence:
-   **Sign Up**: You can register with **ANY** name and email.
-   **Login**: Use the email you registered with.
-   **Profile**: Your session persists until you click "Log Out".

## 🎨 Design Decisions

-   **Component Architecture**: Extracted `Navbar` and `Footer` into a `MainLayout` to ensure consistency while keeping page logic clean.
-   **Hero Section**: Separated the Landing Page from the main Blog App to provide a distinct entry point.
-   **Performance**: Used `lazy` loading (conceptually) via route splitting and optimized asset delivery strategies.

---

**Developed by Abhilash** for the CA Monk Frontend Interview.
