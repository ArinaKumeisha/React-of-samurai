import React from 'react';
import ProfileInfo, {ProfileType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props: ProfileType)=> {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
