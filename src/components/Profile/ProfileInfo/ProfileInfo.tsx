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
            < div>
                <div>
                    <img src="https://www.nastol.com.ua/large/201805/284332.jpg" className={s.item}/>
                </div>
                <div>
                    <img className={s.info}
                         src="https://shutniki.club/wp-content/uploads/2019/12/devushka_v_ochkah_risunok_4_06143556.jpg"/>

                    <div className={s.descriptionBlock}>
                    <div className={s.photo}>
                        <img src={props.profile.photos.large}/></div>
                        <div className={s.description}>
                            <h3>Обо мне</h3>
                            <div>{props.profile.aboutMe}</div>
                            <h3>Мои социальные сети</h3>
                            <a href="https://google.com/">{props.profile.contacts.facebook}</a>
                            <a href="https://google.com/">{props.profile.contacts.website}</a>
                            <a href="https://google.com/">{props.profile.contacts.vk}</a>
                            <a href="https://google.com/">{props.profile.contacts.twitter}</a>
                            <a href="https://google.com/">{props.profile.contacts.instagram}</a>
                            <a href="https://google.com/">{props.profile.contacts.youtube}</a>
                            <a href="https://google.com/">{props.profile.contacts.github}</a>
                            <a href="https://google.com/">{props.profile.contacts.mainLink}</a>
                            <a href="https://google.com/">{props.profile.fullName}</a>
                            <a href="https://google.com/">{props.profile.lookingForAJob}</a>
                            <h4>{props.profile.lookingForAJobDescription}</h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileInfo;
/*
data:
    aboutMe: "я круто чувак 1001%"
contacts:
    facebook: "facebook.com"
github: "github.com"
instagram: "instagra.com/sds"
mainLink: null
twitter: "https://twitter.com/@sdf"
vk: "vk.com/dimych"
website: null
youtube: null
    [[Prototype]]: Object
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos:
    large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"
*/

