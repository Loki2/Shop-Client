import React, {useContext} from 'react';
import Router  from 'next/router';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {MY_CONTACT } from '../../graphql/Profile';


const Contact = () => {
    const { data, loading, error } = useQuery(MY_CONTACT);
    
    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>


    return (
        <div>
            <h3>Contact Information:</h3>
                {
                    data.user.contact === null ? <button onClick={() => Router.push('/profile/create')}>Add</button> :
                    <div>
                        <span>  ປະເພດການຕິດຕໍ: {data.user.contact.type}</span><br/>
                        <span>  ເບີໂທຕິດຕໍ: {data.user.contact.contactNo}</span><br/>
                        <span>  ອີເມວຫລັກ: {data.user.contact.conditionEmail1}</span><br/>
                        <span>  ອີເມວສຳຣ້ອງ: {data.user.contact.conditionEmail2}</span>
                        <div>
                            <button>Edit</button>
                        </div>
                    </div>
                }
            {/* <button onClick={() => Router.push('/profile/create')}>Add</button> */}
        </div>
    )
}

export default Contact
