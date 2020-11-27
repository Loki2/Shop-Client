import React, { useContext } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_PROFILE} from '../../graphql/Profile';
import Router  from 'next/router';
import dayjs from 'dayjs';

const UserProfile = () => {
    const { data, loading, error } = useQuery(MY_PROFILE)
    console.log("User:", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>
    return (
        <>
        {
                data.user.profile === null || 
                data.user.profile === undefined ? 
                <button onClick={() => Router.push('/profile/create')}>Add</button> :
        <div>
              {/* Create Thumnail for no-cover-iamge */}
              <div className="cover_image">
                <img src={data.user.profile.coverImage} alt="cover_image" height="265px" width="1205px" style={{marginTop: "15px"}}/>
            </div>
             {/* Create Thumnail for no-profile-iamge */}
            <div className="profile_image" style={{alignItems: "center"}}>
                <img src={data.user.profile.profileImage} alt="profile_image" height="120px" width="180px"/>
            </div>
            <div className="personal_info">
            <h3>Personal Info:</h3>
                <span>Firstname: {data.user.profile.firstname}</span><br/>
                <span>Lastname: {data.user.profile.lastname}</span><br/>
                <span>Birthdate: {dayjs(data.user.profile.birthdate).format('YYYY-MMM-DD')}</span><br/>
                <span>Age: {data.user.profile.age}</span><br/>
                <span>Gender: {data.user.profile.gender}</span><br/>
                <span>Status: {data.user.profile.mentalStatus}</span><br/>
                <div>
                    <button>Edit</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default UserProfile;