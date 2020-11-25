import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOG_IN } from '../graphql/User';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'js-cookie';
// import '../styles/_login.scss';

//import Auth Context from context Api
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const { setAuthUser } = useContext(AuthContext)
    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value, //Target Name and Value
        })
    }
    const [login, { loading, error }] = useMutation(LOG_IN, {
        variables: { ...userInfo },
        onCompleted: data => {
            if (data) {
                setAuthUser(data.login.user)
                //Set cookie here
                Cookies.set('jwtToken', data.login.jwt)
                setUserInfo({
                    email: "",
                    password: ""
                })
                Router.push('/manage')
            }
        }
    })
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await login()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit} >
                <h3>Sign In Form</h3>

                <div className="message" >
                    {error && <p>{error.graphQLErrors[0].message}</p>}
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={userInfo.password}
                    onChange={handleChange}
                />
                <div className="p-forget">
                    <p>Forgot password?{" "} <span onClick={() => Router.push('/signin/requestresetpassword')}>Click here</span></p>
                </div>
                <button className="btn-submit" type='submit' disabled={loading}>Login Now!</button>
                <Link href="/signup">
                    <a>Don't have an account? {" "} <span>Signup here</span></a>
                </Link>
            </form>

        </div>
    )
}

export default Login
