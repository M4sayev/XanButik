## 📑 Table of Contents
- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
  - [Ecommerce](#-ecommerce)
    - [Product Page Features](#-product-page-features)
    - [Custom Hooks & Utilities](#-custom-hooks--utilities)
  - [Gamification & Tap-to-Earn](#-gamification--tap-to-earn-game)
  - [Fully Custom Design](#-fully-custom-design)
  - [Accessibility & UX](#-accessibility--ux-enhancements)
  - [Custom Hooks & Utilities](#-custom-hooks--utilities)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [License](#-license)

# 🛍️ Ecommerce Website + Tap-to-Earn Gamification
---

A modern React-based ecommerce web application with product listings, discounts, wishlist, cart, checkout flow, and now an interactive tap-to-earn coin system with bombs and freeze mechanics. Built with React Router, React Toastify, and interactive components like sliders, maps, carousels, and gamified mini-games.

## 📖 About the Project
This project was inspired by my brother’s menswear shop. Long before I knew how to code, I thought it would be amazing to learn programming by building a digital version of our shop.

The UI/UX design, layout, and branding were completely created by me. All static assets were created to give the site a realistic feel.

**New Gamification:** Users can now earn gold and silver coins over time, avoid bombs that decrease coins, and tap freeze coins to pause the timer. This adds an interactive mini-game layer to the shopping experience.

Building this project allowed me to learn React, Vite, React Router, interactive UI components like carousels, countdowns, maps, and now game logic with timers and coin mechanics.

⚠️ *We don’t claim the brands are original or ours — this project is for educational and portfolio purposes only.*

---

## 🚀 Live Demo

🔗 [View Live on Vercel](https://xanbutik-git-main-msayev02-gmailcoms-projects.vercel.app)

---

## 🎮 Tap-to-Earn Game Demo

Check out the gameplay for the tap-to-earn mini-game, including gold & silver coins, bombs, and freeze mechanics:

<p align="center">
  <img src="./src/assets/game/game-demo.gif" alt="Game Demo" />
</p>

---

## ✨ Features

### 🛍️ Ecommerce

- 🔎 Browse products with discounts  
- 🛒 Add to cart, wishlist, and manage items  
- 🔔 Toast notifications for user actions  
- 🎨 Responsive and modern UI  
- ⭐ Product ratings & reviews  
- 📍 Location features (Google Maps + Leaflet integration)  
- 🎞️ Product carousels with Swiper  
- ⏳ Countdown timers for deals  
- 🖼️ Product page gallery with thumbnails and mobile swiper  
- 🎨 Size & color selectors with toggle behavior  
- 🛍️ Dynamic discount calculation and product price display  
- ⭐ Add & view reviews with focus-trapped modal forms  

### 🕹️ Store Architecture & UX
The store page was built to feel like a real modern ecommerce experience — dynamic, responsive, and accessible.  

#### 🧱 Core Components
- **FilterButtonDesktop** — Multi-filter dropdown with category-based selections (color, size, brand, etc.)  
- **PriceRangeDropdown** — Range slider using `react-range-slider-input`, updating live via React context  
- **SortDropdown** — Sorts products by relevance, date, or price with ARIA-compliant listbox roles  
- **Pagination** — Responsive pagination system adapting to screen width and total pages  
- **HeaderStore** — Includes animated hero banner, search with debounce, and intersection-based fade-in effects  
- **Product Card** — Interactive preview with hover image cycling, sale badges, wishlist toggle, and “quick add to cart” dropdown  
- **SelectorsDropdown** — Focus-trapped popup for selecting color/size before adding to cart  

#### 🧠 Smart UI Logic
- Debounced search (`50ms`) for real-time filtering without lag  
- Dynamic dropdown alignment using `ref` + bounding box detection (automatically flips dropdowns left/right using `dropdown-left` to prevent viewport overflow)  
- Local state + context synchronization for filters, sorting, and pagination  
- `useRef` and controlled intervals for hover image carousels  
- Optimized rendering with memoized callbacks and conditional mounts  

#### ♿ Accessibility & Usability
- All dropdowns and modals use custom hooks:
  - `useTrapFocus` to lock focus inside dropdowns  
  - `useEscapeKey` to close popups via keyboard  
- ARIA roles: `role="listbox"`, `role="option"`, `aria-expanded`, `aria-selected`, etc.  
- Visual keyboard focus indicators and live region updates for screen readers  

#### 💡 Design Philosophy
The goal was to create a shopping interface that feels responsive, natural, and smooth — from hover animations and adaptive pagination to accessible filtering interactions.

#### 📦 Product Page Features
- Image gallery with thumbnail selection and mobile swiper.
- Size and color selectors with active state.
- Product CTA with:
  - Add to cart (with size/color validation)
  - Add to wishlist
  - Star rating and reviews modal with add-review form

#### ⚙️ Custom Hooks & Utilities
- `useTrapFocus` — locks focus inside modals or dropdowns for accessibility
- `useEscapeKey` — closes popups when Escape key is pressed
- `useWishlist` — manages wishlist state and toggle functionality
- `useForm` — handles form state and validation, with automatic error clearing

---

### 🕹️ Gamification & Tap-to-Earn Game

The app now includes an interactive tap-to-earn mini-game and a coupon system that automatically resets using the `use-timed-reset-state` React hook. These features add fun, engagement, and rewards for users.

#### 🎮 Game Mechanics
- 💰 **Coins:** Gold and silver coins appear during the game. Tap to collect and increase score.  
- 💣 **Bombs:** Avoid bombs! Tapping a bomb decreases your coins.  
- ❄️ **Freeze Coins:** Tap freeze coins to pause the game timer temporarily.  
- ⏱️ **Daily Reset:** The game automatically resets every day for a fair daily start.  

#### 🎟️ Coupon System
- 🗓️ **Weekly Reset:** Coupons refresh every Monday automatically.  
- ♻️ **Automatic Refresh:** Users receive new coupons without manual input.

#### 🧠 Game Logic Architecture
- Coordinate-based mapping (`Map()`) manages coins, bombs, and freeze items in real time  
- Random spawn points, rectangle intersection checks prevent overlap  
- Object lifetimes controlled via timers for smooth gameplay  
- State and refs combined to minimize re-renders and ensure performance  

#### ⏳ Timer System
- Real-time timer tracks gameplay duration  
- Pauses automatically during freeze states  
- Dynamic UI colors & accessibility integration  

#### 💱 Coin Exchange UI
- Interactive HUD for exchanging coins via dropdowns  
- Full keyboard accessibility & ARIA roles  

#### 💾 Persistent State
- Coins/game progress and coupons stored in `localStorage` for seamless experience

**Example Usage with `use-timed-reset-state`:**

```javascript
import useTimedResetState from "use-timed-reset-state";

// Track if game has been played today 
const [isGamePlayedToday, setIsGamePlayedToday] = useTimedResetState(
    false,
    { interval: "day" },
    "gameplayed"
);

// Reset coupons every Monday at 00:00
const [coupons, setCoupons] = useTimedResetState(
    defaultCoupons,
    {
      interval: "week",
      dayOfWeek: 1,
      resetAtHours: 0,
      resetAtMinutes: 0,
    },
    "coupons"
);
```

Benefits

* Gamifies shopping experience and encourages engagement.

* Automatic resets ensure fairness and recurring interaction.

* Persistent state guarantees smooth experience even after closing the app.

---

### 🎨 Fully Custom Design

- Full custom design made from scratch

- Svg designs for silver/gold/frozen coins, bombs using Boxy Svg, Figma

- Responsive layouts for desktop, tablet, and mobile

- Modern, interactive, and clean interface

- Custom icons, buttons, and visual assets

---

## 🔒 Accessibility & UX Enhancements:

All popups, dropdowns, and HUD interactions use custom React hooks for improved usability and accessibility:

- `useTrapFocus`: Keeps keyboard focus inside modals and dropdowns to ensure accessible navigation.  
- `useEscapeKey`: Allows closing popups and dialogs with the Escape key.  
- Click-outside detection for dismissing active menus and confirmations.  
- ARIA roles and live regions (`aria-live`, `role="timer"`, etc.) improve screen reader support.  

These features make the app more inclusive, intuitive, and keyboard-friendly across devices.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite (for fast dev/build), React Router DOM, React Hook Form, CSS

- **UI & UX**: Swiper (carousels), React Icons, React Spinners, React Toastify, React Intersection Observer, React Scroll Parallax

- **Utilities**: React Rating + Rating Stars, React Countdown, React Range Slider Input, use-debounce

- **Maps & Location**: Leaflet

- **Gamification & State Management**: use-timed-reset-state (any interval and time (daily/weekly in my case) automatic resets), React state & hooks (coins, bombs, freeze logic), LocalStorage persistence

---

## 📦 Installation

Clone the repo:

git clone https://github.com/M4sayev/ecommerce-app.git
cd ecommerce-app


Install dependencies:

npm install


Run the development server:

npm run dev


Build for production:

npm run build


Preview production build locally:

npm run preview

---

## 📸 Screenshots

<p align="center"> 
    <img width="1347" height="702" alt="image" src="https://github.com/user-attachments/assets/06e01e35-5a8b-4b33-bb79-464e0838ba3e" />
    <img width="1867" height="855" alt="image" src="https://github.com/user-attachments/assets/1509e5bb-7229-45c1-bfbe-599ac6925e09" />
    <img width="728" height="429" alt="image" src="https://github.com/user-attachments/assets/4c575caa-0f8b-479a-bbf3-b9d46df3b54b" />
    <img width="808" height="757" alt="image" src="https://github.com/user-attachments/assets/d24b92c3-bb01-4f44-8e3d-3f59f0862c81" />
</p>
<table align="center">
<tr>
<td><img height="550" src="https://github.com/user-attachments/assets/a93e97a9-b35c-4f5f-9153-5dfae46f5030" /></td>
<td><img height="550" src="https://github.com/user-attachments/assets/0d1ba898-706c-4271-ae11-7561293be7e0" /></td>
</tr>
</table>

---

## 📌 Roadmap

✅ Core ecommerce flow (browse, cart, wishlist)

🚧 Backend integration (orders, auth, payments)

---

## 📝 License

This project is licensed under the MIT License.
