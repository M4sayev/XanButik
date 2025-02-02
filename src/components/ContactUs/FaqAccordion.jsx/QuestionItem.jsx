import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { StoreContext } from "../../../context/StoreContext";
import { useInView } from "react-intersection-observer";

function QuestionItem({ question, ans, isFiltered}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { handleAnimation } = useContext(StoreContext);
  const { ref: accordionItemRef, inView: accordionItemInView } = useInView()
  // collapsing every question on category change
    useEffect(() => setIsCollapsed(true), [isFiltered]);
  return (
    <article ref={accordionItemRef} className={`faq-accordion-item ${handleAnimation(accordionItemInView)}`}>
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="faq-accordion-head"
      >
        <h2 className="std-subtitle-fs faq-accordion-question">{question}</h2>
        <i>
          <IoIosArrowDown
            className={`faq-arrow-icon ${
              !isCollapsed ? "arrow-is-active" : ""
            }`}
          />
        </i>
      </div>
      <div
        className={`faq-accordion-body ${
          !isCollapsed && "faq-accordion-body-show"
        }`}
      >
        <p className="faq-accordion-ans">{ans}</p>
      </div>
    </article>
  );
}

export default QuestionItem;
