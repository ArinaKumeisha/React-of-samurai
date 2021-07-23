import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music";
import New from "./components/New/New";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs"
                       render={() =>
                           <DialogsContainer/>}/>


                <Route path="/profile" render={() =>
                    <Profile/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>

                <Route path="/new" render={() => <New/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" render={() => <div>
                </div>}/>

            </div>
        </div>

    )

}
export default App;
