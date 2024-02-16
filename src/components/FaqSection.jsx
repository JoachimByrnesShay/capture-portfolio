import styled from "styled-components";
import { StyledAbout } from "../styles.js";
import Toggle from "./Toggle";
import {
  LayoutGroup,
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  fade,
  fade2,
  scrollReveal,
} from "../animation";
import { useScroll } from "./UseScroll";
const FaqSection = (props) => {
  const [element, controls] =
    useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup type="crossfade">
        <Toggle
          className="question"
          title="How do I start?"
        >
          <motion.div
            className="answer"
            layout
            // variants={fade2}
          >
            <p>
              Lorem ipsum dolor, sit
              amet{" "}
            </p>

            <p>
              consectetur adipisicing
              elit. Harum fugit{" "}
            </p>
          </motion.div>
        </Toggle>
        <Toggle
          className="question"
          title="Daily Schedule"
        >
          <motion.div
            className="answer"
            layout
            // variants={fade}
          >
            <p>
              Lorem ipsum dolor, sit
              amet{" "}
            </p>

            <p>
              consectetur adipisicing
              elit. Harum fugit{" "}
            </p>
          </motion.div>
        </Toggle>
        <Toggle
          className="question"
          title="Payment Methods?"
        >
          <motion.div
            className="answer"
            layout
            // variants={fade}
          >
            <p>
              Lorem ipsum dolor, sit
              amet{" "}
            </p>

            <p>
              consectetur adipisicing
              elit. Harum fugit{" "}
            </p>
          </motion.div>
        </Toggle>
        <Toggle
          className="question"
          title="What Products do you offer"
        >
          <motion.div
            className="answer"
            layout
            // variants={fade}
          >
            <p>
              Lorem ipsum dolor, sit
              amet{" "}
            </p>

            <p>
              consectetur adipisicing
              elit. Harum fugit{" "}
            </p>
          </motion.div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }

  .h4-title {
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
