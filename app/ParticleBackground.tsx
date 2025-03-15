"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Separate client component for particles
const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white opacity-30"
          animate={{
            y: ["0vh", "100vh"],
            x: `${particle.x}vw`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          initial={{ x: `${particle.x}vw`, y: "-10vh" }}
        />
      ))}
    </div>
  );
};

// Disable pre-rendering
export default dynamic(() => Promise.resolve(ParticleBackground), {
  ssr: false,
});
