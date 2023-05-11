import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";
import './product-card.styles.scss';

const ProductCard = ({product}) => {
  const { addItemToCart } = useContext(CartContext)
  const {name,imageUrl,price} = product

  const addProductToCart =  () => addItemToCart(product)

  return (
    <div className='card'>
    <div className="card-head">
        <img src={imageUrl} alt={name} className="card-img-top"/>
    </div>
    <div className="card-body-comm">
        <h4 className="card-title">{name}</h4>
        <p className="card-text-comm card-text truncate-text">Basket Ball Collection</p>
        <div className='card-container-price-button'>
          <a href="#" onClick={addProductToCart} className="button -salmon center">Add to Cart</a> 
          <span className='product-price'>USD<b>{price}</b></span>
        </div>
    </div>
</div>
  )
}

export default ProductCard
