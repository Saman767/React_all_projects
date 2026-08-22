

A modern component-driven landing page built with **React** and **Vite**. 

Rather than writing all code in a single file, this project follows industry-standard **Component-Driven Development (CDD)** principles, featuring clean modularization and feature-based folder organization.

---

## 🚀 Key Learnings & Skills Demonstrated

By building this project step-by-step from scratch, I mastered the following core React & Frontend concepts:

1. **Component-Driven Architecture:**
   - Moved away from monolithic single-file structures to breaking down the UI into clear, reusable functional components (e.g., `Navigation`, `HeroSection`).
   - Kept `App.jsx` clean, serving purely as a layout orchestrator.

2. **Co-location & File Organization:**
   - Organized components alongside their respective styles for scalability (`components/Nav.jsx` + `Nav.css`).
   - Built a modular folder structure that can easily scale to dozens of components in large-scale applications.

3. **Global CSS Variables & Design Tokens:**
   - Established global design rules in `App.css` using `:root` CSS variables (e.g., `--red`, `--gray`) and imported typography (`Poppins`).
   - Applied global CSS inheritance so component-level styles can consume global variables seamlessly without duplicating code.

4. **Asset Management:**
   - Learned the difference between Vite's `public/` directory static serving and `src/assets/` bundled imports.

5. **Practical Debugging & Troubleshooting:**
   - Identified and resolved real-world issues such as unlinked CSS stylesheets, missing imports, and property typos.

---

## 📂 Project Directory Structure

```text
src/
├── assets/             # Logos, brand assets, and icons
├── components/         # Independent React components
│   ├── Nav.jsx         # Navigation Bar component
│   └── Nav.css         # Component-specific styles
├── App.jsx             # Main App layout component
├── App.css             # Global CSS variables & body fonts
├── main.jsx            # Application entry point
└── index.css           # Base styles and resets


# 👟 Brand Landing Page (Nike / Brand Page)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://YOUR-NETLIFY-LINK.netlify.app)

👉 **Live Demo:** [Click Here to View Live Project] https://saman-react-project-01.netlify.app/
