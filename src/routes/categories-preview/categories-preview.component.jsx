import { Fragment, useContext } from 'react'
import CategoryPreview from '../../components/catgory-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'
import './categories-preview.styles.scss'



const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return <CategoryPreview key={title} products={products} title={title} />
        })
      }
    </Fragment >)
}


export default CategoriesPreview