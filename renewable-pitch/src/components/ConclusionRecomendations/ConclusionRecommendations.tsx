"use client";

import React, { useEffect, useState } from "react";
import HyperText from "@/components/ui/hyper-text";
import "./ConclusionRecommendations.css";

export default function ConclusionRecommendations() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".circle-center");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25;
        if (isVisible) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="conclusion-recommendations">
      <h2 className="section-title">Conclusion and Recommendations</h2>
      <div className="circular-visualization">
        <div className="circle-center">
          {inView ? (
            <>
              <HyperText
                className="recommendation-title"
                duration={80}
                text="Recommendation"
              />
              <HyperText
                className="recommendation-details"
                duration={100}
                text="Long ENPH for a 12-18 month horizon."
              />
            </>
          ) : (
            <>
              <h3 className="recommendation-title" style={{ opacity: 0 }}>
                Recommendation
              </h3>
              <p className="recommendation-details" style={{ opacity: 0 }}>
                Long ENPH for a 12-18 month horizon.
              </p>
            </>
          )}
        </div>
        <div className="circle-segments">
          <div className="segment">
            <h4>Macro Tailwinds</h4>
            <p>Global climate policies and investments in renewable energy drive growth.</p>
          </div>
          <div className="segment">
            <h4>Strong Fundamentals</h4>
            <p>
              Enphase shows consistent revenue growth, a robust balance sheet, and high
              profitability.
            </p>
          </div>
          <div className="segment">
            <h4>Catalysts</h4>
            <p>Tax incentives, European market expansion, and new product launches.</p>
          </div>
          <div className="segment">
            <h4>Suggested Allocation</h4>
            <p>5% of portfolio allocated to ENPH. Quarterly monitoring recommended.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
