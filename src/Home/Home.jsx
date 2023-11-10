import React from "react";
import persion from "../Images/persion.jpg";
import "./Home.css";
import Header from "../Header/Header.jsx";
import styled from "styled-components";
function Home() {
  return (
    <div className="container_home" id="about_me ">
      <div>
        <img src={persion} alt="persion person" />
      </div>
      <div className="container_text">
        <h5>Hello</h5>
        {/* <a href="/safiur.pdf" download>
          <Button>Download Resume</Button>
        </a> */}
        <h1>I'm Safiur </h1>
        <h3 style={{ fontSize: "20px" }}>I'm a full stack web developer</h3>
        <p>
          I love to solving problem and take challenges and enjoy developing
          websites and web applications.
        </p>
        <div className="links">
          <a href="/Safiur_Rahaman_fw10_210.pdf" download target="_blank">
            <button className="resume_class" style={{ padding: "5px 20px" }}>
              Download Resume
            </button>
          </a>
          <Container>
            <a
              style={{}}
              href="https://www.linkedin.com/in/safiur-rahaman-52a492142/"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </a>

            <a href="https://github.com/safiur799" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </Container>
        </div>
        <div>
          <Header className="main__Header" />
        </div>
      </div>
    </div>
  );
}

export default Home;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    top:0,
    button:0,
    text-decoration: none;
    &:hover {
       z-index:1;
      background-color: #fff;
    }
    i {
      font-size: 2rem;
      &:hover {
       z-index:16;
      }
    }
  }
  &:hover {
       z-index:1;
      background-color: #fff;
      
  }
`;
const Button = styled.button`
  position: absolute;
  left: 87%;
  top: 11%;
  text-align: center;
`;
