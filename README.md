# Password Reset Flow Application

This MERN stack application features user registration, login, forgot password, and password reset functionalities. It uses Bootstrap for responsive design and Nodemailer to send secure password reset emails.

## Features

- User registration
- User login
- Forgot password
- Reset password
- Email notifications for password reset

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer

---

## Deployed URL's:

- **Frontend**: [https://getciya7-password-reset.netlify.app/](https://getciya7-password-reset.netlify.app/)
- **Backend**: `https://password-reset-backend-292c.onrender.com`

---

## Usage

1. Register using a valid email address.
2. Log in with your registered credentials.
3. If you forget your password, click "Forgot Password" and enter your registered email to receive a reset link.
4. Check your email for the reset link, click on it, and set a new password.

---

## API Endpoints

- **Register**: `POST /api/register`
- **Login**: `POST /api/login`
- **Forgot Password**: `POST /api/forgot-password`
- **Reset Password**: `PUT /api/reset-password/:token`

---
