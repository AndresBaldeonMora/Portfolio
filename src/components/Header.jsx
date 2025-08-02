import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowScrollTop(currentScrollY > 300);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        variant="dark"
        sticky="top"
        className={`py-3 shadow-sm ${showNavbar ? "visible" : "invisible"}`}
        style={{
          background: "rgba(21, 76, 121, 0.9)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition: "transform 0.4s ease, opacity 0.4s ease",
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="#home"
            className="fw-bold fs-4 text-white mx-auto mx-lg-0"
            style={{ textAlign: "center" }}
          >
            Andrés
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="text-center text-lg-start">
              <Nav.Link href="#projects" className="text-white px-3">
                Proyectos
              </Nav.Link>
              <Nav.Link href="#certifications" className="text-white px-3">
                Certificaciones
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Botón volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-button"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#154c79",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "12px",
            zIndex: 9999,
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Header;
