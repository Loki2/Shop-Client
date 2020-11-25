import React from 'react';
import Contact from './Contact';
import CurrentAddress from './CurrentAddress';
import HometownAddress from './HometownAddress';
import UserProfile from './UserProfile';



const Profile = () => {
    return (
        <div className="profile_page">
                <div className="user_profile">
                    <UserProfile />
                </div>
                <br/>
                <div className="contact">
                    <Contact />
                </div>
                <div className="current_address">
                    <CurrentAddress />
                </div>
                <div className="hometown_address">
                    <HometownAddress />
                </div>
        </div>
    )
}

export default Profile;
