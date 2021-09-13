import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux_store";
import {setAuthUserData, logOut} from "../../redux/auth-reducer";

import {connect, ConnectedProps} from "react-redux";

class HeaderContainer extends React.Component<connectorType> {
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

// type PropsType = MapDispatchToPropsType & MapStateToPropsType
// type MapDispatchToPropsType = {
//     setAuthUserData: () => void
//     logOut: ()=> void
// }
// type MapStateToPropsType = {
//     isAuth: boolean
//     login: string | null
// }
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const connector = connect(mapStateToProps, {setAuthUserData, logOut})
type connectorType = ConnectedProps<typeof connector>
export default connector(HeaderContainer)