import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewForm from './components/New/New';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {setAuthUserData} from './redux/auth-reducer'
import {compose} from 'redux';
import {AppStateType} from './redux/redux_store';
import Preloader from './components/preloader/preloader';
import {inicializedApp} from './redux/app-reducer'


class App extends React.Component<ConectedType> {
    componentDidMount() {
        this.props.inicializedApp()
    }
    render() {
        if (!this.props.inicializedApp) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>}/>

                    <Route path="/new" render={() => <NewForm/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" render={() => <div>f</div>}/>
                    <Route path="/login" component={Login}/>
                </div>
            </div>)
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        inicialized: state.app.inicialized,
    }
}
let connector = connect(mapStateToProps, {inicializedApp})
type ConectedType = ConnectedProps<typeof connector>
export default connector(App)

