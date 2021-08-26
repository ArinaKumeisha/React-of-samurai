import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

export type ProfileType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
