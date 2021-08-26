import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {setUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "18320"
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}/>
        )
    }
}

type mapStateToPropsType = {
    profile: string | null
    status: string
}

type mapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

