"use client";

import Marquee from "@/components/ui/marquee";
import "./EnphaseMarquee.css";

const articles = [
    {
      title: "Enphase Energy Sees US Solar Demand Rebounding",
      description: "Enphase reports an 8% increase in U.S. product sell-through rates, indicating a recovery in solar demand.",
      url: "https://www.investopedia.com/enphase-energy-sees-us-solar-demand-rebounding-8682996",
    },
    {
      title: "Enphase Energy Beats Q2 Operating Profit Estimates",
      description: "Fueled by U.S. recovery, Enphase surpasses analysts' expectations with a net operating income of $61.1 million.",
      url: "https://www.reuters.com/business/energy/enphase-energy-beats-q2-operating-profit-estimates-fueled-by-us-recovery-2024-07-23/",
    },
    {
      title: "Barclays Maintains Buy Rating on Enphase Energy",
      description: "Analysts at Barclays uphold their 'Buy' rating, setting a price target of $114 for Enphase Energy.",
      url: "https://markets.businessinsider.com/news/stocks/barclays-keeps-their-buy-rating-on-enphase-energy-enph-1034107018",
    },
    {
      title: "Enphase Energy Launches the IQ PowerPack 1500",
      description: "Introducing a 1500 Wh portable energy system to power small appliances at home, work, or outdoors.",
      url: "https://investor.enphase.com/news-releases/news-release-details/enphase-energy-launches-iq-powerpack-1500-united-states-and",
    },
    {
      title: "Enphase Energy Begins Shipments for IQ Battery 5Ps",
      description: "Enphase starts U.S. shipments of its latest battery systems, enhancing energy storage solutions.",
      url: "https://www.stocktitan.net/news/ENPH/enphase-energy-begins-shipments-for-iq-battery-5ps-produced-in-the-8mwkz6id3bl6.html#:~:text=Enphase%20Energy%20has%20announced%20the,residential%20solar%20and%20battery%20projects.",
    },
    {
      title: "Enphase Energy to Lay Off 17% of Workforce",
      description: "Company announces restructuring, impacting about 500 employees to streamline operations.",
      url: "https://www.reuters.com/business/energy/enphase-energy-layoff-17-workforce-2024-11-08/",
    },
    {
      title: "Enphase Reports Weaker Quarter, U.S. Business Not the Problem",
      description: "Despite a 43% revenue rise in the U.S., European demand softens, impacting overall performance.",
      url: "https://www.marketwatch.com/story/enphase-reports-weaker-quarter-and-this-time-its-u-s-business-is-not-the-problem-df6b60d3",
    },
    {
      title: "Enphase Stock Has Plunged Since Trump's Win. The Case for Buying Now.",
      description: "Despite recent stock declines, analysts see potential buying opportunities for Enphase.",
      url: "https://www.barrons.com/articles/enphase-stock-price-trump-win-cef4e810",
    },
  ];
  

export default function EnphaseMarquee() {
  return (
    <div className="enphase-marquee">
      <Marquee pauseOnHover={true}>
        {articles.map((article, index) => (
          <div key={index} className="marquee-card">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="marquee-link">
              <h3 className="marquee-title">{article.title}</h3>
              <p className="marquee-description">{article.description}</p>
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
