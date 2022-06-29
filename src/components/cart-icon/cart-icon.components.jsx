import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = ({click}) => {
  const { countItems, isCartOpen, setIsCartOpen,toggleIsCartOpen} = useContext(CartContext)

  

  
   


  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{countItems}</span>
    </div>
  )
}

export default CartIcon