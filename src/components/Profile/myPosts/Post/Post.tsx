import React from "react";
import s from "./post.module.css"
import {PostsType} from "../../../../redux/store";


export const Post = (props:PostsType) => {

    return (
        <div className={s.item}>
            {props.message}

            <div>
                <span>like </span>{props.likeCount}<div><img src={props.img}/></div>
            </div>
                </div>
                )

}
export default Post;
