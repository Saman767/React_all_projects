# 📞 Contact Us Page (React + Vite)

A modern, dynamic, and fully responsive Contact Page built with **React.js** and **Vite**. This project focuses on mastering React state management, form handling, component reusability, and modular styling.

---

## 🚀 Key Features

* **Interactive Form Handling:** Real-time state updates using the `useState` hook.
* **Reusable Components:** Modular `<Button />` component configured with custom `props` and variants (solid vs. outlined).
* **React Icons Integration:** Integrated clean visual indicators using `react-icons`.
* **CSS Modules:** Scoped component styling using `*.module.css` to prevent global class collisions.
* **Controlled UI Rerendering:** State updates seamlessly display submitted data directly on the UI without reloading the page.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **Build Tool:** Vite
* **Styling:** CSS Modules
* **Icons:** React Icons (`react-icons/md`, `react-icons/sl`)

---

## 📖 Core Concepts Learned

1. **State Management (`useState`):** Managing input states dynamically and capturing form inputs on submission.
2. **Form Event Prevention:** Using `event.preventDefault()` to stop automatic browser page reloads.
3. **Props & Destructuring:** Passing text, icons, and conditional styling flags (`isOutline`) to reusable components.
4. **CSS Module Architecture:** Importing styles as scoped JavaScript objects (`styles.className`).

---

## 📁 Project Structure

```text
project 2/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   ├── ContactHeader/
│   │   │   ├── ContactHeader.jsx
│   │   │   └── ContactHeader.module.css
│   │   └── Navigation/
│   │       ├── Nav.jsx
│   │       └── Nav.module.css
│   ├── App.jsx
│   └── main.jsx
