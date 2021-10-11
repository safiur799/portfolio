import React from "react";
import "./Projects.css";
import { useState } from "react";
import { ProjectData } from "../Helpers/Projects";
import Container from "react-bootstrap/Container";
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
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.link}</p>
          <Image src={data.image} style={{ width: "600px" }} />
        </Modal.Body>
        <Modal.Footer>
          <div>Technologies used:</div>
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
      <Card key={ind} id="#portfolio__card__container ">
        <Image
          className="portfolio__image"
          onClick={() => {
            setTempData({
              image: el.image,
              link: el.link,
              desc: el.description,
              summary: el.summary,
              tech: el.tech,
            });
            setModalShow(true);
          }}
          src={el.image}
        />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
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
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Projects;
