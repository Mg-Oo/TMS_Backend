# Task Management Backend

## Overview

This project is the backend for a Task Management system built using NestJS and MongoDB. It provides a RESTful APIs for managing tasks and user authentication.

## API Endpoints

### User Authentication API

- **Register a New User:** `POST /auth/register`
- **User Login:** `POST /auth/login`

### Task Management API

- **Create a New Task:**  `POST /tasks`
- **Update an Existing Task:**  `PATCH /tasks/:id`
- **Retrieve Tasks:**  `GET /tasks`
- **Delete a Task:**  `DELETE /tasks/:id`
- **Search Tasks by Title:**  `GET /tasks/search?title=<taskTitle>`

## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. You can download Node.js from [nodejs.org](https://nodejs.org/).
- You have installed MongoDB. You can download MongoDB compass from [mongodb.com](https://www.mongodb.com/try/download/community).
- You have to running MongoDB compass running locally or have set up MongoDB Atlas.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Mg-Oo/TMS_Backend.git
   cd TMS_Backend

2. Install the dependencies:

   ```sh
   npm install

3. Create a .env file in the root directory and add the following environment variables:

   - Run cmd to get JWT_SECRET key
       ```sh
       node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

   ```sh
   MONGODB_URI=mongodb://localhost:27017/task-management-app
   JWT_SECRET=your_jwt_secret
   PORT=3001

4. Run the development server:

   ```sh
   npm run start

## Deployment Instructions

1. Create a Vercel Project:

   ```sh
   vercel

2. Deploy

   ```sh
   vercel --prod

## Project Structure

```plaintext
├── src
│   ├── auth
│   │   ├── dto
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── jwt.strategy.ts
│   ├── tasks
│   │   ├── dto
│   │   ├── interfaces
│   │   ├── schemas
│   │   ├── tasks.controller.ts
│   │   ├── tasks.module.ts
│   │   ├── tasks.service.ts
│   ├── users
│   │   ├── interfaces
│   │   ├── schemas
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   ├── app.module.ts
│   ├── main.ts
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
