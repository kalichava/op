import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { USDollar } from 'app/helpers';
import slugify from 'slugify';
import { Badge } from 'app/components/Badge';
import { Icon } from 'app/components/Icon';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';

type CartItemProps = {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  qty?: number;
  badges?: {
    name: string;
    color?: string;
    icon?: string;
  }[];
  params?: {
    attr: string;
    value: string;
  }[];
  opBucks: number;
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
  qty = 1,
  params,
  badges = [],
  opBucks = 0,
  icons,
}: CartItemProps) => {
  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <CartItemWrapper>
      <ProductImage
        style={{ backgroundImage: `url(img/products/${image})` }}
      ></ProductImage>
      <ProductData>
        <a
          className="cartItem__name"
          href={
            '#' + slugify(name, { replacement: '_', lower: true, strict: true })
          }
        >
          {name}
        </a>

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

        <div className="flex">
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
            <div className="cartItem_prices_opBucks">
              <span>Get {USDollar.format(opBucks)} OP Bucks</span>
              <Icon src={'icons/help_outline.svg'} size={14}></Icon>
            </div>
          </div>

          <div className="cartItem__qty">
            <Button
              size="SM"
              color="beta"
              rounded={true}
              inversed={true}
              icon={
                qty > 1
                  ? { name: 'remove', position: 'left' }
                  : { name: 'delete_outline', position: 'left' }
              }
            ></Button>
            <Input
              onChange={handleChange}
              type="number"
              color="beta"
              value={qty.toString()}
            ></Input>
            <Button
              size="SM"
              color="beta"
              rounded={true}
              inversed={true}
              icon={{ name: 'add', position: 'left' }}
            ></Button>
          </div>
        </div>

        <div className="cartItem__actions">
          <a className="cartItem__action" href="#save-for-later">
            <Icon src={'icons/save_alt.svg'} size={14}></Icon>
            <span>Save for Later</span>
          </a>
          <a className="cartItem__action" href="#add-to-wishlist">
            <Icon src={'icons/auto_fix_high.svg'} size={14}></Icon>
            <span>Add to Wishlist</span>
          </a>
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
  flex-grow: 1;
  flex-direction: column;
  padding-left: ${DT.SPACE_6};
`;

const CartItemWrapper = styled.div.attrs(props => ({
  key: props.id,
}))`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHT};
  background-color: white;
  padding: ${DT.SPACE_3} ${DT.SPACE_5};
  transition: 0.2s;
  &:hover {
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    border-bottom-color: ${DT.COLOR_BORDER_LIGHTER};
    cursor: pointer;

    ${ProductImage} {
      background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    }
    .cartItem__name {
      color: ${DT.COLOR_LINK};
    }
  }
  ${ProductImage} {
    transition: 0.2s;
    background-blend-mode: multiply;
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
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    line-height: 1.2;
    max-height: 78px;
    overflow: hidden;
    display: -webkit-box;
    color: inherit;
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
    font-weight: ${DT.FONT_WEIGHT_BOLD};
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
  .cartItem_prices_opBucks {
    display: flex;
    align-items: center;
    font-size: ${DT.FONT_SIZE_BODY_SM};
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    color: ${DT.COLOR_DISCOUNT};
    .icon {
      margin-left: ${DT.SPACE_2};
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
  .cartItem__action {
    font-size: ${DT.FONT_SIZE_BODY_SM};
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    display: inline-flex;
    align-items: center;
    margin-right: ${DT.SPACE_6};
    .icon {
      margin-right: ${DT.SPACE_2};
    }
  }
  .cartItem__qty {
    display: flex;
    align-items: center;
    gap: ${DT.SPACE_2};
  }
  input[type='number'] {
    width: 48px;
    text-align: center;
  }
`;
