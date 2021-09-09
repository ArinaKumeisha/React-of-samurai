import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {PropsType} from '../components/Profile/ProfileContainer';
import {AppStateType} from '../redux/redux_store';


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'login'}/>
        return <Component  {...restProps as T}/>
    }

    let ConectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConectedRedirectComponent
}