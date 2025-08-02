import React, { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
];

const ScrollTimeline = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="d-none d-lg-flex"
      style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        zIndex: 9999,
      }}
    >
      {/* Línea vertical */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "rgba(255,255,255,0.3)",
        }}
      />

      {/* Puntos de parada */}
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          title={section.label}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor:
              activeSection === section.id ? "#00d4ff" : "rgba(255, 255, 255, 0.3)",
            border: "2px solid #00d4ff",
            zIndex: 1,
            transition: "all 0.3s ease",
            boxShadow:
              activeSection === section.id
                ? "0 0 8px #00d4ff"
                : "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        ></a>
      ))}
    </div>
  );
};

export default ScrollTimeline;
