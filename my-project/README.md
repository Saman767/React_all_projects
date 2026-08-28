# 📇 Firebase Realtime Contact App

A responsive, full-stack contact management application built with **React**, **Tailwind CSS**, and **Firebase Cloud Firestore**. This application features real-time data synchronization, modal management via React Portals, custom hooks, form handling with validation, dynamic search filtering, and toast notifications.

---

## 🚀 Key Features

* **Real-Time CRUD Operations:**
  * **Create:** Add new contacts using dynamic forms.
  * **Read:** Live data streaming from Cloud Firestore using `onSnapshot` (no manual page refresh required).
  * **Update:** Dynamic modal pre-filled with existing contact data for instant editing.
  * **Delete:** Remove contacts directly from the Cloud Firestore database via unique document IDs.
* **Live Search Filtering:** Real-time, case-insensitive contact filtering driven by user input.
* **React Portals (`createPortal`):** Rendered modal overlays into a dedicated DOM node (`#modal-root`) to prevent UI clipping and manage `z-index` layering cleanly.
* **Formik & Yup Validation:** Structured form state management with schema validation to prevent empty or invalid entries from reaching the database.
* **Custom React Hook:** Encapsulated open/close modal state logic within a reusable `useDisclosure` hook.
* **UI Notifications:** Toast feedback pop-ups integrated via `react-toastify` for Create, Update, and Delete operations.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS, React Icons
* **Database Backend:** Firebase Cloud Firestore (NoSQL)
* **Form Management:** Formik
* **Schema Validation:** Yup
* **Notifications:** React Toastify

---

## 📂 Project Structure

```text
src/
├── assets/                  # Media files and SVGs
├── components/
│   ├── AddandUpdatecontact.jsx  # Dynamic Formik form modal for Add/Edit actions
│   ├── ContactCard.jsx          # Individual contact item component
│   ├── Hooks/
│   │   └── useDisclosure.js     # Custom Hook for Modal state handling
│   ├── Model.jsx                # Reusable React Portal Modal component
│   └── Nav.jsx                  # Header navigation layout
├── config/
│   └── firbase.js               # Firebase app initialization & Firestore setup
├── App.css
├── App.jsx                      # Main app component, search logic & Firestore stream
├── index.css                    # Global styles & Tailwind CSS directives
└── main.jsx                     # Entry point
