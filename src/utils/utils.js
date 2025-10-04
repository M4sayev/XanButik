export function camelCaseToLabel(str) {
  return str
    .replace(/([A-Z])/g, " $1") // insert space before capital letters
    .replace(/^./, (s) => s.toUpperCase()); // capitalize first letter
}

export function calculateDiscountPrice(price, discountPercent) {
  return price * (1 - (discountPercent || 0) / 100);
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
