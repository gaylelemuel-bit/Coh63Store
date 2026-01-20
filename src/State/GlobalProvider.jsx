import { useState } from "react";
import GlobalContext from "./GlobalContext";


function GlobalProvider(props){
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name:'Lemuel', id:63})

    function addProductToCart(product){
        setCart([...cart, product])
    }

    function clearCart(){
        setCart ([])
    }

    function removeProductFromCart(productId){
        console.log('removing', productId)

        const updateCart = cart.filter(item => item._id !== productId)
        setCart(updateCart)
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}

        </GlobalContext.Provider>
    )



}

export default GlobalProvider