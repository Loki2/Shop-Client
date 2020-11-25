import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../graphql/User';
import Link from 'next/link';



const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value, //Target Name and Value
        })
    }


    // console.log(userInfo)
    const [success, setSuccess] = useState(false)

    const [signup, { loading, error }] = useMutation(SIGN_UP, {
        variables: { ...userInfo },
        onCompleted: data => {
            if (data) {
                setSuccess(true)
                setUserInfo(
                    {
                        username: "",
                        email: "",
                        password: ""
                    }
                )
            }
        }
    })


    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await signup()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit} >
                <h3>Sign Up Form</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={userInfo.username}
                    onChange={handleChange}
                />
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
                <div className="message">
                    {success && <p style={{ color: 'teal' }}>You Successfully Signed Up, Please{" "}
                        <Link href="/signin">
                            <a><span>Login here</span></a>
                        </Link>
                    </p>}
                    {error && <p>{error.graphQLErrors[0].message}
                    </p>}
                </div>
                <button className="btn-submit"
                    type='submit'
                    disabled={loading}>Submit Now!</button>
                <Link href="/signin">
                    <a>Already have an account? {"  "} <span>Login here</span></a>
                </Link>
            </form>
        </div>
    )
}

export default Signup
