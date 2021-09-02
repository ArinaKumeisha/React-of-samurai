import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from 'redux-form';


function MyPosts(props: MyPostPropsType) {
    const addPost = (value: any) => {
        props.addPost(value.newPost)
    }
    return (
        <div className={s.postBlock}>
            <hr/>
            {
                props.posts.map(p =>
                    <Post
                        key={p.id}
                        id={p.id}
                        message={p.message}
                        likeCount={p.likeCount}
                        img={p.img}
                    />)
            }
            <hr/>
            <h3>My post</h3>
            <PostReduxForm onSubmit={addPost}/>
        </div>
    )
}

export const PostForm = (props: any) => {
    return (
        <form
            onSubmit={props.handleSubmit}>
            <Field
                name="newPost"
                component="input"
                type={'text'}/>
            <button>Add post</button>
        </form>
    )
}
 const PostReduxForm = reduxForm({form: 'contact'})(PostForm)


export default MyPosts;
