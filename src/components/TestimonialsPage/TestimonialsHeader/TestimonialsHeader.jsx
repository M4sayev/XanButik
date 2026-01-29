import "./TestimonialsHeader.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { ourResults } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";
import ResultWidget from "./ResultWidget";

function TestimonialsHeader() {
  const { ref: testHeaderRef, inView: testHeaderInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <header
      ref={testHeaderRef}
      className={`testimonials-header ${
        testHeaderInView ? "testimonials-header-animate-in" : ""
      }`}
    >
      <div className="testimonials-contents">
        <div className="testimonials-text-container">
          <h1 className="std-heading">Our results</h1>
          <p className="std-paragraph mi-auto">
            We&apos;re proud of what we&apos;ve achieved, but we&apos;re not
            stopping there.
          </p>
        </div>
        <div className="testimonials-widgets-container">
          <div className="testimonials-img-widget-container"></div>
          <div className="testimonials-results-container" role="list">
            {ourResults.map((item, index) => {
              const { achievement, result } = item;
              return (
                <ResultWidget
                  achievement={achievement}
                  result={result}
                  handleAnimation={handleAnimation}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <Button
          as={Link}
          id="Explore"
          to="/Cart"
          className="testimonials-learn-more-btn std-button"
          aria-label="Explore our achievements"
        >
          Explore
        </Button>
      </div>
    </header>
  );
}

export default TestimonialsHeader;
