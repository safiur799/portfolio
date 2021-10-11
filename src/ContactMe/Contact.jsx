import React from "react";
import "./Contact.css";
import { NavigationLinks } from "../Helpers/NavigationLinks";

function CreateLinks() {
  return NavigationLinks.map((el, ind) => (
    <p key={ind} className="contact_data_links">
      <a href={el.ref}> {el.name}</a>
    </p>
  ));
}

function Contact() {
  return (
    <div id="contact" className="contact_container">
      <div className="d-flex justify-content-around">
        <div>
          <p>Kokata,WB</p>
          <p>
            <i class="bi bi-envelope" style={{ fontSize: "2rem" }}></i>
            <span
              style={{
                marginLeft: "5px",
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              safiurrahaman799@gmail.com
            </span>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/safiur-rahaman-52a492142/">
              <i class="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
          </p>
          <p>
            <a href="https://github.com/safiur799">
              <i class="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
          </p>
        </div>
        <div style={{}}>{CreateLinks()}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy;{new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Contact;
