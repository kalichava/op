import styled from 'styled-components/macro';
import { handleColor } from 'app/helpers';

export default function Triangle({ direction, color }) {
  return <Wrapper dir={direction} color={color}></Wrapper>;
}

const Wrapper = styled.div<{ dir; color }>`
  ${props => {
    let style = `
        transform: translateY(1px);
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;`;

    if (props.dir === 'up') {
      style += `
        border-width: 0 4px 7px 4px;
        border-color: transparent transparent ${handleColor(
          props.color,
        )} transparent;`;
    } else {
      style += `
        border-width: 7px 4px 0 4px;
        border-color: ${handleColor(
          props.color,
        )} transparent transparent transparent;`;
    }
    return style;
  }}
`;
