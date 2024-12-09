"use client";

import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "./ValuationCatalysts.css";

// Register necessary chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function ValuationCatalysts() {
  const [inView, setInView] = useState(false);
  const [radarChartData, setRadarChartData] = useState([0, 0, 0]); // Initialize empty chart data

  // Detect when the radar chart section is in view
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".radar-chart-section");
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

  // Populate radar chart data once in view
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setRadarChartData([40, 20, 240]);
      }, 300); // Add a delay for animation
    }
  }, [inView]);

  const radarData = {
    labels: ["P/E Ratio", "EV/EBITDA", "DCF"],
    datasets: [
      {
        label: "Valuation Metrics",
        data: radarChartData,
        backgroundColor: "rgba(72, 187, 120, 0.3)", // Brighter green transparent
        borderColor: "#48bb78", // Brighter green
        borderWidth: 3,
        pointBackgroundColor: "#48bb78",
        pointBorderColor: "#ffffff", // White border for points
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#48bb78",
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          max: 250, // Adjusted max scale to better fit the data
          color: "#e2e8f0", // Light text color for the grid labels
          backdropColor: "rgba(30, 30, 30, 0.7)", // Background color of the scale boxes
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Subtle gridlines
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.3)", // Subtle angle lines
        },
        pointLabels: {
          color: "#48bb78", // Sets the color for the corner labels
          font: {
            size: 14, // Adjusts font size if needed
            weight: "bold", // Adjusts font weight for better readability
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const catalystItems = [
    {
      icon: "⚡",
      title: "U.S. Tax Credits",
      description: "Driving widespread solar adoption through incentives.",
    },
    {
      icon: "🌍",
      title: "European Expansion",
      description:
        "Enphase is gaining market share in Europe amid an energy crisis and demand for clean energy.",
    },
    {
      icon: "🔧",
      title: "New Product Launches",
      description: "Introducing IQ8 microinverters with improved efficiency.",
    },
    {
      icon: "🏠",
      title: "Homebuilder Partnerships",
      description: "Collaborating with builders to integrate solar solutions into homes.",
    },
  ];

  return (
    <section className="valuation-catalysts-section" id="valuation-catalysts">
      <h2 className="section-title">Valuation and Catalysts</h2>

      {/* Radar Chart Section */}
      <div className="radar-chart-section">
        <Radar data={radarData} options={radarOptions} />
        <div className="chart-legend">
          <p>
            <strong>P/E Ratio:</strong> Measures how much investors are willing to pay for every
            dollar of earnings. A high value (like 40x) indicates strong growth expectations.
          </p>
          <p>
            <strong>EV/EBITDA:</strong> Compares a company's valuation to its operational
            profitability. Enphase’s 20x value is competitive with industry peers, signaling
            efficiency.
          </p>
          <p>
            <strong>DCF (Discounted Cash Flow):</strong> Estimates the intrinsic value of a stock.
            Enphase’s DCF value ($240) suggests a 20% upside, indicating the stock is undervalued
            and presents an attractive opportunity.
          </p>
        </div>
      </div>

      {/* Catalyst Cards Section */}
      <div className="catalyst-cards">
        {catalystItems.map((item, index) => (
          <div key={index} className="catalyst-card">
            <div className="catalyst-icon">{item.icon}</div>
            <h3 className="catalyst-title">{item.title}</h3>
            <p className="catalyst-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
