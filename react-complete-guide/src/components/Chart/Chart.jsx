import ChartBar from './ChartBar';

import './Chart.css';

const Chart = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map((it) => it.value));

  return (
    <div className='chart'>
      {
        dataPoints.map((it) => (
          <ChartBar
            key={it.label}
            label={it.label}
            value={it.value}
            maxValue={maxValue}
          />
        ))
      }
    </div>
  );
};

export default Chart;
