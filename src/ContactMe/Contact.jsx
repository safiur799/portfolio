// import React from "react";
// import "./Contact.css";
// import { NavigationLinks } from "../Helpers/NavigationLinks";

// function CreateLinks() {
//   return NavigationLinks.map((el, ind) => (
//     <p key={ind} className="contact_data_links">
//       <a href={el.ref}> {el.name}</a>
//     </p>
//   ));
// }

// function Contact() {
//   return (
//     <div id="contact" className="contact_container">
//       <div className="d-flex justify-content-around">
//         <div>
//           <p>Kokata,WB</p>
//           <p>
//             <i class="bi bi-envelope" style={{ fontSize: "2rem" }}></i>
//             <span
//               style={{
//                 marginLeft: "5px",
//                 fontSize: "24px",
//                 marginBottom: "10px",
//               }}
//             >
//               safiurrahaman799@gmail.com
//             </span>
//           </p>
//           <p>
//             <a href="https://www.linkedin.com/in/safiur-rahaman-52a492142/">
//               <i class="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
//             </a>
//           </p>
//           <p>
//             <a href="https://github.com/safiur799">
//               <i class="bi bi-github" style={{ fontSize: "2rem" }}></i>
//             </a>
//           </p>
//         </div>
//         <div style={{}}>{CreateLinks()}</div>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         Copyright&copy;{new Date().getFullYear()}
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const [nameText, setNameText] = useState("");
  const [userNumber, setUserNumber] = useState();

  const handleOnChangeFake = (e) => {
    setNameText(e.target.value);
  };
  const handleOnChangeFakeNumber = (e) => {
    setUserNumber(e.target.value);
  };
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
      setNameText("");
      setUserNumber("");
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mayazgen",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main id="contact" className="main__form">
      <hr />
      <form onSubmit={handleOnSubmit} className="form__container">
        <h1>Contact Me</h1>
        <label htmlFor="email">Name</label>
        <input
          id="name"
          type="name"
          name="name"
          onChange={handleOnChangeFake}
          required
          value={nameText}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

        <label htmlFor="email">Number</label>
        <input
          id="number"
          type="number"
          name="number"
          onChange={handleOnChangeFakeNumber}
          required
          value={userNumber}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
export default Contact;
