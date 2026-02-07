import { itemsList } from "../assets/itemsList";

export const DEFAULT_SORT = "Recommended";
export const DEFAULT_RESET_FILTER = {
  size: [],
  productType: [],
  color: [],
  fit: [],
  sleeveLength: [],
  material: [],
  design: [],
  season: [],
  neckline: [],
  style: [],
};

export const COLOR_MAP = {
  Black: "#191414ff",
  Red: "#b23939ff",
  Mustard: "#c1a83dff",
  Gold: "#e7e028ff",
  "Dark Green": "#1d331dff",
  Brown: "#4d2121ff",
  Green: "#387638ff",
  Blue: "#5e33ccff",
  Yellow: "#ffe675ff",
  Beige: "#f5f5dc",
  Navy: "#000080",
  Gray: "#787373ff",
  "Light Brown": "#d2b48cff",
  "Light Green": "#90ee90ff",
  "Dark Blue": "#00008bff",
  "Light Blue": "#add8e6ff",
  Burgundy: "#800020ff",
  Teal: "#008080ff",
  "Light Gray": "#e6e4e4ff",
  "Murky Blue": "#4a646cff",
  White: "#fcf5f5ff",
};

export const SIZE_ORDER_MAP = {
  XS: 0,
  S: 1,
  M: 2,
  L: 3,
  XL: 4,
  XXL: 5,
};
export const DEFAULT_PRICE_RANGE_MIN = 0;
export const DEFAULT_PRICE_RANGE_MAX = 1500;

export const ITEMS_PER_PAGE = 8;

export const excludedKeys = [
  "id",
  "name",
  "price",
  "discountPercent",
  "description",
  "img",
  "isNewArrival",
  "releaseDate",
  "category",
  "reviews",
];

export const routePageMap = {
  "/": "Home",
  "/About": "About Us",
  "/Testimonials": "About Us",
  "/ContactUs": "Contact Us",
  "/Store": "Store",
  "/Store/ProductPage": "Store",
};

export const categoryMap = itemsList.reduce(
  (map, product) => {
    if (!map[product.category]) {
      map[product.category] = [];
    }
    map[product.category].push(product);
    return map;
  },
  { All: itemsList },
);
