import { excludedKeys, SIZE_ORDER_MAP } from "../constants/constants";
import { itemsList } from "./itemsList";

function extractFiltersByCategory(itemsList) {
  const filtersByCategory = { All: {} };

  itemsList.forEach((item) => {
    const category = item.category;

    if (!filtersByCategory[category]) {
      filtersByCategory[category] = {};
    }

    Object.entries(item).forEach(([key, value]) => {
      if (!excludedKeys.includes(key) && key !== category) {
        const values = Array.isArray(value) ? value : [value];

        if (!filtersByCategory[category][key]) {
          filtersByCategory[category][key] = new Set();
        }

        values.forEach((v) => v && filtersByCategory[category][key].add(v));

        if (!filtersByCategory["All"][key]) {
          filtersByCategory["All"][key] = new Set();
        }
        values.forEach((v) => v && filtersByCategory["All"][key].add(v));
      }
    });
  });

  // Convert sets to array for easier use
  for (const category in filtersByCategory) {
    for (const key in filtersByCategory[category]) {
      let valuesArray = Array.from(filtersByCategory[category][key]);

      if (key.toLowerCase() === "size") {
        valuesArray.sort((a, b) => SIZE_ORDER_MAP[a] - SIZE_ORDER_MAP[b]);
      } else {
        valuesArray.sort();
      }

      filtersByCategory[category][key] = valuesArray;
    }
  }

  return filtersByCategory;
}

export const filterConfig = extractFiltersByCategory(itemsList);
