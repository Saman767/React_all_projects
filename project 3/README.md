# 🎲 Dice Game (React + Vite)

An interactive, logic-heavy **Dice Game** built with **React.js**, **Vite**, and **Styled Components**. This project focuses on managing game state flow, handling complex UI validations, and implementing dynamic CSS-in-JS styling.

---

## 🚀 Key Features

* **Dynamic Page Switching:** Single-page application navigation using conditional rendering without page reloads.
* **Score Tracking & Logic:** Dynamic score calculations based on correct/incorrect guesses (Adds die value on match, deducts 2 points on mismatch).
* **Selection Validation:** Built-in error handling that restricts dice rolling until a target number is selected.
* **Rules Toggle:** Expandable/collapsible rules overlay implemented via short-circuit evaluation.
* **CSS-in-JS (Styled Components):** Dynamic component styling with props and styled component inheritance.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **Build Tool:** Vite
* **Styling:** Styled Components (`styled-components`)
* **Icons & Assets:** Vector Assets & Custom PNGs

---

## 📖 Core Concepts Learned

1. **State Lifting:** Managing shared states (`score`, `selectedNumber`, `error`) in parent components and passing handlers to child nodes.
2. **Styled Components & Props:** Applying conditional CSS based on props (e.g., active number selection boxes changing color).
3. **Array Mapping (`.map()`):** Dynamically rendering number selector boxes from arrays.
4. **Validation Logic:** Short-circuiting user execution flows when required inputs are missing.
5. **State Resetting:** Clearing game state values cleanly to allow instant replays.

---

## 📁 Project Structure

```text
project 3/
├── public/
│   └── images/
│       ├── dice/
│       │   ├── dice_1.png
│       │   └── ...
│       └── img1.png.png
├── src/
│   ├── components/
│   │   ├── GamePlay.jsx
│   │   ├── NumberSelector.jsx
│   │   ├── RollDice.jsx
│   │   ├── Rules.jsx
│   │   ├── Startgame.jsx
│   │   └── TotalScore.jsx
│   ├── styled/
│   │   └── Button.js
│   ├── App.jsx
│   └── main.jsx
