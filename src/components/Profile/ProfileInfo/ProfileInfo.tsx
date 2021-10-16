import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../preloader/preloader";
import {ProfileType} from '../../../types/types';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

const ProfileInfo = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        < div>
            <div>
                <img src="https://www.nastol.com.ua/large/201805/284332.jpg" className={s.item}/>
            </div>
            <div>
                <img className={s.info}
                     src="https://shutniki.club/wp-content/uploads/2019/12/devushka_v_ochkah_risunok_4_06143556.jpg"/>

                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div className={s.descriptionBlock}>
                    <div className={s.photo}>
                        <img src={props.profile.photos.small ? props.profile.photos.small : ''} alt="ava"/>
                        <div className={s.description}>
                            <h3>Обо мне</h3>
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
        </div>
    )
}
export default ProfileInfo;

