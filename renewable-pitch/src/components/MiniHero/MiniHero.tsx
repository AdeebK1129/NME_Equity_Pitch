"use client";

import React, { useState, useEffect, useRef } from "react";
import "./MiniHero.css";
import TypingAnimation from "@/components/ui/typing-animation";

export default function MiniHero() {
  const [isVisible, setIsVisible] = useState(false);
  const miniHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is visible
    );

    if (miniHeroRef.current) {
      observer.observe(miniHeroRef.current);
    }

    return () => {
      if (miniHeroRef.current) {
        observer.unobserve(miniHeroRef.current);
      }
    };
  }, []);

  return (
    <div className="mini-hero" ref={miniHeroRef}>
      <h1 className="mini-hero-title">Selected Asset: Enphase Energy (ENPH)</h1>
      <div className="mini-hero-tagline">
        {isVisible && (
          <TypingAnimation
            text="Discover how Enphase Energy is leading the way in solar technology with its innovative microinverters and energy storage systems."
            duration={50}
          />
        )}
      </div>
    </div>
  );
}
