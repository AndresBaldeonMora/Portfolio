import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ScrollTimeline from "./components/ScrollTimeline";
import SkillsChart from "./components/SkillsChart";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#063970",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontFamily: "'Segoe UI', sans-serif",
          textAlign: "center",
          transition: "opacity 0.5s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          ¡Bienvenido!
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "300",
            color: "#e0e0e0",
            marginBottom: "2rem",
          }}
        >
          Gracias por visitar mi portafolio web
        </p>

        {/* Loader animado */}
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#ffffff33",
            overflow: "hidden",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "100%",
              backgroundColor: "#ffffff",
              animation: "loaderSlide 1s infinite ease-in-out",
            }}
          />
        </div>

        {/* Animación CSS */}
        <style>
          {`
            @keyframes loaderSlide {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(50%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <>
      <ScrollTimeline />
      <Header />
      <Home />
      <SkillsChart />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
};

export default App;
