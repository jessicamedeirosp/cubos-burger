import { ChangeEvent } from "react";

export interface IProductInCart {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  idProduct: string;
  quantity: number;
}

export interface ProductInCartProps {
  item: IProductInCart;
  deleteProduct: (productInCart: IProductInCart) => void;
  updateQuantityProductInCart: (
    event: ChangeEvent<HTMLSelectElement>,
    productInCart: IProductInCart
  ) => void;
}
