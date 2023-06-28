import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { USDollar } from 'app/helpers';
import { Button } from 'app/components/Button';
import { CornerBadge } from 'app/components/CornerBadge';

type ProductCardProps = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  modelQty?: number;
  rating?: {
    avg: number;
    total: number;
  };
  badge?: {
    name: string | boolean;
    color: string;
  };
  params?: {
    attr: string;
    value: string;
  }[];
  button?: {
    name: string;
    type: string;
    icon: string;
  };
  inStock?: boolean;
  icons?: {
    name: string;
    icon: string;
  }[];
};

export const ProductCard = ({
  name = 'Product Card',
  image = 'no_image.png',
  price = 0.0,
  oldPrice = 0,
  modelQty = 1,
  button,
  params,
  rating,
  badge = {
    name: false,
    color: 'alpha',
  },
  inStock,
  icons,
}: ProductCardProps) => {
  return (
    <ProductCardWrapper>
      <CornerBadge name={badge.name} color={badge.color}></CornerBadge>
      <ProductImage
        style={{ backgroundImage: `url(img/products/${image})` }}
      ></ProductImage>

      {modelQty > 1 ? <div className="modelQty">{modelQty} models</div> : ''}

      <div className="name">{name}</div>

      {params && params.length > 0 ? (
        <div className="params">
          {params.map((p, id) => (
            <div className="small" key={id}>
              <span className="lighter addRight2">{p.attr}:</span>
              <b>{p.value}</b>
            </div>
          ))}
        </div>
      ) : (
        false
      )}

      <div className="prices">
        {oldPrice ? (
          <div className="oldPrice">
            <s>{USDollar.format(oldPrice)}</s>
            <span>You Save {100 - Math.round((price * 100) / oldPrice)}%</span>
          </div>
        ) : (
          ''
        )}
        <div className="currentPrice">{USDollar.format(price)}</div>
      </div>

      {button ? (
        <Button
          name={button.name}
          icon={{ name: 'shopping_cart', position: 'left' }}
          fullwidth={true}
          color="alpha"
        ></Button>
      ) : (
        ''
      )}
    </ProductCardWrapper>
  );
};

const ProductImage = styled.div`
  height: ${DT.PRODUCT_THUMB_HEIGHT};
  width: 100%;
  background: 50% 50% no-repeat;
  background-size: contain;
  margin: ${DT.SPACE_5} 0 ${DT.SPACE_2} 0;
`;

const ProductCardWrapper = styled.div.attrs(props => ({
  key: props.id,
}))`
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${DT.SPACE_2};
  padding: ${DT.SPACE_5};
  width: ${DT.PRODUCT_CARD_WIDTH};
  min-width: ${DT.PRODUCT_CARD_WIDTH};
  overflow: hidden;
  .name {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    line-height: 1.2;
    max-height: 78px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .prices {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${DT.SPACE_3} 0 ${DT.SPACE_2} 0;
  }
  .currentPrice {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    color: ${DT.COLOR_DELTA};
  }
  .oldPrice {
    line-height: 1;
    font-size: ${DT.FONT_SIZE_BODY_SM};
    color: ${DT.COLOR_LIGHT};
    s {
      padding-right: ${DT.SPACE_3};
    }
  }
  .modelQty {
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
