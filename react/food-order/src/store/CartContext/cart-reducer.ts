import { stat } from "fs";
import { CartItemModel } from "models/CartItem";
import { Reducer } from "react";
import { ICartContext } from ".";


type CardReducerAction = {
  type: "ADD" | "REMOVE",
  item?: CartItemModel,
  id?: string
};

export type CartReducerState = Pick<ICartContext, "itens" | "totalAmount">;

export interface ICartReducerAction {
  state: CartReducerState;
  action: CardReducerAction;
}

export const cartReducer: Reducer<CartReducerState, CardReducerAction> = (state, action) => {

  if (action.type === "ADD" && action.item) {
    const total = state.totalAmount + action.item.amount*action.item.price;
    let itens;

    const foundItemIndex = state.itens.findIndex(i => i.id === action.item?.id);

    if (foundItemIndex > -1) {
      const found = state.itens[foundItemIndex];

      const updatedItem = {
        ...found,
        amount: found.amount + action.item.amount
      };

      itens = [...state.itens];
      itens[foundItemIndex] = updatedItem;
    } else {
       itens = state.itens.concat(action.item);
    }

    return {
      itens,
      totalAmount: total
    }
  }
  if (action.type === "REMOVE" && action.id) {
    const foundIndex = state.itens.findIndex(i => i.id === action.id);
    
    if (foundIndex === -1) return state;
    
    const item = {...state.itens[foundIndex]};    
    item.amount--;
    
    const items = [...state.itens];

    if (item.amount === 0) items.splice(foundIndex, 1);
    else items[foundIndex] = item;
    
    const total = state.totalAmount - item.price;
    
    return {
      itens: items,
      totalAmount: total
    }
  }

  return state;
};