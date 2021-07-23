import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";



function MyPosts(props: MyPostPropsType) {
const changeTextHandler =(e: ChangeEvent<HTMLTextAreaElement>) =>{
    props.changeText(e.currentTarget.value)
}

const addPostHandler =() => {
    props.addPost()
}
    return (
        <div className={s.postBlock}>
            <hr/>
            {
                props.posts.map(p =>
                    <Post
                    id={p.id}
                    message={p.message}
                    likeCount={p.likeCount}
                    img={p.img}
                />)
            }
            <hr/>

            <h3>My post</h3>

            <textarea
                value={props.newPostText}
                onChange={changeTextHandler}>
            </textarea>
            <button
                onClick={addPostHandler}>Add post</button>
        </div>

    )

}

export default MyPosts;
