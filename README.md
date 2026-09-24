# Student Feedback Web Application

A simple web-based Student Feedback Application developed as a DevOps project.

The application allows students to enter their name, email, course, and feedback. The submitted feedback is then displayed on the webpage.

The project also implements automated testing and a CI/CD workflow using GitHub Actions.

---

## Features

- Student name input
- Email input and validation
- Course input
- Feedback submission
- Display submitted feedback
- Required-field validation
- Email format validation
- Automated test cases
- Continuous Integration using GitHub Actions
- Deployment using Render

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Git
- GitHub
- GitHub Actions
- Render

---

## Project Structure

```text
student-feedback-app/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── tests/
│   └── validation.test.js
│
├── validation.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
