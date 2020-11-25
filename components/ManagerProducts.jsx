import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { QUERY_PRODUCTS, MY_PRODUCTS, CREATE_PRODUCT } from '../graphql/Products';

//
const ManageProducts = () => {

    //Create State
    const [file, setFile] = useState(null)
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    })

    const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
        refetchQueries: [{ query: QUERY_PRODUCTS }]
    })

    const handleChange = e => setProductData({
        ...productData,
        [e.target.name]: e.target.value
    })

    const selectFile = e => {
        const files = e.target.files
        setFile(files[0])
        //console.log(files)
    }

    //Upload File to Cloudinary
    const uploadFile = async () => {
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'shoppin')
        const res = await fetch('https://api.cloudinary.com/v1_1/swizce/image/upload', {
            method: 'post',
            body: data
        })
        const result = await res.json()
        //console.log('image result',  result)
        return result.secure_url
    }


    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const url = await uploadFile()
            // console.log('image Url:', url)
            if (url) {
                const result = await createProduct({
                    variables: {
                        ...productData,
                        price: +productData.price,
                        imageUrl: url
                    },
                })
                //console.log('Product Data:', result)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ margin: '0' }}>
           
                <form style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '45%' }}
                    onSubmit={handleSubmit} >
                    <h3>Create My Product</h3>
                    <button onClick={() => Router.push('/manage')}>Back</button>
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        value={productData.name}
                        onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="description"
                        placeholder="Enter product description"
                        value={productData.description}
                        onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="number"
                        name="price"
                        placeholder="Enter Product Price"
                        value={productData.price}
                        onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="file"
                        name="file"
                        placeholder="Enter Product Image"
                        //value={productData.imageUrl}
                        onChange={selectFile}
                    />

                    <div style={{ width: '100%', margin: 'auto' }}>
                        {error && <p style={{ color: 'red' }}>{error.graphQLErrors[0].message}</p>}
                        {(
                            !productData.name ||
                            !productData.description ||
                            !productData.price ||
                            !file
                        ) &&
                            <p style={{ color: 'red' }}>Please Fill all product required...!</p>
                        }
                    </div>
                    <button style={{
                        margin: '5px',
                        padding: '10px',
                        background: 'teal',
                        color: 'white',
                        border: 'none',
                        cursor: !productData.name || !productData.description || !productData.price || !file || loading ? 'not-allowed' : 'pointer',
                        fontSize: '18px'
                    }}
                        type='submit'
                        disabled={!productData.name || !productData.description || !productData.price || !file || loading}
                    >Submit{loading ? 'Submiting...' : ''}</button>
                    
                </form>
            </div>
        </>
    )
}

export default ManageProducts
