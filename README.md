# 📝 Todo List Application – Advanced Git & DevOps Assignment

## 📘 Module
**Systems Administration & Maintenance**

---

## 👥 Group Information

- **Student 1:** **E.M.H.A.K. Ekanayaka**  
  **Student ID:** ITBIN-2313-0032  
  **Role:** DevOps Engineer  

- **Student 2:** **G.D.H. Devindee**  
  **Student ID:** ITBIN-2313-0136  
  **Role:** Full-Stack Developer  

---

## 📌 Project Description

This project is a **Todo List Web Application** developed as part of the *Advanced Git & DevOps Team Collaboration Assignment*.  
The project simulates a real-world DevOps environment by applying professional Git workflows, automated CI/CD pipelines, and cloud deployment.

The application allows users to:
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Manage tasks through a simple and responsive interface

Collaboration was achieved using feature branches, pull requests, code reviews, and merge conflict resolution following industry best practices.

---

## 🌐 Live Deployment

🔗 **Live URL:**  
https://<your-vercel-project-url>.vercel.app

> ⚠️ Replace this with your actual deployed URL before submission.

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript  
- Node.js (for tooling and CI/CD)  
- Git & GitHub  
- GitHub Actions  
- Vercel (Cloud Deployment)

---

## ✨ Features

- Add todo tasks
- Mark tasks as completed
- Delete tasks
- Clean and simple UI
- Responsive design
- Automated CI/CD deployment

---

## 🌿 Branch Strategy

The following branching strategy was used:

- `main` – Production-ready code  
- `develop` – Integration branch  
- `feature/*` – Individual feature branches  

### Feature Branches
- `feature/project-setup`
- `feature/todo-features`

All feature branches were merged into `develop` using pull requests and later merged into `main`.

---

## 🔁 CI/CD Pipeline

### Continuous Integration (CI)
- Triggered on pushes to `main`, `develop`, and `feature/*`
- Triggered on pull requests to `main` and `develop`
- Includes:
  - Code checkout
  - Node.js setup
  - Dependency installation
  - Build execution
  - Test execution

### Continuous Deployment (CD)
- Triggered automatically on push to `main`
- Deploys the application to **Vercel**
- Uses GitHub Secrets for secure authentication

---

## ⚠️ Merge Conflict Handling

An intentional merge conflict was created in the `README.md` file to demonstrate merge conflict resolution.

### Process:
1. Both team members modified the same section in separate feature branches.
2. A merge conflict occurred during pull request merging.
3. The conflict was resolved manually.
4. The resolution was committed and documented.

---

## 👤 Individual Contributions

### E.M.H.A.K. Ekanayaka – DevOps Engineer
- Repository creation and configuration
- Branch strategy implementation
- GitHub Actions CI pipeline setup
- GitHub Actions deployment workflow setup
- Vercel deployment configuration
- Merge conflict resolution
- Pull request reviews and final merges

---

### G.D.H. Devindee – Full-Stack Developer
- Todo List application development
- HTML structure and CSS styling
- JavaScript logic implementation
- Feature branch creation and commits
- Pull request creation and updates
- Documentation support

---

## ⚙️ Setup Instructions

### Prerequisites
- Git
- Node.js (v18 or higher)

### Installation
```bash
git clone https://github.com/<Amasha1009>/todo-app-devops-assignment.git
cd todo-app-devops-assignment
npm install
npm run build
