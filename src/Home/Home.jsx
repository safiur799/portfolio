import React from "react";
import persion from "../Images/persion.jpg";
import "./Home.css";
import Header from "../Header/Header.jsx";
function Home() {
  return (
    <div className="container_home" id="about_me ">
      <div>
        <img src={persion} alt="persion person" />
      </div>
      <div className="container_text">
        <h5>Hello</h5>
        <h1>I'm Safiur </h1>
        <h3 style={{ fontSize: "20px    " }}>I'm a full stack web developer</h3>
        <p>
          I love to solving problem and take challenges and enjoy developing
          websites and web applications.
        </p>

        <button
          onClick={() => {
            return (
              <div>
                <a href="https://drive.google.com/drive/folders/1Leb-Sa5-aHPULmH376WPxeKTeQwEOQTm?usp=sharing"></a>
              </div>
            );
          }}
        >
          Resume
        </button>
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}

export default Home;
