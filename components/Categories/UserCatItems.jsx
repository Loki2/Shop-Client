import React from 'react'

const UserCatItems = ({category}) => {
    return (
        <div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
            <img src={category.imageUrl} alt="" width='80px' />
            <h3 style={{ margin: 'auto' }}>{category.name}</h3>
            <div style={{ margin: '5px', alignItems: 'center', display: 'flex', alignItems: 'center' }}>
                <button style={{ margin: '10px', background: 'orange', color: 'white', padding: '10px', border: 'none' }} onClick={() => setEdit(true)}>Edit</button>
                <button style={{ margin: '10px', background: 'red', color: 'white', padding: '10px', border: 'none' }}>Delete</button>
            </div>
        </div>
    </div>
    )
}

export default UserCatItems
