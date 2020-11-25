import React, {useState} from 'react';
import Router from 'next/router';



const CreateBrand = () => {
    
    return (
        <div style={{ margin: '0' }}>
           
                <form style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '45%' }}>
                    <h3>Add New Brand Form</h3>
                    <button onClick={() => Router.push('/banks')}>Back</button>
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="name"
                        placeholder="Enter Bank name"
                        // value={productData.name}
                        // onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="text"
                        name="description"
                        placeholder="Your Account Name"
                        // value={productData.description}
                        // onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="number"
                        name="price"
                        placeholder="Enter Account No."
                        // value={productData.price}
                        // onChange={handleChange}
                    />
                    <input style={{ margin: '5px', height: '30px' }}
                        type="file"
                        name="file"
                        placeholder="upload QR Code"
                        //value={productData.imageUrl}
                        // onChange={selectFile}
                    />

                    <div style={{ width: '100%', margin: 'auto' }}>
                        {/* {error && <p style={{ color: 'red' }}>{error.graphQLErrors[0].message}
                        </p>
                        }
                        {(
                            !productData.name ||
                            !productData.description ||
                            !productData.price ||
                            !file
                        ) &&
                            <p style={{ color: 'red' }}>Please Fill all product required...!</p>
                        } */}
                    </div>
                    <button style={{
                        margin: '5px',
                        padding: '10px',
                        background: 'teal',
                        color: 'white',
                        border: 'none',
                        // cursor: !productData.name || !productData.description || !productData.price || !file || loading ? 'not-allowed' : 'pointer',
                        fontSize: '18px'
                    }}
                        type='submit'
                        // disabled={!productData.name || !productData.description || !productData.price || !file || loading}
                    >Submit
                    {/* {loading ? 'Submiting...' : ''} */}
                    </button>
                    
                </form>
            </div>
    )
}

export default CreateBrand;
