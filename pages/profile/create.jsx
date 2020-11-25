import React from 'react';
import CreateProfile from '../../components/Profile/CreateProfile';
import Sidebar from '../../components/Sidebar';

const createPage = () => {
    return (
        <div>
            <Sidebar />
            <CreateProfile />
        </div>
    )
}

export default createPage
