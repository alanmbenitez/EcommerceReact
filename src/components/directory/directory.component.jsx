import React from 'react'
import './directory.styles.scss'
import Category from "../category/category.component";

const Directory = ({categories}) =>(
    <div className="categories-container">
      {
        categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
    </div>
)


export default Directory