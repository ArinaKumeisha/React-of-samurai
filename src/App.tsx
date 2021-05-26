import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music";
import {addPost, RootStateType} from './redux/state';
import New from "./components/New/New";
import Friends from "./components/SideBar/Friends";


type PropsType = {
    state: RootStateType
    addPost: (postMessage:string) => void
}

const App = (props: PropsType) => {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path="/Profile" render={() => <Profile posts={props.state.profilePage.posts}
                                                                  addPost={props.addPost}/>}/>
                    <Route path="/New" render={() => <New/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Friends" render={()=> <div>
                        <Friends friends={props.state.sideBar.friends}/>
                    </div>}/>

                </div>
            </div>

    )
}
export default App;
