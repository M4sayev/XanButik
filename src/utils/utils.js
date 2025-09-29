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
