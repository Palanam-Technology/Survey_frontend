# 🌐 Login + Survey Form

This is the **frontend** of a MERN (MongoDB, Express, React, Node.js) stack project that comprises of a Login, SignUp and Survey Form. It is built using **React** and connects to a Node.js/Express backend to manage authentication, survey forms, and session handling.

---

## ✨ Features

- Responsive and modular React components
- Login and Signup with form validation
- Forgot and Reset Password flows
- Survey form with conditional logic
- Integration with backend APIs via Axios
- Phone input validation with `react-phone-number-input`
- Routing with React Router
- Country-state dropdown using public API

---

## 📁 Folder Structure
```bash
Survey_frontend/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Images and static assets
│ ├── components/ # All reusable React components
│ │ ├── LoginModal.js
│ │ ├── SignupPage.js
│ │ ├── ResetPasswordPage.js
│ │ ├── SurveyForm.js
│ │ └── ForgotPassword.js
│ ├── App.js
│ ├── index.js
│ └── App.css / index.css
├── .env
├── package.json
└── README.md
---
```
---
## 🧑‍💻 Technologies Used

- React.js
- React Router DOM
- Axios
- React Phone Number Input
- Tailwind CSS

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-frontend-repo>.git
cd <your-frontend-repo>
```
### 2. Install Dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### 3. Run the app
```bash
npm start
```
---
