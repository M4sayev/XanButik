import {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Store.css";
import HeaderStore from "../../components/StorePage/HeaderStore/HeaderStore";
import { itemsList } from "../../assets/itemsList.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import { calculateDiscountPrice } from "../../utils/utils.js";
import { categoryMap, ITEMS_PER_PAGE } from "../../constants/constants.js";
import { useDebounce } from "use-debounce";

import Spinner from "../../components/Spinner/Spinner.jsx";
const FilterComponent = lazy(
  () => import("../../components/StorePage/FilterComponent/FilterComponent"),
);
const Product = lazy(
  () => import("../../components/StorePage/Products/Product"),
);
const CategoryButtons = lazy(
  () => import("../../components/StorePage/CategoryButtons/CategoryButtons"),
);
const Pagination = lazy(
  () => import("../../components/StorePage/Pagination/Pagination.jsx"),
);

function Store() {
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  const [debouncedSearchQuery] = useDebounce(searchQuery, 200);

  const [currentPage, setCurrentPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState("All");
  const [products, setProducts] = useState(itemsList);

  const { sortOptions, filters, priceRange } = useContext(StoreContext);

  const productsRef = useRef();

  useEffect(() => {
    const category = categoryMap[currentCategory];
    setProducts(category);
    setSearchQuery("");
    setCurrentPage(1);
  }, [currentCategory, categoryMap]);

  // Filter products by search bar input
  const filteredProducts = useMemo(() => {
    const query = debouncedSearchQuery.trim().toLowerCase();
    return products.filter((item) => item.name.toLowerCase().includes(query));
  }, [debouncedSearchQuery, products]);

  // Price range filter
  const productsWithinRange = useMemo(() => {
    return filteredProducts.filter((product) => {
      const totalPrice = calculateDiscountPrice(
        product.price,
        product.discountPercent,
      );
      return totalPrice <= priceRange[1] && totalPrice >= priceRange[0];
    });
  }, [priceRange, filteredProducts]);

  // Sort products by sort options
  const filteredBySortOptions = useMemo(() => {
    let newProducts;
    switch (sortOptions) {
      case "Recommended":
        newProducts = productsWithinRange;
        break;
      case "What's new":
        newProducts = productsWithinRange.filter(
          (product) => product.isNewArrival,
        );
        break;
      case "Price low to high":
        newProducts = productsWithinRange.toSorted((productOne, productTwo) => {
          const priceOne = calculateDiscountPrice(
            productOne.price,
            productOne.discountPercent,
          );
          const priceTwo = calculateDiscountPrice(
            productTwo.price,
            productTwo.discountPercent,
          );
          return priceOne - priceTwo;
        });
        break;
      case "Price high to low":
        newProducts = productsWithinRange.toSorted((productOne, productTwo) => {
          const priceOne = calculateDiscountPrice(
            productOne.price,
            productOne.discountPercent,
          );
          const priceTwo = calculateDiscountPrice(
            productTwo.price,
            productTwo.discountPercent,
          );
          return priceTwo - priceOne;
        });
        break;
    }

    return newProducts;
  }, [sortOptions, productsWithinRange]);

  // Filter products by filter options
  const filteredByFilterOptions = useMemo(() => {
    function hasCommonElement(arr1, arr2) {
      return arr1.some((element) => arr2.includes(element));
    }

    const newProducts = filteredBySortOptions.filter((product) => {
      let bool = true;
      Object.entries(filters).every(([filter, data]) => {
        if (data.length && product[filter]) {
          const productData = product[filter];
          if (!Array.isArray(productData)) return false;
          bool = hasCommonElement(productData, data);
          if (!bool) return false;
        }
        return true;
      });
      if (bool) return product;
    });

    return newProducts;
  }, [filters, filteredBySortOptions]);

  // Count total pages for the pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredByFilterOptions.length / ITEMS_PER_PAGE);
  }, [filteredByFilterOptions]);

  // Create an array of page products for paginations
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredByFilterOptions.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredByFilterOptions]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  // Handle select category
  function handleCategoryBtn(category) {
    if (category === currentCategory) {
      setCurrentCategory("All");
    } else {
      setCurrentCategory(category);
    }
  }

  // Handle images loaded
  useEffect(() => {
    let timeoutId;

    const checkImages = () => {
      if (!productsRef.current) {
        setLoading(false);
        return;
      }

      const images = Array.from(productsRef.current.querySelectorAll("img"));
      if (images.length === 0) {
        setLoading(false);
        return;
      }

      let loadedCount = 0;
      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) setLoading(false);
      };

      images.forEach((img) => {
        if (img.complete) handleImageLoad();
        else {
          img.addEventListener("load", handleImageLoad);
          img.addEventListener("error", handleImageLoad);
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", handleImageLoad);
          img.removeEventListener("error", handleImageLoad);
        });
      };
    };

    // Delay image check slightly to allow Suspense to finish rendering
    timeoutId = setTimeout(checkImages, 100);

    return () => clearTimeout(timeoutId);
  }, [paginatedProducts]);

  return (
    <main>
      <Spinner loading={loading} />
      <HeaderStore setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {!loading && (
        <>
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryButtons
              categoryMap={categoryMap}
              handleCategoryBtn={handleCategoryBtn}
              currentCategory={currentCategory}
            />
          </Suspense>

          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterComponent
              currentCategory={currentCategory}
              setCurrentPage={setCurrentPage}
            />
          </Suspense>

          {filteredProducts.length === 0 ||
          filteredByFilterOptions.length === 0 ? (
            <section
              className="no-results-container"
              role="status"
              aria-live="polite"
            >
              <div className="no-results-text">
                <h2>No Results</h2>
                <p>
                  We couldn&apos;t find anything matching{" "}
                  <strong>
                    {searchQuery !== "" ? `"${searchQuery}"` : "this selection"}
                  </strong>
                </p>
              </div>
            </section>
          ) : (
            <Suspense fallback={<div>Loading products...</div>}>
              <section ref={productsRef} className="str-products-grid">
                {paginatedProducts.map((product, index) => {
                  return (
                    <Product
                      key={product.id}
                      {...product}
                      index={index}
                      searchQuery={searchQuery}
                    />
                  );
                })}
              </section>
            </Suspense>
          )}
          <Suspense fallback={null}>
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
            />
          </Suspense>
        </>
      )}
    </main>
  );
}

export default Store;
