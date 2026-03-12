# Backend Development Assignment — Day 6
**Batch: B90 | Date: March 12, 2026**
**Deadline: March 19, 2026**
**Total Marks: 100 + 10 Bonus**

---

## Topics Covered
- Express.js Setup & Application Structure
- MVC-Style Folder Architecture
- REST API Design
- Middleware (built-in & custom)
- JWT Authentication
- bcrypt Password Hashing
- Role-Based Access Control (RBAC)
- Environment Variables with dotenv

---

## Assignment Overview

Build a **Task Management REST API** from scratch using Node.js and Express.js. The API must support user **registration**, **login**, **JWT-based authentication**, and **role-based route protection**.

---

## Project Structure

Your project **must** follow this folder structure:

```
task-manager/
├── server.js
├── app.js
├── .env
├── package.json
├── controller/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   ├── isAuthorised.js
│   └── isAdmin.js
└── route/
    ├── authRoute.js
    └── taskRoute.js
```

---

## Tasks

---

### Task 1 — Project Setup (10 marks)

1. Initialize a new Node.js project using `npm init`.
2. Install the following packages:
   - `express`
   - `jsonwebtoken`
   - `bcrypt`
   - `dotenv`
   - `cors`
3. Install `nodemon` as a dev dependency.
4. Add the following scripts inside `package.json`:
   ```json
   "start": "nodemon server.js",
   "dev": "nodemon server.js"
   ```
5. Create a `.env` file with these variables:
   ```
   PORT=5000
   VERSION=1
   SECRET_KEY=mySuperSecretKey123
   ```

---

### Task 2 — App & Server Setup (10 marks)

**`app.js`**
- Create an Express application.
- Load environment variables using `dotenv`.
- Apply the `cors` middleware (allow all origins).
- Apply `express.json()` middleware.
- Apply `express.urlencoded({ extended: true })` middleware.
- Export the `app`.

**`server.js`**
- Import `app` from `app.js`.
- Mount routes:
  - Auth routes at `/api/v1/auth`
  - Task routes at `/api/v1/task`
- Start the server on `process.env.PORT`.
- Log `"Server is running on port <PORT>"` on start.

---

### Task 3 — Auth Controller (25 marks)

Create `controller/authController.js` with two functions:

#### 3a. `register` (12 marks)
- Accept `username`, `password`, and `role` from `req.body`.
- Validate that all three fields are present — return a `400` error if any are missing.
- Hash the password using `bcrypt.hashSync(password, 10)`.
- Store the user in a local **in-memory array** (no database needed):
  ```js
  const users = [];
  ```
- Return a `201` response with `{ message: 'User registered successfully', username }`.

#### 3b. `login` (13 marks)
- Accept `username` and `password` from `req.body`.
- Validate that both fields are present.
- Find the user in the `users` array by `username`. Return `404` if not found.
- Use `bcrypt.compareSync(password, user.hashedPassword)` to verify the password.
  - Return `401` if the password is wrong.
- On success, sign a JWT using `jwt.sign()`:
  ```js
  jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' })
  ```
- Return `200` with `{ message: 'Login successful', token }`.

> **Important:** The `register` and `login` functions must share the same `users` array within the same file.

---

### Task 4 — Auth Middleware (20 marks)

#### 4a. `middleware/isAuthorised.js` (12 marks)
Write a middleware function that:
1. Reads the `Authorization` header from the request.
2. Returns `401` if the header is missing.
3. Checks that the header format is `Bearer <token>`. Return `400` if the format is wrong.
4. Verifies the token using `jwt.verify(token, process.env.SECRET_KEY)`.
5. If valid, attaches the decoded payload to `req.user` and calls `next()`.
6. If the token is invalid or expired, returns `401` with `'Invalid or expired token'`.

#### 4b. `middleware/isAdmin.js` (8 marks)
Write a middleware function that:
1. Checks `req.user` is populated (set by `isAuthorised`).
2. Returns `403` if `req.user.role` is not `'admin'`.
3. Calls `next()` if the user is an admin.

---

### Task 5 — Task Controller (15 marks)

Create `controller/taskController.js` with an in-memory `tasks` array and these functions:

| Function       | HTTP Method | Description                                    | Marks |
|----------------|-------------|------------------------------------------------|-------|
| `getAllTasks`  | GET         | Return the full `tasks` array                  | 3     |
| `createTask`  | POST        | Add a new task `{ id, title, createdBy }` to the array | 5 |
| `deleteTask`  | DELETE      | Remove a task by `id` from `req.params`        | 7     |

- For `createTask`: validate that `title` is present in `req.body`. Use `req.user.username` as `createdBy`.
- For `deleteTask`: return `404` if the task is not found.

---

### Task 6 — Routes (10 marks)

#### `route/authRoute.js` (4 marks)
- `POST /register` → `register` controller
- `POST /login` → `login` controller

#### `route/taskRoute.js` (6 marks)
- `GET /all` → `getAllTasks` (protected: `isAuthorised`)
- `POST /create` → `createTask` (protected: `isAuthorised`)
- `DELETE /delete/:id` → `deleteTask` (protected: `isAuthorised` + `isAdmin`)

---

### Task 7 — API Testing (10 marks)

Test your API using **Postman** or **Thunder Client** and verify the following scenarios:

| # | Scenario | Expected Status |
|---|----------|----------------|
| 1 | Register a new user with role `user` | 201 |
| 2 | Register a new user with role `admin` | 201 |
| 3 | Login with the `admin` user | 200 + token |
| 4 | Access `GET /task/all` without a token | 401 |
| 5 | Access `GET /task/all` with a valid token | 200 |
| 6 | `POST /task/create` with a valid token | 200 |
| 7 | `DELETE /task/delete/:id` with a `user` role token | 403 |
| 8 | `DELETE /task/delete/:id` with an `admin` role token | 200 |
| 9 | Login with a wrong password | 401 |
| 10 | Access any route with an expired/invalid token | 401 |

---

## Submission Checklist

- [ ] Project runs without errors (`npm run dev`)
- [ ] All 6 tasks completed
- [ ] `.env` file is present with correct variables
- [ ] Passwords are **never** stored as plain text
- [ ] JWT is verified in the `isAuthorised` middleware
- [ ] `isAdmin` correctly blocks non-admin users
- [ ] All API scenarios from Task 7 pass
- [ ] Folder structure matches the required layout

---

## Marking Scheme

| Task | Marks |
|------|-------|
| Task 1 — Project Setup | 10 |
| Task 2 — App & Server | 10 |
| Task 3 — Auth Controller | 25 |
| Task 4 — Auth Middleware | 20 |
| Task 5 — Task Controller | 15 |
| Task 6 — Routes | 10 |
| Task 7 — API Testing | 10 |
| **Total** | **100** |

---

## Bonus (10 marks)

Implement a `GET /auth/me` route that:
- Is protected by `isAuthorised` middleware.
- Returns the currently logged-in user's `username` and `role` from `req.user`.

---

## Hints

- Use `req.body` to read POST data (make sure `express.json()` is applied in `app.js`).
- Use `req.params.id` to read URL parameters.
- Always call `next()` in middleware when the check passes.
- Never skip error handling — always return a meaningful HTTP status code.
- Use `process.env.SECRET_KEY` in both the controller (signing) and middleware (verifying).

---

**Deadline:** One week from today — March 19, 2026
## Submission Instructions

**Submit:** Zip your project folder (excluding `node_modules`) and upload to the class portal. Alternatively, push your code to GitHub and submit the repository link.
