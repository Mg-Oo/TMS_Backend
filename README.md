# Task Management Project Backend (NestJs + MongoDB)

## Overview

This project is a Task Management System backend built using NestJS and MongoDB. It provides a RESTful APIs for managing tasks and user authentication.

## API Endpoints with JWT authentication

### User APIs

- Register : `POST /auth/register`
- Login : `POST /auth/login`

### Task Management APIs

- Get all tasks : `GET /task`
- Create a new task : `POST /task`
- Update a task by ID : `PATCH /task/:id`
- Delete a task by ID : `DELETE /task/:id`
- Search tasks by title : `GET /task/search?title=some-title`

## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Install Node.js and npm. you can download from [nodejs.org](https://nodejs.org/).
- Install MongoDB compass. you can download from [mongodb.com](https://www.mongodb.com/try/download/compass).
- You have to running MongoDB compass running locally or have set up MongoDB Atlas.
  ### To run MongoDB compass locally
     ```sh
     Open MongoDB compass
     Paste URI (mongodb://localhost:27017/tms-app) and connect New connection
     Create Database (Database Name: "tms-app")
     Create Collections for "tasks" and "users"

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
   MONGODB_URI=mongodb://localhost:27017/tms-app
   JWT_SECRET=your_jwt_secret
   PORT=3001

4. Run the development server:

   ```sh
   npm run start:dev

## Deployment Instructions

1. Building for Production before deploy

    ```sh
    npm run build

2. Preview the Production Build

    ```sh
    npm run start:prod

3. Install Vercel Cli
      
     ```sh
     npm install -g vercel

3. Create a Vercel Project:

   ```sh
   vercel

4. Deploy

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
```

  -    dto: DTOs define data structures for transferring data between different parts of the application.
  -    interfaces: Interfaces define the structure of objects for type safety throughout the application.
  -    schemas: Schemas define the structure and validation rules for data stored in databases.
  -    controllers: Controllers handle incoming requests, define API endpoints, and manage HTTP request/response cycles.
  -    services: Services contain the application's business logic, handling data processing, database interactions, and operations requested by controllers.
  -    modules: Modules organize the application into cohesive units, grouping related components like controllers, services, and providers.
  -    app.module.ts: The app.module.ts file is the root module, orchestrating the application's structure by importing modules and defining global providers.
  -    main.ts: The main.ts file serves as the application's entry point, initializing the NestJS runtime and starting the server to handle incoming requests.
