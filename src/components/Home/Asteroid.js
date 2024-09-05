import React, { useEffect, useState, useRef } from "react";
import "./Asteroid.css";

function Asteroid({ angle, onExplode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const asteroidRef = useRef(null);

  useEffect(() => {
    const windowDiagonal = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2
    );
    const startX = Math.cos(angle) * windowDiagonal;
    const startY = Math.sin(angle) * windowDiagonal;
    const endX = Math.cos(angle + Math.PI) * windowDiagonal;
    const endY = Math.sin(angle + Math.PI) * windowDiagonal;

    setPosition({ x: startX, y: startY });
    setIsVisible(true);

    const timer = setTimeout(() => {
      setPosition({ x: endX, y: endY });
    }, 100);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [angle]);

  useEffect(() => {
    if (isExploding && asteroidRef.current) {
      const rect = asteroidRef.current.getBoundingClientRect();
      const particles = document.querySelectorAll(".particle, .flame");
      particles.forEach((particle) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 25 + Math.random() * 50;
        particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      });
    }
  }, [isExploding]);

  const handleClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsVisible(false);
      onExplode();
    }, 1000);
  };

  const craters = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className="crater"
      style={{
        width: `${10 + Math.random() * 15}%`,
        height: `${10 + Math.random() * 15}%`,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      }}
    />
  ));

  if (!isVisible) return null;

  return (
    <div
      ref={asteroidRef}
      className={`asteroid-wrapper ${isExploding ? "exploding" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onClick={handleClick}
    >
      <div className="asteroid">{craters}</div>
      {isExploding && (
        <div className="explosion">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={`particle-${i}`} className="particle" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`flame-${i}`} className="flame" />
          ))}
        </div>
      )}
    </div>
  );
}

function Rocket() {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const launchTimer = setTimeout(() => {
      setLaunch(true);
    }, 5000); // Changed from 10000 to 5000 (5 seconds)

    return () => clearTimeout(launchTimer);
  }, []);

  return (
    <div className="rocket" style={{ bottom: launch ? "110%" : "-100px" }}>
      🚀
    </div>
  );
}

function AsteroidField() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const createAsteroid = () => {
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000); // Changed from 5-10 seconds to 2-5 seconds
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      setAsteroids((prev) => [...prev, { id: Date.now(), angle }]);
      setTimeout(createAsteroid, delay);
    };

    // Start creating asteroids immediately
    createAsteroid();

    // Clean up old asteroids
    const cleanupInterval = setInterval(() => {
      setAsteroids((prev) =>
        prev.filter((asteroid) => Date.now() - asteroid.id < 16000)
      );
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  const handleExplode = (id) => {
    setAsteroids((prev) => prev.filter((asteroid) => asteroid.id !== id));
  };

  return (
    <>
      {asteroids.map((asteroid) => (
        <Asteroid
          key={asteroid.id}
          angle={asteroid.angle}
          onExplode={() => handleExplode(asteroid.id)}
        />
      ))}
      <Rocket />
    </>
  );
}

export default AsteroidField;
