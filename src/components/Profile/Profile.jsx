import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts
          state={props.state}
          addPost={props.addPost}
          draftPost={props.draftPost}/>
    </main>
  );
}

export default Profile;