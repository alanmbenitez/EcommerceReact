import { useParams } from 'react-router-dom'
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, TitleCategory } from'./category.styles.jsx'
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category])

    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])
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