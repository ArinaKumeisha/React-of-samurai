import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux_store";
import Preloader from "../preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirects";
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return (
            <>    {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    onPageHandler={this.onPageHandler}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,      // подразумевает follow: follow, где второе follow - это санки
        unFollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers: getUsersThunkCreator
    }),
    withAuthRedirect,
)(UsersContainer)



