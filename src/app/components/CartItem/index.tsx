import styled from 'styled-components/macro';
import { DesignTokens as DT } from '../../../styles/DesignTokens';
import { USDollar, handleBackgroundColor, handleTextColor } from 'app/helpers';
import { Badge } from 'app/components/Badge';

type CartItemProps = {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badges?: {
    name: string;
    color?: string;
    icon?: string;
  }[];
  params?: {
    attr: string;
    value: string;
  }[];
  icons?: {
    name: string;
    icon: string;
  }[];
};

export const CartItem = ({
  name = 'Cart Item',
  image = 'no_image.png',
  price = 0.0,
  oldPrice = 0,
  params,
  badges = [],
  icons,
}: CartItemProps) => {
  return (
    <CartItemWrapper>
      <ProductImage
        style={{ backgroundImage: `url(img/products/${image})` }}
      ></ProductImage>
      <ProductData>
        <div className="cartItem__name">{name}</div>

        {badges && badges.length > 0 ? (
          <div className="cartItem__badges">
            {badges.map((p, id) => (
              <Badge
                key={id}
                name={p.name}
                color={p.color}
                icon={p.icon}
              ></Badge>
            ))}
          </div>
        ) : (
          false
        )}

        {params && params.length > 0 ? (
          <div className="cartItem__params">
            {params.map((p, id) => (
              <div className="cartItem__params__param" key={id}>
                <span className="lighter addRight2">{p.attr}:</span>
                <b>{p.value}</b>
              </div>
            ))}
          </div>
        ) : (
          false
        )}

        <div className="cartItem__prices">
          {oldPrice ? (
            <div className="cartItem__prices__oldPrice">
              <s>{USDollar.format(oldPrice)}</s>
              <span>
                You Save {100 - Math.round((price * 100) / oldPrice)}%
              </span>
            </div>
          ) : (
            ''
          )}
          <div className="cartItem__prices__currentPrice">
            {USDollar.format(price)}
          </div>
        </div>
      </ProductData>
    </CartItemWrapper>
  );
};

const ProductImage = styled.div`
  width: 80px;
  min-width: 80px;
  background: 50% 0 no-repeat;
  background-size: contain;
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${DT.SPACE_6};
`;

const CartItemWrapper = styled.div.attrs(props => ({
  key: props.id,
}))`
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHT};
  position: relative;
  display: flex;
  background-color: ${DT.COLOR_BACKGROUND_LIGHT};
  padding: ${DT.SPACE_3} ${DT.SPACE_5};
  transition: 0.2s;
  &:hover {
    background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
    border-bottom-color: ${DT.COLOR_BORDER_LIGHTER};
  }
  .cartItem__params {
    display: flex;
    flex-direction: column;
    gap: ${DT.SPACE_2};
    font-size: ${DT.FONT_SIZE_BODY_SM};
    line-height: ${DT.LINE_HEIGHT_BODY_SM};
    margin-bottom: ${DT.SPACE_3};
  }
  .cartItem__name {
    font-weight: 600;
    line-height: 1.2;
    max-height: 78px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: ${DT.SPACE_2};
  }
  .cartItem__badges {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${DT.SPACE_3};
  }
  .cartItem__prices {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${DT.SPACE_3} 0 ${DT.SPACE_2} 0;
  }
  .cartItem__prices__currentPrice {
    font-weight: 600;
    color: ${DT.COLOR_DELTA};
  }
  .cartItem__prices__oldPrice {
    line-height: 1;
    font-size: ${DT.FONT_SIZE_BODY_SM};
    color: ${DT.COLOR_LIGHT};
    s {
      padding-right: ${DT.SPACE_3};
    }
  }
  .cartItem__modelQty {
    font-size: ${DT.FONT_SIZE_BODY_SM};
    color: ${DT.COLOR_LIGHT};
    position: absolute;
    display: inline-block;
    top: ${DT.PRODUCT_THUMB_HEIGHT};
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    padding: ${DT.SPACE_0} ${DT.SPACE_5};
  }
`;
