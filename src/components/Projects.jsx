import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiBootstrap, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { BiBarChartAlt2 } from "react-icons/bi"; // Usado como Power BI

// Utilidad para mostrar tooltips con nombre de herramienta
const ToolIcon = ({ icon, name }) => (
  <OverlayTrigger placement="top" overlay={<Tooltip>{name}</Tooltip>}>
    <span style={{ fontSize: "1.25rem" }}>{icon}</span>
  </OverlayTrigger>
);

const featuredProjects = [
  {
    title: "Tic Tac Toe",
    description:
      "Juego clásico desarrollado con React, usando componentes reutilizables y estado local.",
    repo: "https://github.com/AndresBaldeonMora/TicTacToe",
    demo: "https://tictactoeurp.netlify.app/",
    tools: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiCss3 />, name: "CSS3" },
    ],
  },
  {
    title: "MovieFinder (Mobile App)",
    description:
      "Aplicación móvil para buscar películas usando una API externa. Desarrollada con React Native.",
    repo: "https://github.com/AndresBaldeonMora/MovieFinder",
    demo: "",
    tools: [
      { icon: <FaReact />, name: "React Native" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
  },

  {
    title: "Analisis RFM de Clientes para eCommerce",
    description:
      "Proyecto completo de analítica con SQL, Power BI y Python.",
    repo: "https://github.com/AndresBaldeonMora/An-lisis-RFM-de-Clientes-para-eCommerce",
    demo: "",
    tools: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <BiBarChartAlt2 />, name: "Power BI" },
    ],
  },
  {
    title: "Proyecto en construcción",
    description:
      "Este proyecto está en desarrollo. Próximamente estará disponible para explorar.",
    repo: "",
    demo: "",
    tools: [],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#063970" }}
    >
      <Container>
        <h2 className="text-center text-white mb-5">Proyectos destacados</h2>
        <Row className="g-4">
          {featuredProjects.map((project, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card
                className="h-100 text-white border-0 shadow-sm"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "0.9rem",
                      color: "#e0e0e0",
                      fontWeight: 300,
                    }}
                  >
                    {project.description}
                  </Card.Text>

                  {/* Herramientas usadas */}
                  {project.tools.length > 0 && (
                    <div className="d-flex gap-3 mt-3 text-info flex-wrap">
                      {project.tools.map((tool, iconIdx) => (
                        <ToolIcon
                          key={iconIdx}
                          icon={tool.icon}
                          name={tool.name}
                        />
                      ))}
                    </div>
                  )}
                </Card.Body>

                <Card.Footer className="bg-transparent border-0 d-flex flex-wrap gap-2">
                  {project.demo && (
                    <Button
                      variant="outline-info"
                      size="sm"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Ver en Web
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      variant="outline-light"
                      size="sm"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="me-1" />
                      Ver en GitHub
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botón "Ver más" */}
        <div className="text-center mt-5">
          <Button
            variant="outline-light"
            href="https://github.com/AndresBaldeonMora?tab=repositories"
            target="_blank"
          >
            Ver más en GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
