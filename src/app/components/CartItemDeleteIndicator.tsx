import React from 'react';
import { DesignTokens as DT } from 'styles/DesignTokens';

interface CartItemDeleteIndicatorProps {
  percent: number;
  innerRef: React.RefObject<SVGSVGElement>;
}

export function CartItemDeleteIndicator(props: CartItemDeleteIndicatorProps) {
  return (
    <svg
      width="71"
      height="71"
      viewBox="-8.875 -8.875 88.75 88.75"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="indicator"
      style={{ transform: 'rotate(-90deg)' }}
      ref={props.innerRef}
    >
      <circle
        r="25.5"
        cx="35.5"
        cy="35.5"
        fill="transparent"
        stroke="transparent"
        strokeWidth="2"
        strokeDasharray="160px"
        strokeDashoffset="0"
      ></circle>
      <circle
        r="25.5"
        cx="35.5"
        cy="35.5"
        stroke={DT.COLOR_DELTA}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDashoffset={160 - 160 * props.percent}
        fill="transparent"
        strokeDasharray="160px"
        style={{ transition: '2s linear' }}
      ></circle>
    </svg>
  );
}
