import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux_store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
      this.props.setAuthUserData()
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
    setAuthUserData: () => void
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
