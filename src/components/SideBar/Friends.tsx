import React from "react";
import s from "./Friends.module.css"
import { SideBarPageType} from "../../redux/state";


/*type Sidebar = {
    friends: Array<FriendsType>
}*/

function Friends(props: SideBarPageType) {
    return (
        <div>
            {props.friends.map(fr => (
                <div className={s.friendItem}>
                    {fr.name}
                    < img src={fr.img}/>
                </div>
            ))}
        </div>
    )
}

export default Friends;