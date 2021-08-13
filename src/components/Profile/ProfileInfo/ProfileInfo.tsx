import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../preloader/preloader";


export type ProfileType = {
    profile: any
}
const ProfileInfo = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            < div >
                <div >
                    <img src="https://www.nastol.com.ua/large/201805/284332.jpg"/>
                </div>
                <div >
                    <img className={s.info}
                        src="https://shutniki.club/wp-content/uploads/2019/12/devushka_v_ochkah_risunok_4_06143556.jpg"/>
                </div>
                <div className={s.descriptionBlock}>ava+discription</div>
                <img src={props.profile.photos.large}/>
               {/* <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.mainLink}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>*/}
            </div>
        )
    }
}
export default ProfileInfo;
