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

const removeCartItem = (cartItems,productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    )
  
    if (existingCartItem && productToRemove.quantity > 1){
        return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        :  cartItem
        )
    }
        
    return deleteCartItem(cartItems,productToRemove)
    


    
}

const deleteCartItem = (cartItems,productToDelete) => cartItems.filter((item)=> item.id !== productToDelete.id); 


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeCartItem: () => {},
    deleteCartItem: () => {},
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen]= useState(false)
    const [cartItems, setCartItems] = useState([])
    const [countItems,setCountItems] = useState(0)
    const [cartTotal ,setCartTotal ] = useState(0)



   
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


    useEffect(()=>{
        const totalItems = cartItems.reduce((prev, cartItem) => prev + cartItem.quantity, 0)
        setCountItems(totalItems)
    },[cartItems])

    useEffect(()=>{
        const cartTotalPrice = cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity , 0)
        setCartTotal(cartTotalPrice)
    },[cartItems])



    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart,
        clearItemFromCart,
        cartItems,
        countItems ,
        toggleIsCartOpen,
        cartTotal
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
