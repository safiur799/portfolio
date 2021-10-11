import React from "react";
import "./Header.css";
import Typed from "react-typed";
function Header() {
  return (
    <div className="main_info">
      <h5>what I am</h5>
      <Typed
        strings={[
          " ",
          "A Software Develper",
          "Full Stack Developer",
          "or!",
          "a coder",
          " ",
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      ></Typed>
    </div>
  );
}

export default Header;
