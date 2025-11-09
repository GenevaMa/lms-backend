![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Zod](https://img.shields.io/badge/zod-%233068b7?=for-the-badge&logo=zod&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)

# LMS Backend

A backend service for a Learning Management System (LMS) built using Node.js, Express, and MongoDB.  
It provides structured APIs for managing courses, users, authentication, and learning workflows, ensuring reliable data processing and smooth integration with the frontend.

---

## API Preview

Below is an overview of the main API groups included in this service:

```md
/auth
POST /signin → Sign in user
POST /payment → Handle payment

/courses
POST / → Create course
POST /upload → Upload course
GET /overview → Get course overview
GET /students → Get students enrolled in all courses

/students
GET / → Get all students
GET /detail → Get student detail
GET /by-course/:courseId → Get students by course ID
POST / → Create new student
PUT / → Update student
DELETE / → Delete student

/course-students
POST / → Add student to a course
PUT / → Remove student from a course
```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt (password hashing)

Development Tools

- Git & GitHub
- Postman
- Visual Studio Code
- MongoDB Compass / Atlas

## Features

- RESTful API architecture
- User authentication with JWT
- Role-ready structure (student, instructor, admin)
- Course and module management
- Enrollment and progress tracking
- Secure password hashing
- Field validation & error handling
- Environment variable–based configuration
- Scalable folder structure (controllers, routes, models, middleware)

## Live Demo

Coming soon

---

## Requirements

- Node.js 18+
- npm 8+ or pnpm 7+
  MongoDB local or MongoDB Atlas URI

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lms-backend.git

# Navigate into the folder
cd lms-backend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Envirovment Variables

create a .env file in the root directory :

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Running Server

```bash
npm run dev # Start development server with nodemon
npm start # Start production server
```

## Project Structures

```bash
lms-backend/
│
├── src/
│   ├── config/            # Database configuration & app setup
│   ├── controllers/       # Request handler logic
│   ├── middleware/        # Auth and error-handling middleware
│   ├── models/            # Mongoose schemas & models
│   ├── routes/            # All API route definitions
│   ├── utils/             # Helpers (tokens, validators, etc)
│   └── server.js          # Server entry point
│
├── package.json
├── .env.example
└── README.md
```

## Scripts

```bash
npm run dev     # Start development server
npm start       # Start production server
```

## Roadmap (Planned Improvements)

- Add full role-based access control (student/instructor/admin)
- Add course recommendation engine
- Add assignment & quiz endpoints
- Add progress analytics
- Add refresh tokens & session management
- Add Swagger/OpenAPI documentation
- Add request rate limiting and improved security

## Contributing

Contributions are welcome. Please open an issue or submit a pull request if you have improvements.
