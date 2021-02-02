import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts postData={props.postData.posts} />
    </main>
  );
}

export default Profile;