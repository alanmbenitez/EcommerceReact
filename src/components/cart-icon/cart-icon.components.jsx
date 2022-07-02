import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.jsx'
import { CartIconContainer, ItemCount, ShoppingIconStyle } from './cart-icon.styles.jsx'

const CartIcon = ({ click }) => {
  const { countItems, isCartOpen, setIsCartOpen, toggleIsCartOpen } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleIsCartOpen} >
      <ShoppingIconStyle/>
      <ItemCount>{countItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon