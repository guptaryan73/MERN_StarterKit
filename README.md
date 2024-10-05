# Full Stack MERN Web App Starter Kit

A modern, customizable starter template for building full-stack MERN (MongoDB, Express, React, Node.js) web applications.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)
- MongoDB (local instance or cloud service)

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/guptaryan73/fullstack_starterkit
   cd fullstack_starterkit
   ```

2. Install dependencies for frontend and backend separately:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

3. Set up environment variables:
   - Rename the `.env.example` file in the `backend` directory to `.env` and add your MongoDB URI:
     ```
     MONGODB_URI=your_mongodb_uri_here
     PORT=5002
     ```
   - Create a `.env` file in the `frontend` directory if needed for any frontend-specific variables.

4. Launch the application:
   ```bash
   npm start
   ```

   This will start both the frontend and backend concurrently.

5. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5002`