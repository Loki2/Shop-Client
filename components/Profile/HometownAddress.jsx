import React from 'react';
import Router  from 'next/router';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {MY_HOMETOWNADDRESS } from '../../graphql/Profile';


const HometownAddress = () => {
    const { data, loading, error  } = useQuery(MY_HOMETOWNADDRESS);
        // console.log("User Hometown Address:", data)
        // console.log("Loading:", loading)
        // console.log("Error:", error)
        if (error) return <p>Oooops...Something went wrong!</p>
        if (loading) return <p>Loading...!</p>
    return (
        <div>
            <h3>Hometown Address:</h3>
            {
                  data.user.hometownAddress === null ? <button onClick={() => Router.push('/profile/create')}>Add</button> :
                  <div>
                         <span>   Address1: {data.user.hometownAddress.address1}</span><br/>
                         <span>   Address2: {data.user.hometownAddress.address2}</span><br/>
                         <span>  Village: {data.user.hometownAddress.village}</span><br/>
                         <span>  City: {data.user.hometownAddress.city}</span><br/>
                         <span>  Province/State: {data.user.hometownAddress.province}</span>
                         <div>
                             <button>Edit</button>
                         </div>
                  </div>
            }
        </div>
    )
}

export default HometownAddress
