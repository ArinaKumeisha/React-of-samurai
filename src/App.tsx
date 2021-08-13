import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music";
import New from "./components/New/New";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs"
                       render={() =>
                           <DialogsContainer/>}/>

                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>

                <Route path="/new" render={() => <New/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" render={() => <div>f</div>}/>
            </div>
        </div>)
}



export default App;
