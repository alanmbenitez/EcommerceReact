import { useParams } from 'react-router-dom'
import { Fragment, useContext, useEffect, useState } from 'react';
/* import { CategoriesContext } from '../../contexts/categories.context';
 */
import { CategoryContainer, TitleCategory } from'./category.styles.jsx'
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

const Category = () => {
    const { category } = useParams();
 /*    const { categories } = useContext(CategoriesContext); */
 const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <Fragment>
            <TitleCategory>{category.toUpperCase()}</TitleCategory>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>

    )
}

export default Category