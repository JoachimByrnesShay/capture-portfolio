import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  StyledAbout,
  Description,
  StyledImage,
  Hide,
} from "../styles.js";
import { motion } from "framer-motion";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { duration: 2 },
  //   },
  // };
  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 3,
  //       ease: "easeOut",
  //       staggerChildren: 1,
  //     },
  //   },
  // };
  return (
    <StyledAbout>
      <Description>
        <motion.div
        // variants={container}
        // initial="hidden"
        // animate="show"
        // className="title"
        >
          <Hide>
            <motion.h2
            // animate={{
            //   opacity: 1,
            //   transition: {
            //     duration: 5,
            //   },
            // }}
            // initial={{ opacity: 0 }}
            // variants={titleAnim}
            >
              We work to make{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
            // variants={titleAnim}
            >
              your <span>dreams</span>{" "}
              come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
            // variants={titleAnim}
            >
              true.{" "}
            </motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography
          or videography needs that you
          have. We are YOUR skilled
          professionals.
        </p>
        <button>Contact Us</button>
      </Description>
      <StyledImage>
        <img
          src={home1}
          alt="guy wth a camera"
        />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
