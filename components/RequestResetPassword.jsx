import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REQUEST_RESET_PASSWORD } from '../graphql/User';
import Link from 'next/link';


const RequestResetPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const [requestResetPassword, { loading, error }] = useMutation(REQUEST_RESET_PASSWORD, {
        variables: { email },
        onCompleted: data => {
            if (data) {
                setMessage(data.requestResetPassword.message)
            }
        }
    })

    const handleChange = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await requestResetPassword()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="request-page">
            <form onSubmit={handleSubmit} >
                <h3>Request Form</h3>
                <div className="message">
                    {message && <p style={{ color: 'teal' }}>{message}</p>}
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleChange}
                />
                 <Link href="/signup">
                    <a>Don't have an account? {"  "} <span>Signup here</span></a>
                </Link>
                <div className="message">
                    {error && <p style={{ color: 'red' }}>{error.graphQLErrors[0].message}</p>}
                </div>

                <button className="btn-submit"
                    type='submit'
                    disabled={loading}
                >Submit</button>
            </form>

        </div>
    )
}

export default RequestResetPassword;
