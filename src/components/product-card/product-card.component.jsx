import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import './product-card.styles.scss'
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) => {
  const { addItemToCart } = useContext(CartContext)
   const {name,imageUrl,price} = product

  const addProductToCart=  () => addItemToCart(product)
  
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}> Add to Card</Button>
    </div>
  )
}

export default ProductCard