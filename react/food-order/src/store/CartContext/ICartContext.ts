import { CartItemModel } from "models/CartItem";

export interface ICartContext {
  itens: Array<CartItemModel>;
  totalAmount: number;
  addItem: (item: CartItemModel) => void;
  removeItem: (id: string) => void;
}
