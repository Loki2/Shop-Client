 import React from 'react';
 import Router  from 'next/router';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {MY_CURRENTADDRESS } from '../../graphql/Profile';



 const CurrentAddress = () => {
     const {data, loading, error} = useQuery(MY_CURRENTADDRESS);
    //  console.log("User Current Address:", data)
    //  console.log("Loading:", loading)
    //  console.log("Error:", error)

     if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>
     return (
         <div>
             <h3>Current Address:</h3>
             {
                 data.user.currentAddress === null ? <button onClick={() => Router.push('/profile/create')}>Add</button> :
                 <div>
                        <span>   Address1: {data.user.currentAddress.address1}</span><br/>
                        <span>   Address2: {data.user.currentAddress.address2}</span><br/>
                        <span>  Village: {data.user.currentAddress.village}</span><br/>
                        <span>  City: {data.user.currentAddress.city}</span><br/>
                        <span>  Province/State: {data.user.currentAddress.province}</span>
                        <div>
                            <button>Edit</button>
                        </div>
                 </div>
             }
         </div>
     )
 }
 
 export default CurrentAddress
