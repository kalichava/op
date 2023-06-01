import * as React from 'react';
// import styled from 'styled-components/macro';
// import { DesignTokens as DT } from '../../styles/DesignTokens';
import { CartItem } from '../components/CartItem';

const CartItemsProducts = [
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p5.jpeg',
    price: 18.9,
    oldPrice: 19.9,
    params: [
      {
        attr: 'Color',
        value: 'Black',
      },
      {
        attr: 'Weight',
        value:
          '0 - 0.49 grain, 0.7 oz, Example of the description in two lines',
      },
      {
        attr: 'Material',
        value: 'Alloy 9005',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
  },
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p6.jpeg',
    price: 219,
    oldPrice: 234.55,
    params: [
      {
        attr: 'Color',
        value: 'Red',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
    ],
  },
  {
    name: 'STNGR M-Lok Bipod Adapter Mount, Black, CQ-B1VU-D5JY',
    image: 'p7.jpeg',
    price: 544,
    oldPrice: 599.99,
    params: [
      {
        attr: 'Color',
        value: 'Green',
      },
    ],
    badges: [
      {
        name: 'On Sale',
        color: 'alpha',
      },
    ],
  },
  {
    name: 'Burris Xtreme Tactical Picatinny Style Rail 30mm Rings',
    image: 'p8.jpeg',
    price: 220,
    oldPrice: 245.9,
    badges: [
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
  },
  {
    name: "Bob Allen 313 Premier Insulated Leather Gloves - Men's, Brown, XS, 1219",
    image: 'p9.jpeg',
    price: 47.99,
    oldPrice: 56.0,
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
    ],
  },
  {
    name: "5.11 Tactical 3-in-1 Waterproof Parka - Men's, Range Red, Extra Large, 48001-477-XL",
    image: 'p10.jpeg',
    price: 99.99,
    oldPrice: 120,
  },
  {
    name: 'STNGR M-Lok Bipod Adapter Mount, Black, CQ-B1VU-D5JY',
    image: 'p11.jpeg',
    price: 180.9,
    oldPrice: 190.9,
    params: [
      {
        attr: 'Color',
        value: 'Black',
      },
      {
        attr: 'Weight',
        value:
          '0 - 0.49 grain, 0.7 oz, Example of the description in two lines',
      },
      {
        attr: 'Material',
        value: 'Alloy 9005',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
  },
];

export function CartItems() {
  return (
    <div id="CartItems">
      {CartItemsProducts.map((el, id) => {
        return (
          <CartItem
            key={id}
            name={el.name}
            image={el.image}
            price={el.price}
            oldPrice={el.oldPrice}
            params={el.params}
            badges={el.badges}
          ></CartItem>
        );
      })}
    </div>
  );
}
