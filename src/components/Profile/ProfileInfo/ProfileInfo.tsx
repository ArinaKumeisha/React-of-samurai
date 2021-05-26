import React from 'react';
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        < div>
            <div>
                <img src="https://www.nastol.com.ua/large/201805/284332.jpg"/>
            </div>
            <div>
                <img src="https://shutniki.club/wp-content/uploads/2019/12/devushka_v_ochkah_risunok_4_06143556.jpg"/>
            </div>
            <div className={s.descriptionBlock}>ava+discription</div>
        </div>
            )
}
export default ProfileInfo;
