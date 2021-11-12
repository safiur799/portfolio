import React from "react";
import "./Projects.css";
import { useState } from "react";
import { ProjectData } from "../Helpers/Projects";
import styled from "styled-components";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});
  const handleClose = () => setModalShow(false);

  const createModal = function (data) {
    return (
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        arial-lablledby="contained-modal-title-vcenter"
        centered
        style={{ textAlign: "center" }}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div style={{ marginLeft: "0" }}>
              <Image
                src={data.image}
                style={{
                  width: "80%",
                }}
              />
            </div>
            <div className="modal_button">
              <button
                style={{
                  marginTop: "5px",
                  border: "none",
                  marginRight: "10px",
                }}
              >
                <a
                  href={data.link2}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Source Code
                </a>
              </button>
              <button
                style={{
                  marginTop: "5px",
                  border: "none",
                  color: "white",
                  padding: "5px 15px",
                }}
              >
                <a
                  href={data.link}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  Visit
                </a>
              </button>
            </div>
            {/* {data.desc} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>
            <a href={data.link}> {data.link}</a>
          </p> */}
          <p
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
              lineHeight: 1.5,
            }}
          >
            <span>
              <b>Description: </b>
            </span>
            {data.desc}
            {/* <Image src={data.image} style={{ width: "600px" }} /> */}
            {data.summary}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ fontSize: "18px" }}>
            <b>Technologies used:</b>
          </div>
          <p style={{ marginRight: "auto" }}>{data.tech}</p>
          <Button
            onClick={() => {
              setModalShow(false);
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const mapped = ProjectData.map((el, ind) => {
    return (
      <div
        key={ind}
        id="#portfolio__card__container"
        className="card_container"
      >
        <div
          style={{ color: "#BCA0DC" }}
          className="button_class"
          onClick={() => {
            setTempData({
              image: el.image,
              link: el.link,
              link2: el.link2,
              desc: el.description,
              summary: el.summary,
              tech: el.tech,
            });
            setModalShow(true);
          }}
          src={el.image}
        >
          Click me
        </div>
        <Image
          className="portfolio__image"
          onClick={() => {
            setTempData({
              image: el.image,
              link: el.link,
              link2: el.link2,
              desc: el.description,
              summary: el.summary,
              tech: el.tech,
            });
            setModalShow(true);
          }}
          src={el.image}
        />
        <div className="portfolio__click__info"></div>
        {createModal(tempData)}
      </div>
    );
  });
  return (
    <div className="portfolio__main__container" id="projects">
      <h1>Projects</h1>
      <p>
        This is my github page
        <a href="https://github.com/safiur799" target="_blank" rel="noreferrer">
          https://github.com/safiur799
        </a>
      </p>

      <Container style={{ padding: "2rem 0", marginLeft: "20px" }}>
        {mapped}
      </Container>
    </div>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  felx-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
