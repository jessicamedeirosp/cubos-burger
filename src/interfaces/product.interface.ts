export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

export interface ProductProps {
  item: IProduct;
}
