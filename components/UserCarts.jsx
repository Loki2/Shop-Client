import React, { useContext} from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import UserCartItems from './CartItems';


const UserCarts = () => {
    const { user } = useContext(AuthContext)
    console.log('Carts Data',  user.carts)
    return (
        user && <div>
            {user.carts.length === 0 ? <p>Your Cart is empty</p> : <>
                <div>
                    <h3>List All My Cart Products</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
                        <h3 style={{ margin: 'auto' }}>Image</h3>
                        <h3 style={{ margin: 'auto' }}>Name</h3>
                        <h3 style={{ margin: 'auto' }}>Description</h3>
                        <h3 style={{ margin: 'auto' }}>Price</h3>
                        <h3 style={{ margin: 'auto' }}>Qualtity</h3>
                        <h3 style={{ margin: 'auto' }}>Amonut</h3>
                        <h3 style={{ margin: 'auto' }}>Actions</h3>
                    </div>



                    {
                    user && user.carts.length > 0 &&
                    user.carts.map(cart => (
                    <UserCartItems key={cart.id} cart={cart} />
                    ))
                    }
                </div>
            </>}
        </div>
    )
}

export default UserCarts;
