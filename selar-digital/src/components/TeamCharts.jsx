import React from 'react';
import Chart from 'react-apexcharts';

const TeamProgressCard = () => {
  const chartData = {
    series: [90, 85, 70],
    options: {
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
      chart: {
        type: "radialBar",
        height: 350,
        width: "100%",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB",
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "32%",
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: ["Done", "In progress", "To do"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Your team’s progress</h5>
          {/* Info Icon (non-functional popover placeholder) */}
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 ms-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
        </div>
      </div>

      {/* Status Summary */}
      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
        <div className="grid grid-cols-3 gap-3 mb-2">
          {[
            { count: 12, label: "To do", color: "orange" },
            { count: 23, label: "In progress", color: "teal" },
            { count: 64, label: "Done", color: "blue" },
          ].map(({ count, label, color }) => (
            <dl
              key={label}
              className={`bg-${color}-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]`}
            >
              <dt className={`w-8 h-8 rounded-full bg-${color}-100 dark:bg-gray-500 text-${color}-600 dark:text-${color}-300 text-sm font-medium flex items-center justify-center mb-1`}>
                {count}
              </dt>
              <dd className={`text-${color}-600 dark:text-${color}-300 text-sm font-medium`}>{label}</dd>
            </dl>
          ))}
        </div>

        {/* Show More Details Toggle - Placeholder functionality */}
        <button className="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center">
          Show more details
          <svg className="w-2 h-2 ms-1" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Details Section - Static content */}
        <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3 space-y-2">
          <dl className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <dt>Average task completion rate:</dt>
            <dd className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2.5 py-1 rounded-md flex items-center">
              <svg className="w-2.5 h-2.5 me-1.5" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
              </svg>
              57%
            </dd>
          </dl>
          <dl className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <dt>Days until sprint ends:</dt>
            <dd className="bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md">13 days</dd>
          </dl>
          <dl className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <dt>Next meeting:</dt>
            <dd className="bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md">Thursday</dd>
          </dl>
        </div>
      </div>

      {/* Chart Section */}
      <div className="py-6">
        <Chart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-5 flex justify-between items-center">
        <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          Last 7 days
          <svg className="w-2.5 h-2.5 ms-1.5" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <a
          href="#"
          className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2"
        >
          Progress report
          <svg className="w-2.5 h-2.5 ms-1.5" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TeamProgressCard;
