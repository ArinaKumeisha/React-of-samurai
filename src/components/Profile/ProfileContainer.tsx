import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {setUserProfile} from "../../redux/profile-reducer";


/*
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
*/


/*export type ProfileType = {
    "aboutMe": string
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: { small: string, large: string }
}*/
type mapStateToPropsType = {
    profile: string | null
}
type mapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        this.props.setUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent)
