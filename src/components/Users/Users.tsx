import React from "react";
import s from "./user.module.css"
import userPhoto from "../../assets/image/avatar.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Pagination from "rc-pagination";
import localeInfo from '../../locale/en_US';


type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    onPageHandler: (pageNumber: number) => void
    followingInProgress: number[]
    /*toggleIsFollowingProgress: (followingInProgress: boolean, userID: number) => void*/
}

export let Users = (props: UsersType) => {
    /*let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []


    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }*/
    return (
        <div>
            <div>
            {/*комент    {
                    page.map((p, index) => {
                            return (
                                <span key={index}
                                      className={props.currentPage === p ? s.selected : ""}
                                      onClick={() => {
                                          props.onPageHandler(p)
                                      }}>{p}</span>
                            )
                        }
                    )
                }*/}
                <Pagination className="ant-pagination"
                            showTitle={true}
                            defaultCurrent={props.currentPage}
                            total={props.totalUsersCount}
                            current={props.currentPage}
                            onChange={(e)=>props.onPageHandler(e)}
                            defaultPageSize={props.pageSize}
                            locale={localeInfo}
                />
            </div>

            {
                props.users.map(u => {
                    return <div key={u.id}>

                        <div>
                            <NavLink to={'./profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={s.photo}/>
                                </NavLink>
                        </div>
                        <div>{u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unFollow(u.id);
                                    }}>UnFollow
                            </button> :

                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow
                            </button>
                        }

                        </div>

                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    </div>
                })
            }
        </div>

    )
}









