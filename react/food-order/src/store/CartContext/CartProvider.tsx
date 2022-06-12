import { CartItemModel } from "models/CartItem";
import { FC, PropsWithChildren, useReducer } from "react";
import { CartContext } from "./cart-context";
import { cartReducer, CartReducerState } from "./cart-reducer";
import { ICartContext } from "./ICartContext";

const initialCartState: CartReducerState = {
  itens: [],
  totalAmount: 0
};

const CartProvider: FC<PropsWithChildren> = ({children}) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, initialCartState);
    
  const addItemToCartItem = (item: CartItemModel) => {
    dispatchAction({ type: "ADD", item });
  };

  const removeItemFromCard = (id: string) => {
    dispatchAction({type:"REMOVE", id});
  };

  const context: ICartContext = {
      itens: cartState.itens,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartItem,
      removeItem: removeItemFromCard
  };
  
  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;