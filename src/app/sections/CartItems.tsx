import * as React from 'react';
// import styled from 'styled-components/macro';
// import { DesignTokens as DT } from 'styles/DesignTokens';
import { CartItem } from 'app/components/CartItem';
import { SectionHeader } from 'app/components/Section/SectionHeader';
import { CartItemType } from 'types/Products';

export default function CartItems({ ...props }) {
  const products: CartItemType[] = props.products;
  return (
    <>
      <SectionHeader name="10 Items in Your Cart " />
      <div id="CartItems">
        {products.map((el, index) => {
          return (
            <CartItem
              key={index}
              id={index}
              name={el.name}
              image={el.image}
              price={el.price}
              oldPrice={el.oldPrice}
              params={el.params}
              badges={el.badges}
              opBucks={el.opBucks}
              qty={el.qty}
              // onDelete={handleOnDelete}
            ></CartItem>
          );
        })}
      </div>
    </>
  );
}
