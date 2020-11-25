import React from 'react'

const BankAccountItems = ({bank}) => {
    return (
        <div>
           <div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
                <img src={bank.qrcodeUrl} alt="" width='80px' />
                <h3 style={{ margin: 'auto' }}>{bank.bankName}</h3>
                <h3 style={{ margin: 'auto' }}>{bank.accountName}</h3>
                <div style={{ margin: '5px', alignItems: 'center', display: 'flex', alignItems: 'center' }}>
                    <button style={{ margin: '10px', background: 'orange', color: 'white', padding: '10px', border: 'none' }} onClick={() => setEdit(true)}>Edit</button>
                    <button style={{ margin: '10px', background: 'red', color: 'white', padding: '10px', border: 'none' }}>Delete</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BankAccountItems
