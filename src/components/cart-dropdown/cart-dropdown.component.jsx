import { useContext } from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.jsx'
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems ,toggleIsCartOpen } = useContext(CartContext)


  const goToCheckoutHandler = () => {
    navigate('/checkout');
    toggleIsCartOpen()
  };

  return (
    <CartDropDownContainer>
        <CartItems>
          {cartItems.length ?(
            cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown