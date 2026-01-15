import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { NavItem } from "react-bootstrap";


function GlobalProvider(props){
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name:'Lemuel', id:63})

    function addProductToCart(){
        setCart([...cart, product])
    }

    function clearCart(){
        setCart ([])
    }

    function removeProductFromCart(){
        console.log('removing', productId)

        const updateCart = cart.filter(NavItem._id !== productId)
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