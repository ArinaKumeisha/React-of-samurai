import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux_store";
import {InitialStateSetUserType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    /*   let {id, email, login} = response.data.data   деструктуризация*/
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return (
            <Header
                {...this.props}
                isAuth={this.props.isAuth}
                login={this.props.login}/>

        )
    }
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    setAuthUserData: (payLoad: InitialStateSetUserType) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
