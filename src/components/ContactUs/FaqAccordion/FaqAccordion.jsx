import { useState } from "react";
import "./FaqAccordion.css";
import { askedQuestions } from "../../../assets/assets";
import QuestionItem from "./QuestionItem";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";
import FaqCategoryItem from "./FaqCategoryItem";

function FaqAccordion() {
  const [accordionItems, setAccordionItems] = useState(askedQuestions);
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [isFiltered, setIsFiltered] = useState(false);

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const allCategories = [
    "All Questions",
    ...new Set(askedQuestions.map((item) => item.category)),
  ];

  const filterItems = (category) => {
    // to collapse all the questions when the category changes
    setIsFiltered(true);
    //
    if (category === "All Questions") {
      setAccordionItems(askedQuestions);
      return;
    }
    const newAccordionItems = askedQuestions.filter(
      (accordionItem) => accordionItem.category === category
    );
    setAccordionItems(newAccordionItems);

    // Reset after collapsing to allow re-triggering next time
    setTimeout(() => setIsFiltered(false), 0);
  };

  const handleQuestionSelected = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  function handleKeyDown(e, index) {
    const focusAccordionEl = (string) => {
      if (string === "prev") {
        const prev = (index - 1 + allCategories.length) % allCategories.length;
        const prevStr = `tab-${prev}`;
        document.getElementById(prevStr).focus();
      }
      if (string === "next") {
        const next = (index + 1) % allCategories.length;
        const nextStr = `tab-${next}`;
        document.getElementById(nextStr).focus();
      }
      if (string === "first-question") {
        const firstQuestion = document.querySelector(
          `.faq-accordion-item button`
        );
        if (firstQuestion) {
          firstQuestion.focus();
          firstQuestion.click();
        }
      }
    };

    const isWideScreen = window.innerWidth > 777;

    if (e.key === "ArrowRight") {
      if (!isWideScreen) {
        focusAccordionEl("next");
      } else {
        focusAccordionEl("first-question");
      }
    }
    if (e.key === "ArrowLeft" && !isWideScreen) {
      focusAccordionEl("prev");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isWideScreen) {
        focusAccordionEl("first-question");
      } else {
        focusAccordionEl("next");
      }
    }
    if (e.key === "ArrowUp" && isWideScreen) {
      e.preventDefault();
      focusAccordionEl("prev");
    }
  }

  function handleArrows(e, index) {
    const len = accordionItems.length;

    let targetIndex;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      targetIndex = (index + 1) % len;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      targetIndex = (index - 1 + len) % len;
    }
    const targetEl = document.querySelector(
      `[data-tab-index="article-button-${targetIndex}"]`
    );

    if (targetEl) {
      targetEl.focus();
      targetEl.click();
    }
  }

  return (
    <section className="faq-accordion-section">
      <div className="faq-accordion-contents">
        <h1
          ref={headingRef}
          className={`std-heading faq-heading ${handleAnimation(
            headingInView
          )}`}
        >
          Frequently asked questions
        </h1>
        <div className="faq-accordion-container">
          <ul className="faq-question-categories" role="tablist">
            {allCategories.map((category, index) => (
              <FaqCategoryItem
                category={category}
                index={index}
                handleKeyDown={handleKeyDown}
                handleQuestionSelected={handleQuestionSelected}
              />
            ))}
          </ul>
          <div className="faq-accordion">
            {accordionItems.map((questionItem, index) => {
              return (
                <QuestionItem
                  key={index}
                  id={`question-item-${index}`}
                  {...questionItem}
                  isFiltered={isFiltered}
                  handleArrows={handleArrows}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;
