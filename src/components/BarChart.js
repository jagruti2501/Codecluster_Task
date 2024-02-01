import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const BarChart = ({ checkedRowsData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    const dataForChart = checkedRowsData.map((row) => ({
      x: [row.age], 
      y: [row.income],  
      type: 'bar',
      name: `ID ${row.id}`,
    }));

    setChartData(dataForChart);
  }, [checkedRowsData]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <Plot
        data={chartData}
        layout={{ width: 600, height: 600, title: 'Age VS Income' }}
      />
    </div>
  );
};

export default BarChart;
