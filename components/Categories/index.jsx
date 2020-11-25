import React from 'react';
import { useQuery, useMutation} from '@apollo/react-hooks';
import {MY_CATEGORIES} from '../../graphql/Category';
import UserCatItems from './UserCatItems';


const Category = () => {
    const {data, loading, error} = useQuery(MY_CATEGORIES);
    // console.log("Categories:", data)
    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>  
    return (
        <div style={{ width: '50%', margin: 'auto' }}  >
        <button onClick={() => Router.push('/manage/createProduct')}>Create Product</button>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
                <h3 style={{ margin: 'auto' }}>Image</h3>
                <h3 style={{ margin: 'auto' }}>Name</h3>
                <h3 style={{ margin: 'auto' }}>Actions</h3>
        </div>
            {
                data.user.categories.length > 0 &&
                data.user.categories.map(category => (
                    <UserCatItems key={category.id} category={category} />
                ))
            }
            
        </div>
    )
}

export default Category;
