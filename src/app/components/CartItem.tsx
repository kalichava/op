import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { USDollar } from 'app/helpers';
import slugify from 'slugify';
import { Badge } from 'app/components/Badge';
import { Icon } from 'app/components/Icon';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { CartItemDeleteIndicator } from 'app/components/CartItemDeleteIndicator';

type CartItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  qty?: number;
  opBucks: number;
  badges?: {
    name?: string;
    color?: string;
    icon?: string;
  }[];
  params?: {
    attr?: string;
    value?: string;
  }[];
  icons?: {
    name: string;
    icon: string;
  }[];
  onDelete?: Function;
};

export function CartItem({
  id,
  name = 'Cart Item',
  image = 'no_image.png',
  price = 0.0,
  oldPrice = 0,
  qty = 1,
  params,
  badges = [],
  opBucks = 0,
  icons,
  onDelete,
}: CartItemProps) {
  const indicator = useRef() as React.RefObject<SVGSVGElement>;
  const cartItem = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [quantity, setQuantity] = useState(qty);
  const [percent, setPercent] = useState(0);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (quantity > 0) {
      setPercent(0);
      setDeleted(false);
    } else {
      setPercent(1);
      setTimeout(() => {
        setDeleted(true);
      }, 2000);
    }

    const height = cartItem.current?.getBoundingClientRect().height;

    if (deleted) {
      cartItem.current.style.height = `0px`;
      return;
    }

    if (typeof height === 'number') {
      cartItem.current.style.height = `${height}px`;
    }
  }, [quantity, deleted]);

  const increaseQuantity = event => {
    setQuantity(prev => Math.max(prev + 1, 1));
  };

  const decreaseQuantity = event => {
    setQuantity(prev => {
      if (prev === 0) setDeleted(true);
      return Math.max(prev - 1, 0);
    });
  };

  function handleChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function getDeleteIcon(quantity) {
    switch (quantity) {
      case 1:
        return {
          name: 'delete_outline',
          position: 'left',
        };

      case 0:
        return {
          name: 'delete',
          position: 'left',
        };

      default:
        return {
          name: 'remove',
          position: 'left',
        };
    }
  }

  return (
    <CartItemWrapper ref={cartItem} className={deleted ? 'hide' : ''}>
      <ProductImage
        style={{
          backgroundImage: `url(img/products/${image})`,
          opacity: quantity > 0 ? 1 : 0.1,
        }}
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

        {badges && badges.length > 0 && (
          <div
            className="cartItem__badges"
            style={{
              opacity: quantity > 0 ? 1 : 0.1,
            }}
          >
            {badges.map((p, id) => (
              <Badge
                key={id}
                name={p.name}
                color={p.color}
                icon={p.icon}
              ></Badge>
            ))}
          </div>
        )}

        {params && params.length > 0 && (
          <div
            className="cartItem__params"
            style={{
              opacity: quantity > 0 ? 1 : 0.1,
            }}
          >
            {params.map((p, id) => (
              <div className="cartItem__params__param" key={id}>
                <span className="lighter addRight2">{p.attr}:</span>
                <b>{p.value}</b>
              </div>
            ))}
          </div>
        )}

        <div className="flex">
          <div
            className={'cartItem__prices'}
            style={{
              opacity: quantity > 0 ? 1 : 0.1,
            }}
          >
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
              <Icon src="icons/help_outline.svg" size={16}></Icon>
            </div>
          </div>

          <div className="cartItem__qty">
            <Button
              size="SM"
              color={quantity === 0 ? 'delta' : 'beta'}
              rounded={true}
              inversed={quantity === 0 ? false : true}
              icon={getDeleteIcon(quantity)}
              onClick={decreaseQuantity}
            ></Button>
            <Input
              onChange={handleChange}
              type="number"
              color="beta"
              value={quantity.toString()}
              min="0"
              max="1000"
            ></Input>
            <Button
              size="SM"
              color="beta"
              rounded={true}
              inversed={true}
              icon={{ name: 'add', position: 'left' }}
              onClick={increaseQuantity}
            ></Button>
            <CartItemDeleteIndicator
              percent={percent}
              innerRef={indicator}
            ></CartItemDeleteIndicator>
          </div>
        </div>

        <div className="cartItem__actions">
          <Button
            name="Save for Later"
            icon={{ name: 'save_alt', position: 'left' }}
            size="XS"
            color="white"
            inversed
            rounded
          />
          <Button
            name="Add to Wishlist"
            icon={{ name: 'auto_fix_high', position: 'left' }}
            size="XS"
            color="white"
            inversed
            rounded
          />
          {quantity === 0 ? (
            <Button
              name="Undo"
              icon={{ name: 'undo', position: 'left' }}
              size="XS"
              color="white"
              inversed
              rounded
              onClick={() => {
                setQuantity(1);
              }}
            />
          ) : (
            <Button
              name="Delete"
              icon={{ name: 'delete_outline', position: 'left' }}
              size="XS"
              color="white"
              inversed
              rounded
              onClick={() => {
                setQuantity(0);
              }}
            />
          )}
        </div>
      </ProductData>
    </CartItemWrapper>
  );
}

const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  background: 50% 0 no-repeat;
  background-size: contain;
  margin-left: ${DT.SPACE_5};
  margin-top: ${DT.SPACE_4};
`;

const ProductData = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: ${DT.SPACE_4} ${DT.SPACE_6} ${DT.SPACE_4} ${DT.SPACE_4};
`;

const CartItemWrapper = styled.div.attrs(props => ({
  key: props.id,
}))`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHT};
  background-color: white;
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    border-bottom-color: ${DT.COLOR_BORDER_LIGHTER};
    cursor: pointer;

    ${ProductImage} {
      background-color: ${DT.COLOR_BACKGROUND_LIGHT};
      transform: scale(1);
    }
    .cartItem__name {
      color: ${DT.COLOR_LINK};
    }
  }
  &.hide {
    transition: 0.5s;
    height: 0 !important;
    border-bottom: 0;
    opacity: 0;

    & .cartItem__name {
      color: ${DT.COLOR_GAMMA};
    }
  }
  &.hidden {
    transition-delay: 0s;
    height: 0px !important;
    border-bottom: 0;
    opacity: 0;
  }
  ${ProductImage} {
    transition: 0.2s;
    background-blend-mode: multiply;
    transform: scale(0.95);
  }

  .cartItem__params {
    display: flex;
    flex-direction: column;
    gap: ${DT.SPACE_2};
    font-size: ${DT.FONT_SIZE_BODY_MD};
    line-height: 1.2;
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
    &.hide {
      opacity: 0;
    }
  }
  .cartItem__prices__currentPrice {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    color: ${DT.COLOR_DELTA};
    font-size: 1.3em;
  }
  .cartItem__prices__oldPrice {
    line-height: 1;
    font-size: ${DT.FONT_SIZE_BODY_MD};
    color: ${DT.COLOR_LIGHT};
    s {
      padding-right: ${DT.SPACE_3};
    }
  }
  .cartItem_prices_opBucks {
    display: flex;
    align-items: center;
    font-size: ${DT.FONT_SIZE_BODY_MD};
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
  .cartItem__actions {
    margin: ${DT.SPACE_4} 0 0 -${DT.SPACE_5};
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    gap: ${DT.SPACE_3};
    .button {
      flex-grow: 0;
      margin: 0;
    }
  }
  .cartItem__qty {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${DT.SPACE_2};

    a {
      transform: scale(1);
      padding-left: ${DT.SPACE_3};
      padding-right: ${DT.SPACE_3};
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  input[type='number'] {
    width: 48px;
    text-align: center;
  }
  .indicator {
    position: absolute;
    pointer-events: none;
    top: -3px;
    left: -19.5px;
    &.hide {
      opacity: 0;
    }
  }
`;
