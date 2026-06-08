import React, { useMemo } from "react";
import "../styles/Confetti.css";

const COLORS = [
  "#D1B994", // champagne gold
  "#8C704B", // warm oak
  "#FDFBF7", // cream white
  "#2D2823", // deep bronze
  "#B89A6A", // mid gold
  "#E8D5B0", // pale champagne
  "#c0a87a", // sand
  "#f0e0c0", // light linen
];

const SHAPES = ["square", "circle", "ribbon"];

function Confetti() {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      left: Math.random() * 100,
      size: Math.random() * 10 + 6,
      delay: Math.random() * 1.5,
      duration: Math.random() * 2 + 2,
      rotation: Math.random() * 720 - 360,
      drift: (Math.random() - 0.5) * 120,
    }));
  }, []);

  return (
    <div className="confetti-wrapper" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`confetti-particle ${p.shape}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: p.shape === "ribbon" ? `${p.size * 3}px` : `${p.size}px`,
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--rotation": `${p.rotation}deg`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
