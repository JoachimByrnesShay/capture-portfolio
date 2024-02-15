import { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] =
    useState(false);
  console.log(children);
  return (
    <div
      onClick={() => setToggle(!toggle)}
    >
      {!toggle && children}
      {toggle && <div>TOGGLE</div>}
    </div>
  );
};

export default Toggle;
