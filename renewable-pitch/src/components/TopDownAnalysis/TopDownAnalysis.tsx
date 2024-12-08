import "./TopDownAnalysis.css";

export default function TopDownAnalysis() {
  const macroItems = [
    {
      icon: "🌍",
      title: "Global Climate Policies",
      description:
        "Governments worldwide are implementing stricter climate policies to reduce carbon emissions and combat climate change. These policies prioritize renewable energy, creating a massive shift towards clean energy adoption.",
    },
    {
      icon: "💸",
      title: "ESG Investments",
      description:
        "Investments in Environmental, Social, and Governance (ESG) funds are soaring, as businesses and investors prioritize sustainability. Renewable energy projects are a top focus due to their long-term benefits and profitability.",
    },
    {
      icon: "🏛️",
      title: "Government Incentives",
      description:
        "Policies like the U.S. Inflation Reduction Act offer tax credits and funding for renewable energy projects. This significantly reduces costs for companies and encourages widespread adoption of solar and wind power.",
    },
  ];

  const sectorItems = [
    {
      title: "Rapid Industry Growth",
      description:
        "The renewable energy sector is projected to grow at an annual rate of 9% over the next decade, outpacing many other industries.",
    },
    {
      title: "Solar and Wind Leading the Way",
      description:
        "Solar and wind energy are dominating growth due to their decreasing costs and high efficiency. They have become some of the cheapest energy sources worldwide.",
    },
    {
      title: "Government Support",
      description:
        "Subsidies and tax incentives from governments around the world are accelerating the adoption of renewable energy, making it accessible in both developed and emerging markets.",
    },
  ];

  return (
    <section className="top-down-analysis-section">
      <h2 className="section-title">Top-Down Analysis: Why Renewable Energy is Booming</h2>

      {/* Macro Analysis Section */}
      <div className="macro-analysis">
        <h3 className="analysis-subtitle">Macro Analysis</h3>
        <div className="macro-cards">
          {macroItems.map((item, index) => (
            <div key={index} className="macro-card">
              <div className="macro-icon">{item.icon}</div>
              <h4 className="macro-title">{item.title}</h4>
              <p className="macro-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sector Analysis Section */}
      <div className="sector-analysis">
        <h3 className="analysis-subtitle">Sector Analysis</h3>
        <div className="sector-cards">
          {sectorItems.map((item, index) => (
            <div key={index} className="sector-card">
              <h4 className="sector-title">{item.title}</h4>
              <p className="sector-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
