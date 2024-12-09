import "./Agenda.css";

export default function Agenda() {
  const agendaItems = [
    { text: "1. Client Profile and Investment Goals", hash: "#client-profile" },
    { text: "2. Top-Down and Sector Analysis", hash: "#sector-analysis" },
    { text: "3. Selected Asset and Rationale", hash: "#selected-asset" },
    { text: "4. Valuation and Catalysts", hash: "#valuation-catalysts" },
    { text: "5. Conclusion and Recommendations", hash: "#conclusion" },
  ];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <h2 className="agenda-title">Agenda</h2>
        <ul className="agenda-list">
          {agendaItems.map((item, index) => (
            <li key={index} className="agenda-item">
              <a href={item.hash}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
