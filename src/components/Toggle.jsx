import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({
  children,
  title,
  className,
}) => {
  const [
    showViaToggle,
    setShowViaToggle,
  ] = useState(false);
  console.log(children);
  return (
    <>
      <motion.div
        layout
        className={className}
        onClick={() =>
          setShowViaToggle(
            (toggle) => !toggle
          )
        }
      >
        <motion.h4
          layout
          className="h4-title"
        >
          {title}
        </motion.h4>
        {showViaToggle ? children : ""}
        <div className="faq-line"></div>
      </motion.div>
    </>
  );
};

export default Toggle;
