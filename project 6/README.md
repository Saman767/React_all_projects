# Crypto Dashboard (Project 6) 🚀

A modern, responsive, and feature-rich **Cryptocurrency Dashboard** built with **React**, **Vite**, and **Chakra UI v3**. This application allows users to monitor their portfolio, track market trends, review recent transactions, and interact with support options seamlessly.

---

## 📸 Key Features

- **Portfolio Overview:** Real-time summary of total portfolio value and localized wallet balances (in PKR).
- **Price Trends & Graphs:** Interactive tabbed interface (`1H`, `1D`, `1W`, `1M`) to view cryptocurrency fluctuations.
- **Transactions Page:** Filterable transaction logs (`All`, `Deposit`, `Withdraw`, `Trade`) formatted in local currency structure.
- **Support & Contact Form:** Responsive support section featuring interactive contact forms, meeting schedulers, and live chat cards.
- **Responsive Layout:** Adaptive sidebar and drawer navigation designed for mobile, tablet, and desktop viewports.
- **Chakra UI v3 Integration:** Modern compound UI architecture using `Card.Root`, `Table.Root`, `Tabs.Root`, and custom theme tokens.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Framework:** React (Vite)
- **UI Component Library:** Chakra UI v3
- **Routing:** React Router DOM (v6+)
- **Icons:** React Icons (`react-icons/ai`, `react-icons/bs`, `react-icons/io`, `react-icons/rx`)
- **Localization:** PKR (Rs.) Currency Adaptation

---

## 📁 Project Structure

```text
project-6/
├── public/
│   └── images/          # Static SVG assets & graph images
├── src/
│   ├── assets/          # Project media assets
│   ├── Chakra/          # Custom styled components
│   ├── components/      # Shared layout components (TopNav, SideNav, SideDrawer, DashboardLayout)
│   ├── Pages/
│   │   ├── Dashboard/   # Portfolio, PriceSection, Recent Transactions & InfoCards
│   │   ├── Support/     # Support main page, ContactCard & SupportCard
│   │   └── Transaction/ # Transaction page & TransactionTable
│   ├── App.jsx          # Route configuration with createBrowserRouter
│   ├── main.jsx         # Entry point with RouterProvider & Chakra Provider
│   └── index.css
├── package.json
└── vite.config.js
