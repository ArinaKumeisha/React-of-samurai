import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducers";
import {AppStateType} from "../../redux/redux_store";


export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalUsersCount: number) => {
            dispatch(setTotalUserCountAC(totalUsersCount))
        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;