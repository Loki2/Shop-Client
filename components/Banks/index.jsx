import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Router  from 'next/router';

import { MY_BRANKS } from '../../graphql/Banks';
import BankAccountItems  from './BankAccountItems';

const BankAccount = () => {
    const { data, loading, error} = useQuery(MY_BRANKS);
    //console.log("Bank Accounts:", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>  
    return (
        <div style={{ width: '50%', margin: 'auto' }}  >
        <button onClick={() => Router.push('/banks/CreateBankAc')}>Create Bank AC</button>
   <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', width: '100%' }}>
           <h3 style={{ margin: 'auto' }}>QR Code</h3>
           <h3 style={{ margin: 'auto' }}>Bank Name</h3>
           <h3 style={{ margin: 'auto' }}>AC Name</h3>
           <h3 style={{ margin: 'auto' }}>Actions</h3>
   </div>
      {
            data.user.bankAccounts.length > 0 &&
            data.user.bankAccounts.map(bank => (
                <BankAccountItems key={bank.id} bank={bank} />
            ))
      }
     
   </div>
    )
}

export default BankAccount
