import "./TopDownAnalysis.css";

export default function TopDownAnalysis() {
  const macroItems = [
    {
      icon: "🌍",
      title: "Global Climate Policies",
      description:
        "Countries worldwide are pushing for clean energy to reduce emissions and meet sustainability goals.",
    },
    {
      icon: "💸",
      title: "ESG Investments",
      description:
        "Investors are funding Environmental, Social, and Governance (ESG) projects, with renewable energy leading the way.",
    },
    {
      icon: "🏛️",
      title: "Government Incentives",
      description:
        "Incentives like the U.S. Inflation Reduction Act make clean energy projects more affordable.",
    },
  ];

  return (
    <section className="top-down-analysis-section">
      <h2 className="section-title">The Big Picture: Why Renewable Energy Matters</h2>
      <div className="macro-cards">
        {macroItems.map((item, index) => (
          <div key={index} className="macro-card">
            <div className="macro-icon">{item.icon}</div>
            <h3 className="macro-title">{item.title}</h3>
            <p className="macro-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
