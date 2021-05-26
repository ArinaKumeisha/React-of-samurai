import React from "react";
import s from "./Friends.module.css"
import {SideBarPageType} from "../../redux/state";
import Friends from "./Friends";


    function Sidebar(props:SideBarPageType) {
        return (
            <div>
                <Friends friends={props.friends} />
            </div>
        )










    }
       /* let friendsElements=props.friends.map(f=>< Friends name={f.name} id={f.id}/>)
        return (
            <div>
                {friendsElements}
            </div>
        )

    }
*/


    export default Sidebar;