This backend service for a Full-Stack Todo List App is built with **Express.js**, **Prisma**, and **MySQL**, using **TypeScript**. It provides RESTful APIs to manage tasks, with Docker support for containerization.

## Features
- REST API endpoints:
  - `GET /api/tasks` - Retrieve all tasks
  - `POST /api/tasks` - Create a new task
  - `PUT /api/tasks/:id` - Update an existing task
  - `DELETE /api/tasks/:id` - Delete a task
- Database management with Prisma ORM and MySQL (Dockerized)
- Error handling and input validation

## Prerequisites
- Docker (v20 or later)
- Node.js (v18 or later)
- Git


## Install depencies
```bash
npm install
```
## For database Run docker file
```bash
docker compose up -d
```
## Configure env file 
DATABASE_URL="mysql://todo:todo@localhost:3307/todo_app"
PORT=4000

## Initialize Database
Ensure MySQL is running locally.
Apply Prisma migrations:
```bash
npx prisma migrate dev
```

## Run the development server:
```bash
npm run dev
```







    
