import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { USDollar } from 'app/helpers';
import Triangle from 'app/components/Triangle';

export default function ChangedPrice({ oldPrice, newPrice, name, className }) {
  return (
    <Wrapper className={className}>
      <a href="#product">
        <strong>{name}</strong>
      </a>
      <div className="flex flexGap3 flexAlignCenter addBottom5 addTop3">
        <s className="lighter">{USDollar.format(oldPrice)}</s>
        <span className="light">→</span>
        <span className="colorDiscount">{USDollar.format(newPrice)}</span>
        {newPrice < oldPrice ? (
          <Triangle direction="down" color="alpha" />
        ) : (
          <Triangle direction="up" color="epsilon" />
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.li`
  margin: auto;
  padding: 0 0 0 0;
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHTER};

  span,
  s {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
  }
`;
