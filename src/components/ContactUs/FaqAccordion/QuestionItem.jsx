import { useEffect, useId, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function QuestionItem({ question, ans, isFiltered, handleArrows, index }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { ref: accordionItemRef, inView: accordionItemInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const id = useId();

  // collapsing every question on category change
  useEffect(() => setIsCollapsed(true), [isFiltered]);

  return (
    <article
      ref={accordionItemRef}
      className={`faq-accordion-item ${handleAnimation(accordionItemInView)}`}
      id={`article-${index}`}
    >
      <button
        data-tab-index={`article-button-${index}`}
        id={`faq-button-${id}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="faq-accordion-head"
        aria-expanded={!isCollapsed}
        aria-controls={`faq-content-${id}`}
        onKeyDown={(e) => handleArrows(e, index)}
      >
        <h2 className="std-subtitle-fs faq-accordion-question">{question}</h2>
        <i>
          <IoIosArrowDown
            className={`faq-arrow-icon ${
              !isCollapsed ? "arrow-is-active" : ""
            }`}
            aria-hidden="true"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </i>
      </button>
      <div
        id={`faq-content-${id}`}
        className={`faq-accordion-body ${
          !isCollapsed ? "faq-accordion-body-show" : ""
        }`}
        hidden={isCollapsed}
      >
        <p className="faq-accordion-ans">{ans}</p>
      </div>
    </article>
  );
}

export default QuestionItem;
