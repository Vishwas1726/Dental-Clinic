import React, { useEffect, useRef, useState } from "react";
import "../styles/Stats.css";

function AnimatedCounter({ target, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { label: "Patients Treated", value: 5000, suffix: "+", icon: "🦷" },
  { label: "Years of Excellence", value: 10, suffix: "+", icon: "🏆" },
  { label: "Treatments Offered", value: 6, suffix: "", icon: "💊" },
  { label: "Patient Satisfaction", value: 98, suffix: "%", icon: "⭐" },
];

function StatsSection() {
  return (
    <section className="stats-section" aria-label="Our Achievements">
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
            <div className="stat-number">
              <AnimatedCounter target={stat.value} />
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
