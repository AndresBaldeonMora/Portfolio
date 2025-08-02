import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="py-4 mt-5"
      style={{
        backgroundColor: "#042f5e",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container
        className="text-center text-white-50"
        style={{ fontSize: "0.9rem" }}
      >
        © {new Date().getFullYear()} Miguel Andrés Baldeón Mora · Lima, Perú
      </Container>
    </footer>
  );
};

export default Footer;
