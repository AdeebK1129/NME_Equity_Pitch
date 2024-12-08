// src/components/Agenda/Agenda.tsx
import "./Agenda.css";

export default function Agenda() {
  const agendaItems = [
    "1. Client Profile and Investment Goals",
    "2. Top-Down and Sector Analysis",
    "3. Selected Asset and Rationale",
    "4. Valuation and Catalysts",
    "5. Conclusion and Recommendations",
  ];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <h2 className="agenda-title">Agenda</h2>
        <ul className="agenda-list">
          {agendaItems.map((item, index) => (
            <li key={index} className="agenda-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}