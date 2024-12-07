// src/components/Agenda/Agenda.tsx
import { AnimatedList } from "../ui/animated-list";


export default function Agenda() {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
          Agenda
        </h2>
        <AnimatedList delay={300}>
          {[
            "1. Client Profile and Investment Goals",
            "2. Top-Down and Sector Analysis",
            "3. Selected Asset and Rationale",
            "4. Valuation and Catalysts",
            "5. Conclusion and Recommendations",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-md mb-4"
            >
              {item}
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
