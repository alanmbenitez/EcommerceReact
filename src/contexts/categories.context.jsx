import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categories: {},
})


export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({})



///SOLO SE EJECUTA UNAVEX
/*     useEffect(() => {
        addCollectionAndDocuments('categories' ,SHOP_DATA)
    }, []) */


    const value = { categories }

    return (<CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>)
}