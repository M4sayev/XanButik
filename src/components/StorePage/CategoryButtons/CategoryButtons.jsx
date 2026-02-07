import "./CategoryButtons.css";
import { categoryPreviewMap } from "../../../assets/assets";
import { categoryMap } from "../../../constants/constants";

function CategoryButtons({ handleCategoryBtn, currentCategory }) {
  return (
    <section className="category-btns-section">
      <div className="category-btns-container">
        {Object.entries(categoryMap).map(([category, products]) => {
          let imgSrc = categoryPreviewMap[category] ?? products[0].img[0];
          return (
            <button
              className={`category-btn ${
                currentCategory === category && "category-btn--active"
              }`}
              key={category}
              onClick={() => handleCategoryBtn(category)}
            >
              <div className="category-img-wrapper">
                <img
                  className="category-preview-img"
                  src={imgSrc}
                  alt={category}
                />
              </div>
              <div className="category-btn-overlay">
                <h2>{category}</h2>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryButtons;
