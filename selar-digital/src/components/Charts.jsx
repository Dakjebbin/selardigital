import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Charts = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getChartOptions = () => ({
    series: [52.8, 26.8, 20.4],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
    },
    plotOptions: {
      pie: {
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Direct", "Organic search", "Referrals"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
    },
    xaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
  });

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new ApexCharts(chartRef.current, getChartOptions());
      chartInstance.current.render();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-start w-full">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Website traffic</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">31 Nov - 31 Dec</span>
      </div>

      <div className="py-6" ref={chartRef}></div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between items-center">
        <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          Last 7 days
        </button>
        <a
          href="#"
          className="uppercase text-sm font-semibold inline-flex items-center text-blue-600 hover:text-blue-700 dark:hover:text-blue-500"
        >
          Traffic analysis
          <svg
            className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Charts;
