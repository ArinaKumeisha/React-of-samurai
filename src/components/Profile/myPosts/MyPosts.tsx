import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType,} from "../../../redux/state";

type PropsType = {
   // message: string
    addPost: (postMessage: string) => void
    posts: Array<PostsType>
    changeText: (newText: string) => void
    newPostText: string
}

function MyPosts(props: PropsType) {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>);


    let addPost = () => {
        addPost()
        props.addPost("")
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea value={} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        props.changeText(e.currentTarget.value)
                    }}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}></div>
            {postsElements}
        </div>
    )
}

export default MyPosts;
