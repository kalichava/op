export interface CartItemType {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  qty: number;
  params?:
    | {
        attr?: string;
        value?: string;
      }[]
    | undefined;
  badges?:
    | {
        name?: string;
        color?: string;
        icon?: string;
      }[]
    | undefined;
  opBucks: number;
}
