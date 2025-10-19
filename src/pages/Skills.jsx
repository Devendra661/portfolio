import React, { useEffect, useState } from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiCplusplus, SiDotnet, SiHtml5, SiCss3, SiTailwindcss
} from "react-icons/si";
import {
  FaStar, FaBolt, FaCog, FaCloud, FaCode,
  FaFire, FaRocket, FaBug, FaGem, FaAnchor
} from "react-icons/fa";

const techIcons = [
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiCplusplus, SiDotnet, SiHtml5, SiCss3, SiTailwindcss
];

const techColors = [
  "#F7DF1E", "#3178C6", "#61DAFB", "#339933", "#3776AB",
  "#00599C", "#512BD4", "#E34F26", "#1572B6", "#38B2AC"
];

const outerIcons = [
  FaStar, FaBolt, FaCog, FaCloud, FaCode,
  FaFire, FaRocket, FaBug, FaGem, FaAnchor
];

const outerColors = [
  "#FFD700", "#FF4500", "#00CED1", "#7B68EE", "#FF69B4",
  "#FF8C00", "#00FA9A", "#FF1493", "#00BFFF", "#ADFF2F"
];

export default function Skills() {
  const [radiusOuter, setRadiusOuter] = useState(200);
  const [radiusInner, setRadiusInner] = useState(140);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      // For mobile, increase gap between circles
      if (width < 640) {
        // smaller inner, slightly larger outer
        setRadiusOuter(Math.min(Math.max(width * 0.25, 120), 220)); // wider outer orbit
        setRadiusInner(Math.min(Math.max(width * 0.12, 60), 100));  // tighter inner orbit
      } else {
        // Normal sizes for tablet & up
        const outer = Math.min(Math.max(width * 0.20, 140), 240);
        const inner = Math.min(Math.max(width * 0.15, 110), 180);
        setRadiusOuter(outer);
        setRadiusInner(inner);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section id="skills" className="relative py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          I’m currently looking to join a cross-functional team
        </h2>
        <p className="text-white/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          that values improving people’s lives through accessible design
        </p>
      </div>

      {/* Orbit Container */}
      <div className="relative max-w-[90vw] mx-auto h-[55vh] sm:h-[560px] overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-violet-500/20 blur-2xl" />
        </div>

        {/* Center Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 sm:w-28 h-16 sm:h-28 rounded-full bg-violet-400/20 flex items-center justify-center border border-violet-400/40">
            <span className="text-2xl sm:text-4xl font-bold">Σ</span>
          </div>
        </div>

        {/* Outer Icons */}
        <div className="absolute inset-0 animate-[spin_36s_linear_infinite]">
          {outerIcons.map((Icon, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${i * (360 / outerIcons.length)}deg) translateX(${radiusOuter}px) rotate(-${i * (360 / outerIcons.length)}deg)`
              }}
            >
              <Icon
                className="transition-transform hover:scale-125"
                style={{
                  color: outerColors[i],
                  fontSize: `clamp(1.1rem, 1.6vw, 2rem)`
                }}
              />
            </span>
          ))}
        </div>

        {/* Inner Tech Icons */}
        <div className="absolute inset-0 animate-[spin_24s_linear_infinite_reverse]">
          {techIcons.map((Icon, i) => {
            const angle = (i * 360) / techIcons.length;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radiusInner}px) rotate(-${angle}deg)`
                }}
              >
                <Icon
                  className="transition-transform hover:scale-125"
                  style={{
                    color: techColors[i],
                    fontSize: `clamp(1.4rem, 2vw, 3rem)`
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
