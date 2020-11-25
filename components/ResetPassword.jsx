import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// const REQUEST_RESET_PASSWORD = gql`
//  mutation REQUEST_RESET_PASSWORD($email: String!) {
//     requestResetPassword(email: $email){
//       message
//     }
// }
// `
const ResetPassword = () => {
    const [password, setPassword] = useState('')
    // const [message, setMessage] = useState('')


    // const [requestResetPassword, {loading, error}] = useMutation(REQUEST_RESET_PASSWORD, {
    //   variables: { email }, 
    //   onCompleted: data => {
    //     if(data) {
    //       setMessage(data.requestResetPassword.message)
    //     }
    // }})

    const handleChange = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            //await requestResetPassword()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ margin: '100px' }}>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    width: '45%'
                }}
                onSubmit={handleSubmit} >
                <h3>Reset Password Form</h3>
                <hr></hr>
                <div style={{ width: '100%', margin: 'auto' }}>
                    {/* {message && <p style={{ color: 'teal'}}>{message}</p>} */}
                </div>
                <input
                    style={{
                        margin: '5px',
                        height: '30px'
                    }}
                    type="password"
                    name="password"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={handleChange}
                />

                <div style={{ width: '100%', margin: 'auto' }}>
                    {/* {error && <p style={{ color: 'red'}}>{error.graphQLErrors[0].message}</p>} */}
                </div>
                <button
                    style={{
                        margin: '5px',
                        padding: '10px',
                        background: 'teal',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '18px'
                    }}
                    type='submit'
                //disabled={loading}
                >Submit</button>
            </form>

        </div>
    )
}

export default ResetPassword;
