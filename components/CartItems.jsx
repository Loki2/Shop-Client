import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {DELETE_CART} from '../graphql/Carts';
import {  MY_PRODUCTS } from '../graphql/Products';
import { MY_CARTS } from '../graphql/Carts';


function CartItems({ cart }) {

    
    const [deleteCart, {loading, error}] = useMutation(DELETE_CART, {
            onCompleted: data => {
                console.log(data)
            },
            refetchQueries: [{ query: MY_PRODUCTS, MY_CARTS }]
    })

    const handleSubmit = async () => {
        try {
            await deleteCart({ variables: { id: cart.id }})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr 2fr 2fr',
            width: '100%',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey'
        }}
        >
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <img src={cart.product.imageUrl} alt={cart.product.description} width='80px' />
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <p>{cart.product.name}</p>
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <p>{cart.product.description}</p>
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <p>{cart.product.price}</p>
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <p>{cart.qualtity}</p>
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                <p>{cart.qualtity * cart.product.price}</p>
            </div>
            <div style={{ margin: '5px', alignItems: 'center', display: 'flex', alignItems: 'center' }}>
                <button style={{ margin: '10px', background: 'red', color: 'white', padding: '10px', border: 'none' }}
                    onClick={handleSubmit} 
        >{loading ? 'Deleting...': error ? 'Error' : 'Delete'}</button>
            </div>
        </div>
    )
}

export default CartItems
