import ProductCard from 'app/components/ProductCard';
import Carousel from 'app/components/Carousel';

const RelatedProducts = [
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p6.jpeg',
    price: 18.9,
    oldPrice: 19.9,
    // modelQty: 2,
    params: [
      {
        attr: 'Material',
        value: 'Polished Metal',
      },
    ],
    badge: {
      name: 'Free 2-Day Shipping',
      color: 'beta',
    },
  },
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p7.jpeg',
    price: 118,
    oldPrice: 219.5,
    // modelQty: 1,
    params: [
      {
        attr: 'Color',
        value: 'Green',
      },
    ],
    badge: {
      name: "Blazin' Deal",
      color: 'delta',
    },
  },
  {
    name: "Virtus Outdoor Group Ruck Jacket - Men's",
    image: 'p2.jpeg',
    price: 99.9,
    oldPrice: 122.45,
    // modelQty: 14,
    params: [
      {
        attr: 'Material',
        value: 'Polished Metal',
      },
    ],
  },
  {
    name: 'NightForce NX8 2.5-20x50mm Rifle Scope, 30mm Tube, Second Focal Plane',
    image: 'p3.jpeg',
    price: 123.0,
    oldPrice: 155.0,
    // modelQty: 3,
    params: [
      {
        attr: 'Color',
        value: 'Black',
      },
    ],
    badge: {
      name: 'Best Seller',
      color: 'alpha',
    },
  },
  {
    name: 'SIG SAUER Elite Performance 9mm Luger 124 Grain Full Metal Jacket Brass Cased Centerfire Pistol Ammunition',
    image: 'p4.jpeg',
    price: 15.95,
    oldPrice: 21.9,
    modelQty: 1,
    params: [
      {
        attr: 'Zoom',
        value: '1.5x',
      },
    ],
    badge: {
      name: 'Free 2-Day Shipping',
      color: 'beta',
    },
  },
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p5.jpeg',
    price: 18.9,
    oldPrice: 19.9,
    // modelQty: 2,
    params: [
      {
        attr: 'Material',
        value: 'Alloy 9005',
      },
    ],
  },
];

export default function Related() {
  return (
    <div id="Related">
      <Carousel>
        {RelatedProducts.map((el, id) => {
          return (
            <ProductCard
              id={id}
              key={id}
              name={el.name}
              image={el.image}
              price={el.price}
              oldPrice={el.oldPrice}
              modelQty={el.modelQty}
              params={el.params}
              badge={el.badge}
            ></ProductCard>
          );
        })}
      </Carousel>
    </div>
  );
}
