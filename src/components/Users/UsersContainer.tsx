import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducers";
import {AppStateType} from "../../redux/redux_store";


type MapStateToPropsType = {
    usersPage: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;