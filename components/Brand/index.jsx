import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MY_BRANDS } from '../../graphql/Brands';
import UserBrandItems from './UserBrandItems';
import Router  from 'next/router';



const Brand = () => {

     const {data, loading, error} = useQuery(MY_BRANDS);
    //  console.log("Brand: ", data)

     if (error) return <p>Oooops...Something went wrong!</p>
     if (loading) return <p>Loading...!</p>  
    return (
            <div style={{ width: '50%', margin: 'auto' }}  >
                 <button onClick={() => Router.push('/brands/createBrand')}>Create Brand</button>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
                    <h3 style={{ margin: 'auto' }}>Image</h3>
                    <h3 style={{ margin: 'auto' }}>Name</h3>
                    <h3 style={{ margin: 'auto' }}>Actions</h3>
            </div>
                {
                    data.user.brands.length > 0 &&
                    data.user.brands.map(brand => (
                        <UserBrandItems key={brand.id} brand={brand}/>
                    ))
                }
              
            </div>
          
    )
}

export default Brand;
