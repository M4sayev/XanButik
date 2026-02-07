import { coinSize } from "../constants/gameConstants";

export function camelCaseToLabel(str) {
  return str
    .replace(/([A-Z])/g, " $1") // insert space before capital letters
    .replace(/^./, (s) => s.toUpperCase()); // capitalize first letter
}

export function calculateDiscountPrice(price, discountPercent) {
  const discounted = price * (1 - (discountPercent || 0) / 100);
  return parseFloat(discounted.toFixed(2));
}

export function handleAnimation(inView) {
  return inView ? "animate-in" : "";
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function formatTime(ms) {
  const minutes = Math.floor(ms / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((ms % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function randomInBetween(lower, upper) {
  return Math.floor(Math.random() * (upper - lower - coinSize)) + lower;
}

export const getCoordinateKey = (x, y) => x + "|" + y;

export function getRandomCoinType() {
  const rand = Math.random();

  if (rand < 0.85) return "silver";
  if (rand < 0.95) return "gold";
  return "frozen";
}

export function formatCoins(value) {
  if (value >= 1e12) return (value / 1e12).toFixed(1) + "T";
  if (value >= 1e9) return (value / 1e9).toFixed(1) + "B";
  if (value >= 1e6) return (value / 1e6).toFixed(1) + "M";
  if (value >= 1e3) return (value / 1e3).toFixed(1) + "K";
  return value.toString();
}

export function range(start, end) {
  if (start === end) return [start];
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}
