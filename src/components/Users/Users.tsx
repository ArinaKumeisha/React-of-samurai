import React from "react";
import s from "./user.module.css"
import axios from "axios";
import userPhoto from "../../assets/image/avatar.png"
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {
componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
}
    render() {
        return (
            <div>
            <div>
                <span>1</span>
                <span>2</span>
                <span className={s.selected}>3</span>
                <span>4</span>
                <span>5</span>
            </div>

                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </div>
                        <div>{u.followed ?
                            <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Unfollow
                            </button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow
                            </button>
                        }
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>


                    </div>)
                }
            </div>

        )
    }
}


export default Users;