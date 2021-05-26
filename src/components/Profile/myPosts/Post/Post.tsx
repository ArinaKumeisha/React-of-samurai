import React from "react";
import s from "./post.module.css"
import {PostsType} from "../../../../redux/state";

const Post = (props:PostsType) => {

    return (
        <div className={s.item}>
            < img src="https://www.fotoprizer.ru/img_inf/st_221.jpg"/>
            {props.message}

            <div>
                <span>like </span>{props.likeCount}
            </div>
        </div>
)
}
export default Post;
