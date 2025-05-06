import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChartCard = () => {
  const [series, setSeries] = useState([35.1, 23.5, 2.4, 5.4]);

  const getChartOptions = () => ({
    series: series,
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      type: "donut",
      height: 320,
      width: "100%",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `$${sum}k`;
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: (value) => `${value}k`,
            },
          },
          size: "80%",
        },
      },
    },
    grid: { padding: { top: -2 } },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: { enabled: false },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: { formatter: (value) => `${value}k` },
    },
    xaxis: {
      labels: { formatter: (value) => `${value}k` },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
  });

  const handleDeviceChange = (device) => {
    switch (device) {
      case 'desktop':
        setSeries([15.1, 22.5, 4.4, 8.4]);
        break;
      case 'tablet':
        setSeries([25.1, 26.5, 1.4, 3.4]);
        break;
      case 'mobile':
        setSeries([45.1, 27.5, 8.4, 2.4]);
        break;
      default:
        setSeries([35.1, 23.5, 2.4, 5.4]);
    }
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">Website traffic</h5>
      </div>

      <div className="flex mb-4" id="devices">
        {['desktop', 'tablet', 'mobile'].map((device) => (
          <div className="flex items-center me-4" key={device}>
            <input
              id={device}
              type="radio"
              name="device"
              value={device}
              onChange={() => handleDeviceChange(device)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label
              htmlFor={device}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
            >
              {device}
            </label>
          </div>
        ))}
      </div>

      <div className="py-6">
        <Chart options={getChartOptions()} series={series} type="donut" height={320} />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-5 flex justify-between items-center">
        <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          Last 7 days
        </button>
        <a
          href="#"
          className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500"
        >
          Traffic analysis
        </a>
      </div>
    </div>
  );
};

export default DonutChartCard;
