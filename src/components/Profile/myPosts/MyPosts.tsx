import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import state, {PostsType,} from "../../../redux/state";
import {rerenderEntireTree} from "../../../render";

type PropsType = {
    addPost: (postMessage: string) => void
    posts: Array<PostsType>
}

function MyPosts(props: PropsType) {
    debugger
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text)
            newPostElement.current.value=" "
        }
         rerenderEntireTree(state)

    }
    return (
        <div className={s.postBlock}>

            <div>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
