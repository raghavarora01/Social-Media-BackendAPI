# Social Media Backend API

This is a backend API for a social media application. It provides user authentication, post management, likes, comments, and follow relationships. The project is deployed and available at:

**Base URL**: [https://social-media-backendapi.onrender.com](https://social-media-backendapi.onrender.com)

## Features

- **User Authentication**
  - Register and login using secure JWT-based authentication.

- **Post Management**
  - Create, retrieve, update, and delete posts.
  - Fetch posts by username or post ID.

- **Likes**
  - Add and remove likes from posts.
  - Retrieve the total number of likes for a post.

- **Comments**
  - Add and delete comments for posts.

- **Follow Relationships**
  - Follow and unfollow users.
  - Retrieve the list of followers and followees.

## Technologies Used

- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables Management**: dotenv
- **Database Connection**: mysql2
- **Utilities**:
  - `bcrypt`: For password hashing.
  - `cookie-parser`: To handle cookies.
  - `nodemon`: For development server auto-restarts.

## API Endpoints

### Authentication

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/auth/register`   | Register a new user.       |
| POST   | `/api/auth/login`      | Log in an existing user.   |

### Posts

| Method | Endpoint                   | Description                           |
|--------|----------------------------|---------------------------------------|
| POST   | `/api/post/createpost`     | Create a new post (Authenticated).    |
| GET    | `/api/post/fetchpost`      | Fetch all posts.                      |
| GET    | `/api/post/byusername`     | Fetch posts by username.              |
| GET    | `/api/post/byId`           | Fetch a post by ID.                   |
| PATCH  | `/api/post/updatePost`     | Update an existing post.              |
| DELETE | `/api/post/deletepost`     | Delete a post.                        |

### Likes

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/likes/addlike`   | Like a post.               |
| DELETE | `/api/likes/unlike`    | Unlike a post.             |
| GET    | `/api/likes/totallikes`| Get total likes for a post.|

### Comments

| Method | Endpoint                 | Description                     |
|--------|--------------------------|---------------------------------|
| POST   | `/api/comments/addcomment`| Add a comment to a post.       |
| DELETE | `/api/comments/deletecomment`| Delete a comment from a post.|

### Follow Relationships

| Method | Endpoint                 | Description                      |
|--------|--------------------------|----------------------------------|
| POST   | `/api/follow/addRelation`| Follow a user.                  |
| GET    | `/api/follow/getAllRelation`| Get all follow relationships. |
| DELETE | `/api/follow/unfollow`   | Unfollow a user.                |

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. npm install

## 3. .env
MYSQL_ADDON_HOST=your_mysql_host
MYSQL_ADDON_USER=your_mysql_user
MYSQL_ADDON_PASSWORD=your_mysql_password
MYSQL_ADDON_DB=your_database_name
MYSQL_ADDON_PORT=your_mysql_port
SECURITY_KEY=your_jwt_secret
## 4.Start the server locally:
 
npm start
