"use client";

import "./ConclusionRecommendations.css";

export default function ConclusionRecommendations() {
  const justifications = [
    {
      icon: "🌍",
      title: "Macro Tailwinds",
      description:
        "Global climate policies and increasing investments in renewable energy drive significant growth opportunities.",
    },
    {
      icon: "📈",
      title: "Strong Fundamentals",
      description:
        "Enphase shows consistent revenue growth, a robust balance sheet, and high profitability.",
    },
    {
      icon: "⚡",
      title: "Catalysts",
      description:
        "Tax incentives, European market expansion, and new product launches drive near-term growth.",
    },
  ];

  return (
    <section className="conclusion-section">
      <h2 className="section-title">Conclusion and Recommendations</h2>

      {/* Recommendation Highlight */}
      <div className="recommendation-card">
        <h3>Recommendation: <span className="highlight">Long ENPH</span></h3>
        <p>For a 12-18 month horizon, leveraging renewable energy sector growth.</p>
      </div>

      {/* Justifications */}
      <div className="justifications">
        {justifications.map((item, index) => (
          <div key={index} className="justification-item">
            <div className="justification-icon">{item.icon}</div>
            <div className="justification-content">
              <h4 className="justification-title">{item.title}</h4>
              <p className="justification-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Allocation */}
      <div className="allocation-card">
        <h4>Suggested Allocation</h4>
        <p>
          <strong>5%</strong> of portfolio allocated to ENPH.
        </p>
        <h4>Monitoring</h4>
        <p>Quarterly performance reviews and updates on sector developments.</p>
      </div>
    </section>
  );
}
