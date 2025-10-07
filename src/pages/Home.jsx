import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "Excel",
  "Git",
  "AWS",
  "Azure",
  "React",
];

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="about"
      className="py-5"
    >
      <section id="about" className="py-5">
        <Container>
          <Row className="text-white">
            <Col
              xs={12}
              md={4}
              className="text-center text-md-start mb-5 mb-md-0"
            >
              <div className="profile-wrapper mx-auto mx-md-0 mb-3">
                <Image
                  src="/profile.jpg"
                  alt="Miguel Andrés"
                  className="profile-img shadow"
                  roundedCircle
                  fluid
                />
              </div>

              <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mb-2 fs-4">
                <a
                  href="https://www.linkedin.com/in/miguel-andres-baldeon-mora-77a428372/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/AndresBaldeonMora"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaGithub />
                </a>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="cv-tooltip">CV</Tooltip>}
                >
                  <a
                    href="https://drive.google.com/file/d/1vWNLi9cm5alX9o7HvMZiDBtpGyzXFqOQ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-danger"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FaFilePdf />
                  </a>
                </OverlayTrigger>
              </div>

              <div
                className="text-white mt-2"
                style={{ fontWeight: 300, fontSize: "0.95rem" }}
              >
                <div className="d-flex align-items-center mb-1">
                  <FaPhone className="me-2" />
                  +51 913 459 012
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="me-2" />
                  andres.baldeon2024@gmail.com
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <h5 className="text-uppercase text-info me-2 mb-0">Skills</h5>
              </div>

              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      color: "white",
                      fontWeight: "300",
                      fontSize: "0.95rem",
                      marginRight: "1rem",
                      marginBottom: "0.5rem",
                      display: "inline-block",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p
                  style={{
                    color: "white",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                  }}
                >
                  Español (nativo) · Inglés (intermedio)
                </p>
              </div>
            </Col>

            <Col xs={12} md={8}>
              <h1 className="fw-bold mb-2">Andrés Baldeón</h1>
              <h5 className="text-uppercase mb-3 text-white-50">
                Estudiante de Ingeniería Informática · Practicante Data Analyst
              </h5>
              <p className="mb-3">📍 Lima, Perú</p>

              <p className="lead">
                Apasionado por el análisis de datos, con experiencia trabajando
                con herramientas como <strong>Power BI</strong>,{" "}
                <strong>SQL</strong>, <strong>Python</strong> y{" "}
                <strong>R</strong>. Actualmente, soy practicante universitario
                en la Universidad Ricardo Palma, donde desarrollo dashboards,
                limpio datasets y colaboro en el diseño de soluciones
                tecnológicas.
              </p>

              <p style={{ fontWeight: 300 }}>
                Me considero autodidacta, organizado y con una fuerte
                orientación a resultados. Soy un firme creyente en la
                importancia de la constancia, la comunicación efectiva y la
                humildad para el logro de objetivos profesionales.
              </p>

              <div className="mt-4">
                <h5 className="text-uppercase text-info mb-2">Educación</h5>
                <p style={{ fontWeight: 300, fontSize: "0.95rem" }}>
                  <strong>Universidad Ricardo Palma</strong>
                  <br />
                  Estudiante de Ingeniería Informática — 9.º ciclo
                  <br />
                  Ingreso: 2021-II · Culminación estimada: 2026-I
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.section>
  );
};

export default Home;
