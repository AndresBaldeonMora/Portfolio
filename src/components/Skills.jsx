import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const skills = {
  "Datos & BI": ['SQL', 'Power BI', 'Python', 'Excel', 'Tableau'],
  "Analítica": ['Limpieza de datos', 'EDA', 'Dashboards', 'KPIs'],
  "Programación": ['Python', 'SQL', 'Power Query M'],
  "Herramientas": ['Power BI', 'MySQL/SQL Server', 'Git', 'VS Code'],
  "Cloud": ['AWS', 'AWS RDS'],
  "Idiomas": ['Español (nativo)', 'Inglés (intermedio)'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row>
          {Object.entries(skills).map(([category, items], idx) => (
            <Col key={idx} xs={12} md={6} lg={4} className="mb-4">
              <h5 className="text-uppercase text-info">{category}</h5>
              {items.map((skill, i) => (
                <Badge
                  key={i}
                  bg="light"
                  text="dark"
                  className="me-2 mb-2 px-3 py-2 rounded-pill"
                >
                  {skill}
                </Badge>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
