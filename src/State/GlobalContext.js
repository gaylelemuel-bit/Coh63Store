import { createContext } from "react";

const GlobalContext = createContext({
    cart: [], // default cart is a empty array,will hold products 
    user:{}, // default user is an empty object, and will store info 
     
    //using Arrow function syntax 
    addProductToCart: () =>{}, //placeholder function to add products
    clearCart: () => {}, //placeholder function to remove all items from cart 
    removeProductFromCart: () => {} //placeholder function to remove specific item from cart



})

//export the context so it can be used in another component 
export default GlobalContext