import { FC } from 'react';
import styled from 'styled-components/macro';
import { ReactSVG } from 'react-svg';

interface IconProps {
  src: string;
  size?: number;
  className?: string;
  onClick?: Function;
}

const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

export const Icon: FC<IconProps> = ({ src, size = 24, className = '' }) => {
  return (
    <SVG
      beforeInjection={svg => {
        setAttributes(svg, { width: size, height: size });
        if (svg.getElementsByTagName('title').length > 0) {
          svg.removeChild(svg.getElementsByTagName('title')[0]);
        }
      }}
      onError={error => {
        console.error('Error injecting svg icon', error);
      }}
      src={src}
      width={size}
      height={size}
      className={className + ' icon'}
      // {...props}
    />
  );
};

const SVG = styled(ReactSVG)`
  display: flex;
  align-items: center;
  &,
  div {
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }
  & svg g path {
    fill: currentColor;
  }
`;
