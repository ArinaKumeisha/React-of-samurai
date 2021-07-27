import React from "react";
import s from "./user.module.css"
import axios from "axios";
import userPhoto from "../../assets/image/avatar.png"
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= pagesCount; i++) {
            page.push(i)
        }
        return (
            <div>
                <div>
                    {
                        page.map(p => <span className={this.props.currentPage === p ? s.selected : ""}
                                            onClick={() => {
                                                this.onPageHandler(p)
                                            }}>{p}</span>
                        )
                    }
                </div>

                {
                    this.props.users.map(u => <div key={u.id}>
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