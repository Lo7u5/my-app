import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo profile={props.profile.userProfile} />
            <MyPosts profile={props.profile}  draftPostActionCreator={props.draftPostActionCreator} addPostActionCreator={props.addPostActionCreator}/>
        </main>
    );
}

export default Profile;