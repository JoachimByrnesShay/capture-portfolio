import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Contact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Our Contact</h1>
    </Contact>
  );
};

export default ContactUs;

const Contact = styled(motion.div)`
  color: white;
`;
