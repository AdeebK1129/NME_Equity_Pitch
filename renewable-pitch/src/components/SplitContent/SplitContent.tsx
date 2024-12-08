import "./SplitContent.css";

export default function SplitContent() {
  const sections = [
    {
      title: "What They Do",
      description:
        "Enphase specializes in solar microinverters, which optimize the power output of solar panels. They also offer advanced energy storage systems, allowing homes to store and use solar power efficiently.",
      image: "/assets/enphase.webp",
    },
    {
      title: "Market Leadership",
      description:
        "In 2023, Enphase achieved 47% revenue growth year-over-year, showcasing its dominance in the renewable energy market. Its robust balance sheet positions it as a leader in the industry.",
      image: "/assets/enphase_growth.webp",
    },
    {
      title: "Why It Matters",
      description:
        "As solar installations increase globally, Enphase's innovative products are helping more homes and businesses transition to clean energy. This makes it a key player in the shift toward sustainable energy solutions.",
      image: "/assets/enphase_solar.jpg", 
    },
  ];

  return (
    <section className="split-content">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`split-content-row ${
            index % 2 === 0 ? "text-left" : "text-right"
          }`}
        >
          <div className="split-content-text">
            <h3 className="split-content-title">{section.title}</h3>
            <p className="split-content-description">{section.description}</p>
          </div>
          <div className="split-content-image">
            <img src={section.image} alt={section.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
