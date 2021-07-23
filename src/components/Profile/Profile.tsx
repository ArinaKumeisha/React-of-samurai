import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

/*type ProfilePropsType ={
    posts: Array<PostsType>
    newPostText: string
    changeNewMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    sendNewMessage: () => void
}*/

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
