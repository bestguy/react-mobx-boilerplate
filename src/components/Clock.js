import React from 'react';
import range from 'lodash.range';

const Clock = ({ width = 200, height = 200, time }) => {
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const hour = h + m / 60;
  const minute = m + s / 60;
  const seconds = s + time.getMilliseconds() / 1000;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(100, 100)">
        <circle
          cx={0}
          cy={0}
          r={99}
          stroke="currentColor"
          strokeWidth={1}
          fill="none"
        />
        <line
          x1={0}
          y1={20}
          x2={0}
          y2={-60}
          strokeWidth={6}
          stroke="currentColor"
          transform={`rotate(${hour * 30})`}
        />
        <line
          x1={0}
          y1={20}
          x2={0}
          y2={-88}
          strokeWidth={3}
          stroke="currentColor"
          transform={`rotate(${minute * 6})`}
        />
        <line
          x1={0}
          y1={20}
          x2={0}
          y2={-93}
          strokeWidth={1}
          stroke="red"
          transform={`rotate(${seconds * 6})`}
        />
        <circle
          cx={0}
          cy={0}
          r={3}
          fill="red"
        />
        {range(60).map(tick => (
          <line
            key={tick}
            x1={0}
            y1={tick % 5 ? -92 : -86}
            x2={0}
            y2={-95}
            strokeWidth={tick % 5 ? 1 : 3}
            stroke="currentColor"
            transform={`rotate(${tick * 6})`}
          />
        ))}
      </g>
    </svg>
  );
};

export default Clock;
