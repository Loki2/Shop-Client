import React, { useContext } from 'react';
import Router, { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_PRODUCT, MY_PRODUCTS } from '../graphql/Products';
import { AuthContext } from '../contexts/AuthProvider';
import { ADD_TO_CART } from '../graphql/Carts';


function Product() {
    const route = useRouter()
    const { data, loading, error } = useQuery(QUERY_PRODUCT, { variables: { id: route.query.productId } })
    console.log('ProductID:', route.query.productId)
    const { user } = useContext(AuthContext)


    const [addToCart] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            console.log('data', data)
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })

    const handleAddToCart = async (id) => {
        // console.log('product_id:',  id)

        if (!user) {
            return Router.push('/signin')
        }
        await addToCart({ variables: { id } })
    }

    //    console.log('result', data)
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>
    return (
        <div className="detail">
            <img src={data.product.imageUrl} alt={data.product.description} width='375px' />
            <div className="box-detail">
                <div className="box-head">
                    <h3>{data.product.name}</h3>
                    <span>Price: ${data.product.price}</span>
                </div>
                <p>{data.product.description}</p>
                <div className="box-footer">
                    <button className="btn-cart" onClick={() => handleAddToCart(data.product.id)}>Add To Cart</button>
                    {/* <button className="btn-cart" onClick={() => handleAddToCart(data.product.id)}>Add To Cart</button> */}
                </div>
            </div>
        </div>
    )
}

export default Product;
