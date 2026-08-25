# 🍕 Foody Zone (Full-Stack React + Node/Express)

A full-stack food search and filtering web application built using **React.js**, **Vite**, **Styled Components**, and a **Node.js/Express** backend server. This project demonstrates API integration, real-time client-side search indexing, and category filtering.

---

## 🚀 Key Features

* **Full-Stack Data Fetching:** Dynamic API consumption from a local Node.js server using `fetch` and `useEffect`.
* **Real-time Live Search:** Instant keyword-based filtering by food title/description with zero page reload.
* **Category Filtering:** Dynamic tab navigation to slice data by meal types (*Breakfast*, *Lunch*, *Dinner*, *All*).
* **Glassmorphic UI & Custom Styling:** Modern UI design with `styled-components`, CSS radial gradients, backdrop filters, and dynamic prop-based button highlights.
* **Global CSS Injection:** Clean layout resetting and font integration using `createGlobalStyle`.

---

## 🛠️ Tech Stack

### Frontend
* **Library:** React.js
* **Build Tool:** Vite
* **Styling:** Styled Components (`styled-components`)

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript

---

## 📖 Key Concepts Mastered

1. **API Handling & Async/Await:** Fetching network data from local ports using asynchronous JS.
2. **Dual State Management:** Maintaining baseline data (`data`) alongside mutated/filtered presentation data (`filteredData`).
3. **Optimized Search Indexing:** Case-insensitive string inclusion checking via `.toLowerCase().includes()`.
4. **Restructuring & Prop Passing:** Cleanly passing raw dataset arrays as props into sub-components (`SearchResult`).
5. **Server Image Serving:** Concatenating server origin paths (`BASE_URL`) with relative asset strings.

---

## 📁 Project Structure

```text
project 4/
├── app/                       # Frontend React Application
│   ├── public/
│   │   ├── bg.png
│   │   └── logo.svg
│   ├── src/
│   │   ├── components/
│   │   │   └── SearchResults/
│   │   │       └── SearchResult.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── server/                    # Backend Express API Server
    ├── src/
    │   └── index.ts
    ├── dist/
    └── tsconfig.json
