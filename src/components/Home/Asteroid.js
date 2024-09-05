import React, { useEffect, useState, useRef } from "react";
import "./Asteroid.css";

function Asteroid({ angle, onExplode, initialSize }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [size, setSize] = useState(initialSize);

  const asteroidRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      const minSize = Math.min(window.innerWidth, window.innerHeight);
      setSize(initialSize * (minSize / 1000)); // Adjust size based on screen size
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [initialSize]);

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
        const distance = size * (0.5 + Math.random() * 0.5);
        particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      });
    }
  }, [isExploding, size]);

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
        width: `${size}px`,
        height: `${size}px`,
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
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  useEffect(() => {
    const launchTimer = setTimeout(() => {
      setLaunch(true);
    }, 3000); // Launch after 3 seconds

    const speechBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 4000); // Show speech bubble 1 second after launch

    const hideSpeechBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 14000); // Hide speech bubble after 10 seconds

    return () => {
      clearTimeout(launchTimer);
      clearTimeout(speechBubbleTimer);
      clearTimeout(hideSpeechBubbleTimer);
    };
  }, []);

  return (
    <div
      className="rocket-container"
      style={{ bottom: launch ? "110%" : "-100px" }}
    >
      <div className="rocket">🚀</div>
      {showSpeechBubble && (
        <div className="speech-bubble">
          Help me! Destroy asteroids by clicking on them!
        </div>
      )}
    </div>
  );
}

function AsteroidField() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const createAsteroid = () => {
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
      const angle = Math.random() * Math.PI * 2;
      const baseSize = 80; // Base size from the original implementation
      const sizeMultiplier = 1 + Math.random(); // Random multiplier between 1 and 2
      const initialSize = baseSize * sizeMultiplier;

      setAsteroids((prev) => [...prev, { id: Date.now(), angle, initialSize }]);
      setTimeout(createAsteroid, delay);
    };

    createAsteroid();

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
          initialSize={asteroid.initialSize}
          onExplode={() => handleExplode(asteroid.id)}
        />
      ))}
      <Rocket />
    </>
  );
}

export default AsteroidField;
