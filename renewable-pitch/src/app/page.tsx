import BoxReveal from "@/components/ui/box-reveal";
import Agenda from "@/components/Agenda/Agenda";
import ClientProfile from "@/components/ClientProfile/ClientProfile";
import TopDownAnalysis from "@/components/TopDownAnalysis/TopDownAnalysis";
import MiniHero from "@/components/MiniHero/MiniHero";
import SplitContent from "@/components/SplitContent/SplitContent";
import ValuationCatalysts from "@/components/ValuationCatalysts/ValuationCatalysts";
import ConclusionRecommendations from "@/components/ConclusionRecomendations/ConclusionRecommendations";
import EnphaseMarquee from "@/components/EnphaseMarquee/EnphaseMarquee";
import LiveStockChart from "@/components/LiveStockChart/LiveStockChart";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-gray-900">
        <BoxReveal boxColor="#00ff99" duration={1.5}>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-green-500 md:text-7xl leading-tight">
              Equity Pitch for Asset Manager: Renewable Energy
            </h1>
            <p className="mt-6 text-lg font-light text-gray-300 leading-relaxed">
              Capturing Alpha in the Renewable Energy Sector
            </p>
          </div>
        </BoxReveal>
      </section>

      {/* Agenda Section */}
      <Agenda />

      {/* Client Profile Section */}
      <ClientProfile />

      {/* Top-Down Analysis Section */}
      <TopDownAnalysis />

      {/* Selected Asset Section */}
      <MiniHero />
      <EnphaseMarquee />
      <SplitContent />
      
      {/* Live Stock Chart */}
      <LiveStockChart />

      {/* Valuation and Catalysts Section */}
      <ValuationCatalysts />

      {/* Conclusion Section */}
      <ConclusionRecommendations />
    </div>
  );
}
