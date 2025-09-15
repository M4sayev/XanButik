import { itemsList } from "./itemsList";

const SIZE_ORDER_MAP = {
  "XS": 0,
  "S": 1,
  "M": 2,
  "L": 3,
  "XL": 4,
  "XXL": 5
};

function extractFiltersByCategory(itemsList) {
    const excludedKeys = ["id", "name", "price", "discountPercent", "description", "img", "isNewArrival", "releaseDate", "category"];
    const filtersByCategory = { All: {} };

    itemsList.forEach(item => {
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

                values.forEach(v => v && filtersByCategory[category][key].add(v));

                if (!filtersByCategory["All"][key]) {
                    filtersByCategory["All"][key] = new Set();
                }
                values.forEach(v => v && filtersByCategory["All"][key].add(v));
            }
        })
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