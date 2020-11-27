import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@apollo/react-hooks';
import { MY_PRODUCTS } from '../graphql/Products';
import { MY_CARTS } from '../graphql/Carts';
import { MY_PROFILE } from '../graphql/Profile';


function nav() {
    const { user, signout, setAuthUser } = useContext(AuthContext)
    const { data } = useQuery(MY_PRODUCTS, MY_CARTS, MY_PROFILE)
    // console.log(user)
    // console.log(data)


    useEffect(() => {
        if (data) {
            setAuthUser(data.user)
        }
    }, [data])
    return (
       
        <nav className="site-navigation">
            <span className="menu-title"> Ozone.Shop</span>
            <input className="search_input" type="search" name="search" id="search" placeholder="i am feeling happy shopping for...!"/>
            <div className="menu-content-container">
               
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                  
                        <li>
                            <Link href="/products">
                                <a>Products</a>
                            </Link>
                        </li>

                    {user && <>
                        <li>
                            <Link href="/carts">
                                <a>Carts <span
                                    style={{
                                        background: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '3px'
                                    }}
                                >
                                    {user && user.cart && user.cart.length === 0 && 0}
                                    {user && user.cart && user.cart.length > 0 && user.cart.reducer((sum, item) => sum + item.qualtity, 0)}
                                </span></a>
                            </Link>
                        </li>

                        <button className="btn-signout" onClick={signout}
                        >Logout</button>

                        <li>
                            <Link href="/dashboard">
                                <a>My Store</a>
                            </Link>
                        </li>
                    </>}

                    {!user && <>
                        <li>
                            <Link href="/signin">
                                <a>Signin</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/signup">
                                <a>Signup</a>
                            </Link>
                        </li>
                    </>}
                </ul>
                <ul>
                    <li>En</li> &nbsp;
                    {/* <li>La</li> */}
                </ul>
                <span className="menu-title">
                    {user && <>
                        <li className="username">
                            <Link href="/dashboard">
                                <a>@{user.username}</a>
                            </Link>
                        </li>
                    </>
                    }
                </span>
            </div>
        </nav>
    )
}

export default nav;