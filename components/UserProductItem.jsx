import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_PRODUCT, MY_PRODUCTS, QUERY_PRODUCTS } from '../graphql/Products';

const UserProductItem = ({ product }) => {
    const [edit, setEdit] = useState(false)
    const [file, setFile] = useState(null)
    const [productData, setProductData] = useState(product)


    const [updateProduct, { loading, error }] = useMutation(UPDATE_PRODUCT, {
        onCompleted: data => {
            //console.log(data)
            setEdit(false)
        },
        refetchQueries: [{ query: QUERY_PRODUCTS }, { query: MY_PRODUCTS }]
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

       // console.log(result)
    }
    const handleSubmit = async () => {
        if (!file && productData === product) {
            setProductData(product)
            setEdit(false)
            return
        }

       // console.log('Product Result:', productData)
        try {
            if (file) {
                const url = await uploadFile()
                if (url) {
                    await updateProduct({
                        variables: {
                            ...productData,
                            imageUrl: url,
                            price: +productData.price
                        }
                    })
                } else {
                    await updateProduct({
                        variables: {
                            ...productData,
                            imageUrl: productData.imageUrl,
                            price: +productData.price
                        }
                    })
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr',
            width: '100%',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey'
        }}
        >
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                {!edit ? <img src={product.imageUrl} alt={product.description} width='80px' /> :
                    <input style={{ margin: '5px', height: '30px' }}
                        type="file"
                        name="file"
                        placeholder="Enter Product Image"
                        //value={productData.imageUrl}
                        onChange={selectFile}
                    />
                }
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                {!edit ? <p>{product.name}</p> :
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        value={productData.name}
                        onChange={handleChange}
                    />
                }
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                {!edit ? <p>{product.description}</p> :
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="description"
                        placeholder="Enter product description"
                        value={productData.description}
                        onChange={handleChange}
                    />
                }
            </div>
            <div style={{ margin: 'auto', alignItems: 'center', marginBottom: '5px' }}>
                {!edit ? <p>{product.price}THB</p> :
                    <input style={{ margin: '5px', height: '30px' }}
                        type="number"
                        name="price"
                        placeholder="Enter Product Price"
                        value={productData.price}
                        onChange={handleChange}
                    />
                }
            </div>
            {!edit ? <>
                <div style={{ margin: '5px', alignItems: 'center', display: 'flex', alignItems: 'center' }}>
                    <button style={{ margin: '10px', background: 'orange', color: 'white', padding: '10px', border: 'none' }} onClick={() => setEdit(true)}>Edit</button>
                    <button style={{ margin: '10px', background: 'red', color: 'white', padding: '10px', border: 'none' }}>Delete</button>
                </div>
            </> :
                <>
                    <div style={{ margin: '5px', alignItems: 'center', display: 'flex', alignItems: 'center' }}>
                        <button style={{ margin: '10px', background: 'orange', color: 'white', padding: '10px', border: 'none' }} onClick={() => setEdit(false)}>Cancel</button>
                        <button style={{ margin: '10px', background: 'teal', color: 'white', padding: '10px', border: 'none' }} loading={true} onClick={handleSubmit}>{loading ? 'Editing...' : 'Updated'}</button>
                    </div>
                </>
            }
        </div>
    )
}

export default UserProductItem;