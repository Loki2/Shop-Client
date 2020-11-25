import React, { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthProvider';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_CART } from '../graphql/Carts';
import { MY_PRODUCTS } from '../graphql/Products';




function ProductItem({ prod }) {
    const { user } = useContext(AuthContext);
    const [addToCart, { loading, error }] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            console.log('data', data)
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })
    const handleAddToCart = async (id) => {
        // console.log('product_id:', id)
        if (!user) {
            return Router.push('/signin')
        }
        await addToCart({ variables: { id } })
    }

    return (
        <div className="product_card">
            <img src={prod.imageUrl} alt={prod.description} />
            <div className="product_box">
                <h3 title={prod.name} >{prod.name}</h3>
                <span>${prod.price}</span>
            </div>
             <p>{prod.description}</p>
            <div className="row_btn">
                {
                    user && user.id === prod.user.id ?
                        <button className="btn-manage"
                            onClick={() => Router.push('/manage')}
                        >Manage</button> :
                        <div className="btn-slot">
                            <button className="btn-buy" onClick={() => handleAddToCart(prod.id)}>{loading ? 'Processing....' : 'Buy!'}</button>
                            <button  className="btn-view">
                            <Link   href='/products/product_detail' as={`/products/${prod.id}`}>View </Link>
                            </button>
                        </div>

                }
            </div>
        </div>
    )
}

export default ProductItem
