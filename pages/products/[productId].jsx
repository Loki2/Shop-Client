import React from 'react'
import ProductDetail from '../../components/ProductDetail';
import Products from '../../components/Products';

const ProductPage = () => {
    return (
        <>
            <ProductDetail />
            <h2>You may like these Products:</h2><hr/>
            <Products />
        </>
    )
}

export default ProductPage
