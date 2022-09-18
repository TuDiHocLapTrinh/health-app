import React from 'react';

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;

  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ color, percentage }) => {
  const r = 90;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.

  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill='transparent'
      stroke={strokePct !== circ ? color : ''} // remove color as 0% sets full circumference
      strokeWidth='3'
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      filter='drop-shadow(0px 0px 6px #FC7400)'
    ></circle>
  );
};

const TextPercent = ({ percentage }) => {
  return (
    <text
      x='105'
      y='111'
      fontSize='24px'
      fill='#ffffff'
      filter='drop-shadow(0px 0px 6px #FC7400)'
      fontWeight='300'
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const TextDate = ({ date }) => {
  return (
    <text
      x='50'
      y='110'
      fontSize='18px'
      fill='#ffffff'
      fontWeight='300'
      filter='drop-shadow(0px 0px 6px #FC7400)'
    >
      {date}
    </text>
  );
};

const PieChart = ({ date, percent }) => {
  const pct = cleanPercentage(percent);

  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle color='transparent' />
        <Circle color='white' percentage={pct} />
      </g>
      <TextPercent percentage={pct} />
      <TextDate date={date} />
    </svg>
  );
};

export default PieChart;
