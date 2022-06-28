import {createContext, useState, useEffect} from 'react'
/// verifica si el item ya esta y adiciona un producot o lo crea 
const addCartItem =(cartItems,productToAdd)=> {

     const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        :  cartItem
        )
    }



  return  [...cartItems , {...productToAdd, quantity:1}]
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen]= useState(false)
    const [cartItems, setCartItems] = useState([])
    const [countItems,setCountItems] = useState(0)


    const addItemToCart = (productToAdd) => {
        console.log('click');
        setCartItems(addCartItem(cartItems, productToAdd));
    }



    useEffect(()=>{
     const totalItems = cartItems.reduce((prev, cartItem) => prev + cartItem.quantity, 0)
       setCountItems(totalItems)
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, addItemToCart,cartItems,countItems}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
