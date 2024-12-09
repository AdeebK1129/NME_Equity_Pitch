import "./ClientProfile.css";

export default function ClientProfile() {
  return (
    <section className="client-profile-section" id="client-profile">
      <div className="client-profile-container">
        {/* Title */}
        <h2 className="client-profile-title">Who Is This For?</h2>
        <div className="client-profile-content">
          {/* Left Column */}
          <div className="client-profile-text">
            <h3>About the Client</h3>
            <p>
              This pitch is designed for an <strong>Asset Manager</strong>—someone who oversees investments for others—looking for new ways to grow their money.
            </p>
            <p>
              The goal is to achieve <strong>long-term returns</strong>, even if it means accepting a moderate-to-high level of risk along the way.
            </p>
            <h3>The Investment Strategy</h3>
            <p>
              This strategy focuses on investing in sectors, like renewable energy, that are poised for growth due to <strong>macroeconomic trends</strong>. These trends include global shifts like government support for clean energy and growing demand for sustainable solutions.
            </p>
            <ul className="key-points">
              <li>
                <strong>Type:</strong> Asset Manager seeking growth opportunities.
              </li>
              <li>
                <strong>Goal:</strong> Moderate-to-high risk tolerance with a focus on long-term returns.
              </li>
              <li>
                <strong>Strategy:</strong> Targeting sectors benefiting from macroeconomic trends.
              </li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="client-profile-visual">
            <img
              src="/assets/stock.jpg"
              alt="Renewable Energy Investment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
