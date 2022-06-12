import React from "react";
import { ICartContext } from "./ICartContext";

const defaultContext: ICartContext = {
    itens: [],
    totalAmount: 0,
    addItem: item => {},
    removeItem: id => {}    
} 

const CartContext = React.createContext(defaultContext)

export { CartContext };