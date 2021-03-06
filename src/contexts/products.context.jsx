import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: [],
})


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap= await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap()
    },[])

///SOLO SE EJECUTA UNAVEX
/*     useEffect(() => {
        addCollectionAndDocuments('categories' ,SHOP_DATA)
    }, []) */


    const value = { products }

    return (<ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>)
}