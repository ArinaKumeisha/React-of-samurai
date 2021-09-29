import React from "react";
import s from "./user.module.css"
import avatar from "../../assets/image/avatar.png"
import {NavLink} from "react-router-dom";
import Pagination from "rc-pagination";
import localeInfo from '../../locale/en_US';
import {UsersType, UserType } from "../../types/types";

export let Users = (props: UsersType) => {
    /*let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }*/
    return (
        <div className={s.users}>
            <div className={"pagination"}>
                {/*комент    {
                    page.map((p, index) => {
                            return (
                                <span key={index}
                                      className={props.currentPage === p ? s.selected : ""}
                                      onClick={() => {
                                          props.onPageHandler(p)
                                      }}>{p}</span>
                            ) } )
                }*/}
                <Pagination className="ant-pagination"
                            showTitle={true}
                            defaultCurrent={props.currentPage}
                            total={props.totalUsersCount}
                            onChange={(e) => props.onPageHandler(e)}
                            defaultPageSize={props.pageSize}
                            pageSize={props.pageSize}
                            locale={localeInfo}/>
            </div>
            {
                props.users.map(u => {
                    return <div key={u.id} className={s.user}>

                        <div className={s.common}>
                            <NavLink className={s.photo} to={'./profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                />
                            </NavLink>
                            <div className={s.followAndDescription}>
                                <div className={s.left}>
                                    {u.followed ?
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

                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>

                                <div className={s.right}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>

                            </div>
                        </div>
                    </div>


                })
            }

        </div>

    )
}









