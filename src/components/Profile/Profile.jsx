import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPostsContainer";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
}

export default Profile;