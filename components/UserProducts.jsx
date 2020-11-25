import React, { useContext } from 'react';
import UserProductItems from './UserProductItem';
import { AuthContext } from '../contexts/AuthProvider';
import Router  from 'next/router';



const UserProducts = () => {
    const { user } = useContext(AuthContext)


    // const createProduct = () => {
    //     if(user) {
    //         return Router.push('/manage/createProduct')
    //     }
    // }
    //console.log(data)
    return (
        <div style={{ width: '50%', margin: 'auto' }}  >
            {/* Header */}
            <h3>List All My Products</h3>
            <button onClick={() => Router.push('/manage/createProduct')}>Create Product</button>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
                <h3 style={{ margin: 'auto' }}>Image</h3>
                <h3 style={{ margin: 'auto' }}>Name</h3>
                <h3 style={{ margin: 'auto' }}>Description</h3>
                <h3 style={{ margin: 'auto' }}>Price</h3>
                <h3 style={{ margin: 'auto' }}>Actions</h3>
            </div>


            {/* Body */}

            {
                user &&
                user.products.length > 0 &&
                user.products.map(product => (
                    <UserProductItems key={product.id}  product={product} />
                ))}
        </div>
    )
}

export default UserProducts
