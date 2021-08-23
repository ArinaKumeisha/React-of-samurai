import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"


type HeaderPropsType = {
    isAuth: boolean
    login: null | string
}
 const Header  = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
        <img src ='https://i1.7fon.org/thumb/z134398.jpg' />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink> }
            </div>
    </header>
    )}
export default Header;
