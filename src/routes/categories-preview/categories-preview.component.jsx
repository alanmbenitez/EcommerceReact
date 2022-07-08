import { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/catgory-preview/category-preview.component'
import { selectCategoriesMap } from '../../store/categories/category.selector'
/* import { CategoriesContext } from '../../contexts/categories.context' */
import './categories-preview.styles.scss'



const CategoriesPreview = () => {
/*   const { categories } = useContext(CategoriesContext) */
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} products={products} title={title} />
        })
      }
    </Fragment >)
}


export default CategoriesPreview