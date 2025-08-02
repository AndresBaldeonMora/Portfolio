import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

// Datos con niveles categóricos
const skills = [
  { name: "SQL", level: "Avanzado" },
  { name: "Python", level: "Intermedio" },
  { name: "Power BI", level: "Avanzado" },
  { name: "Excel", level: "Avanzado" },
  { name: "PowerPoint", level: "Intermedio" },
  { name: "Tableau", level: "Intermedio" },
  { name: "Git", level: "Intermedio" },
  { name: "React", level: "Intermedio" },
  { name: "AWS", level: "Básico" },
];

// Colores según nivel
const getColor = (level) => {
  switch (level) {
    case "Avanzado":
      return "#00e676";
    case "Intermedio":
      return "#ffea00";
    case "Básico":
    default:
      return "#ff5252";
  }
};

// Convertimos niveles a valores numéricos (para ubicar la barra en el gráfico)
const levelToIndex = {
  Básico: 1,
  Intermedio: 2,
  Avanzado: 3,
};

const SkillsChart = () => {
  const data = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Nivel",
        data: skills.map((s) => levelToIndex[s.level]),
        backgroundColor: skills.map((s) => getColor(s.level)),
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        min: 0.5,
        max: 3.5,
        ticks: {
          callback: (value) => {
            if (value === 1) return "Básico";
            if (value === 2) return "Intermedio";
            if (value === 3) return "Avanzado";
            return "";
          },
          color: "#fff",
          stepSize: 1,
        },
        grid: {
          color: "#264d73",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const skill = skills[context.dataIndex];
            return `${skill.name}: ${skill.level}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
  };

  return (
    <div
      id="skills-levels"
      className="py-5"
      style={{ backgroundColor: "#063970" }}
    >
      <h2 className="text-center text-white mb-4">Nivel de habilidades</h2>

      <div className="d-flex justify-content-center gap-4 mb-3">
        <span style={{ color: "#ff5252" }}>🟥 Básico</span>
        <span style={{ color: "#ffea00" }}>🟨 Intermedio</span>
        <span style={{ color: "#00e676" }}>🟩 Avanzado</span>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsChart;
