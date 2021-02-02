import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

  let postData = [
    { id: 1, message: 'hey yo', likeCount: '15' },
    { id: 2, message: 'it is happening', likeCount: '1' }
];

  return (
    <main>
      <ProfileInfo />
      <MyPosts data={postData} />
    </main>
  );
}

export default Profile;