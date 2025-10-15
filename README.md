🛍️ Ecommerce Website + Tap-to-Earn Gamification

A modern React-based ecommerce web application with product listings, discounts, wishlist, cart, checkout flow, and now an interactive tap-to-earn coin system with bombs and freeze mechanics. Built with React Router, React Toastify, and interactive components like sliders, maps, carousels, and gamified mini-games.

📖 About the Project

This project was inspired by my brother’s menswear shop. Long before I knew how to code, I thought it would be amazing to learn programming by building a digital version of our shop.

The UI/UX design, layout, and branding were completely created by me. All static assets were created to give the site a realistic feel.

<b>New Gamification</b>: Users can now earn gold and silver coins over time, avoid bombs that decrease coins, and tap freeze coins to pause the timer. This adds an interactive mini-game layer to the shopping experience.

Building this project allowed me to learn React, Vite, React Router, interactive UI components like carousels, countdowns, maps, and now game logic with timers and coin mechanics.

⚠️ We don’t claim the brands are original or ours — the shop worked more like a retail operation, and this project is for educational/portfolio purposes only.



🚀 Live Demo

🔗 [View Live on Vercel](https://xanbutik-git-main-msayev02-gmailcoms-projects.vercel.app)

## 🎮 Tap-to-Earn Game Demo

Check out the gameplay for the tap-to-earn mini-game, including gold & silver coins, bombs, and freeze mechanics:

![Game Demo](./src/assets/game/game-demo.gif)


✨ Features

Ecommerce:

🔎 Browse products with discounts

🛒 Add to cart, wishlist, and manage items

🔔 Toast notifications for user actions

🎨 Responsive and modern UI

⭐ Product ratings & reviews

📍 Location features (Google Maps + Leaflet integration)

🎞️ Product carousels with Swiper

⏳ Countdown timers for deals


🕹️ Gamification & Tap-to-Earn Game:

The app now includes an interactive tap-to-earn mini-game and a coupon system that automatically resets using the use-timed-reset-state 
React hook. These features add fun, engagement, and rewards for users.

Game Mechanics

💰 Coins:

Gold coins and silver coins appear during the game.

Users tap coins to collect them and increase their score.

💣 Bombs:

Avoid bombs! Tapping a bomb decreases your coins.

❄️ Freeze Coins:

Tap freeze coins to pause the game timer temporarily.

⏱️ Daily Reset:

The game automatically resets every day, giving all users a fresh start daily.

Coupon System

🗓️ Weekly Coupon Reset:

Coupons refresh every Monday automatically.

Users get new coupons without manual intervention.

💾 Persistent State:

Both coins/game progress and coupons are stored in localStorage for a seamless experience.

Example Usage with use-timed-reset-state:

```javascript
import useTimedResetState from "use-timed-reset-state";

// Reset daily game score every day at midnight
const [gameScore, setGameScore, resetGame] = useTimedResetState(0, {
  interval: "day",
  resetAtHours: 0,
  resetAtMinutes: 0,
}, "gameScore");

// Reset coupons every Monday at 00:00
const [coupons, setCoupons, resetCoupons] = useTimedResetState(defaultCoupons, {
  interval: "week",
  dayOfWeek: 1, // Monday
  resetAtHours: 0,
  resetAtMinutes: 0,
}, "coupons");
```

Benefits

* Gamifies shopping experience and encourages engagement.

* Automatic resets ensure fairness and recurring interaction.

* Persistent state guarantees smooth experience even after closing the app.


🎨 Fully custom design, created from scratch


🛠️ Tech Stack

Frontend:

React 18

Vite (for fast dev/build)

React Router DOM

React Hook Form

CSS

UI & UX:

Swiper (carousels)

React Icons

React Spinners

React Toastify

React Intersection Observer

React Scroll Parallax

Utilities:

React Rating + Rating Stars

React Countdown

React Range Slider Input

use-debounce

Maps & Location:

@react-google-maps/api

Leaflet

Gamification & State Management:

use-timed-reset-state (daily/weekly automatic resets)

React state & hooks (coins, bombs, freeze logic)

LocalStorage persistence


📦 Installation

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

📸 Screenshots

<img width="1347" height="702" alt="image" src="https://github.com/user-attachments/assets/06e01e35-5a8b-4b33-bb79-464e0838ba3e" />
<img width="1867" height="855" alt="image" src="https://github.com/user-attachments/assets/1509e5bb-7229-45c1-bfbe-599ac6925e09" />
<img width="728" height="429" alt="image" src="https://github.com/user-attachments/assets/4c575caa-0f8b-479a-bbf3-b9d46df3b54b" />

<img width="808" height="757" alt="image" src="https://github.com/user-attachments/assets/d24b92c3-bb01-4f44-8e3d-3f59f0862c81" />
<img width="412" height="725" alt="image" src="https://github.com/user-attachments/assets/a93e97a9-b35c-4f5f-9153-5dfae46f5030" />
<img width="359" height="715" alt="image" src="https://github.com/user-attachments/assets/0d1ba898-706c-4271-ae11-7561293be7e0" />

📌 Roadmap

✅ Core ecommerce flow (browse, cart, wishlist)

🚧 Backend integration (orders, auth, payments)

🎨 Design

Full custom design made from scratch

Responsive layouts for desktop, tablet, and mobile

Modern, clean, and interactive UI

Custom icons, buttons, and visual assets

📝 License

This project is licensed under the MIT License.
