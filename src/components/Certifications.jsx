import React from "react";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "SQL Total – Domina Bases de Datos de 0 a Avanzado",
    platform: "Udemy",
    date: "Jul 2025",
    description:
      "Curso enfocado en consultas SQL aplicadas al análisis de datos.",
    link: "https://www.udemy.com/certificate/UC-b807612e-13f5-4891-8441-5dc598af38d4/",
  },
  {
    title: "Power BI Total – Analista de Datos Avanzado",
    platform: "Udemy",
    date: "Jul 2025",
    description:
      "Visualización de datos y desarrollo de dashboards empresariales.",
    link: "https://www.udemy.com/certificate/UC-0ad89183-e090-46c7-a5cf-c0e0fcfeddc9/",
  },
  {
    title: "Machine Learning con Python",
    platform: "Universidad Nacional de Ingeniería",
    date: "Ago 2025",
    description: "Fundamentos de Machine Learning con Python.",
    link: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_17c0aeb082655395d3574981ed292932",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    platform: "VABRO.AI / VMEDU",
    date: "Sept. 2025",
    description: "Fundamentos de Scrum para gestión ágil de proyectos.",
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-AndresBaldeon-1102093.pdf",
  },
  {
    title: "Scrum for Ops and DevOps Fundamentals Certified (SODFC)",
    platform: "VABRO.AI / VMEDU",
    date: "Sept. 2025",
    description: "Scrum aplicado a Operaciones y DevOps.",
    link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1102101",
  },
];

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section
      id="certifications"
      className="py-5"
      style={{ backgroundColor: "#063970" }}
    >
      <Container>
        <h2 className="text-white text-center mb-4">Certificaciones</h2>

        <Slider {...settings}>
          {certifications.map((cert, idx) => (
            <div key={idx} className="px-3">
              <Card
                className="h-100 border-0 shadow-sm text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold">{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-info">
                    {cert.platform} · {cert.date}
                  </Card.Subtitle>
                  <Card.Text style={{ fontWeight: 300, color: "#e0e0e0" }}>
                    {cert.description}
                  </Card.Text>

                  {cert.link && (
                    <Button
                      variant="outline-info"
                      size="sm"
                      href={cert.link}
                      target="_blank"
                      className="mt-3"
                    >
                      Ver certificado
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Certifications;
