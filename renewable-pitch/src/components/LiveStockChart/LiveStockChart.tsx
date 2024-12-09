"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import "./LiveStockChart.css";

// Register necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function LiveStockChart() {
  const [stockData, setStockData] = useState<number[]>([]);
  const [timeLabels, setTimeLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inView, setInView] = useState(false);

  const fetchStockData = async () => {
    try {
      // Check for cached data
      const cachedData = localStorage.getItem("stockData");
      const cachedTimeLabels = localStorage.getItem("timeLabels");
      const cachedTimestamp = localStorage.getItem("cacheTimestamp");

      const isCacheValid =
        cachedData &&
        cachedTimeLabels &&
        cachedTimestamp &&
        Date.now() - parseInt(cachedTimestamp, 10) < 15 * 60 * 1000; // Cache is valid for 15 minutes

      if (isCacheValid) {
        setStockData(JSON.parse(cachedData));
        setTimeLabels(JSON.parse(cachedTimeLabels));
        setIsLoading(false);
        return;
      }

      // Fetch new data if cache is invalid
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: "TIME_SERIES_INTRADAY",
          symbol: "ENPH",
          interval: "1min",
          apikey: process.env.NEXT_PUBLIC_STOCK_API_KEY,
        },
      });

      const timeSeries = response.data["Time Series (1min)"];
      if (timeSeries) {
        const times = Object.keys(timeSeries).slice(0, 30).reverse();
        const prices = times.map((time) => parseFloat(timeSeries[time]["1. open"]));

        setStockData(prices);
        setTimeLabels(times);
        setIsLoading(false);

        // Cache the data and timestamp
        localStorage.setItem("stockData", JSON.stringify(prices));
        localStorage.setItem("timeLabels", JSON.stringify(times));
        localStorage.setItem("cacheTimestamp", Date.now().toString());
      } else {
        console.error("Alpha Vantage API response:", response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching stock data:", error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error("Error fetching stock data:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".live-stock-chart-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25;
        if (isVisible && !inView) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  useEffect(() => {
    if (inView) {
      fetchStockData();
      const interval = setInterval(fetchStockData, 60000); // Refresh every minute
      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [inView]);

  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: "ENPH Stock Price (USD)",
        data: stockData,
        fill: false,
        borderColor: "rgba(56, 161, 105, 0.8)", // Green
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#e2e8f0", // Light text for the legend
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          color: "#e2e8f0", // Light text for the X-axis title
        },
        ticks: {
          color: "#e2e8f0", // Light text for X-axis labels
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle gridlines for X-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Stock Price (USD)",
          color: "#e2e8f0", // Light text for the Y-axis title
        },
        ticks: {
          color: "#e2e8f0", // Light text for Y-axis labels
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle gridlines for Y-axis
        },
      },
    },
  };

  return (
    <section className="live-stock-chart-section">
      <h2 className="section-title">Live ENPH Stock Performance</h2>
      <div className="chart-container">
        {isLoading && !inView ? (
          <p>Loading stock data...</p>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    </section>
  );
}
