import {rerenderEntireTree} from "../render";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
    img: string

}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type FriendsType= {
    id: number
    name: string
    img:string
}



export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type SideBarPageType = {
   friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarPageType


}


export let state: RootStateType = {

    profilePage: {
        newPostText: "it-camasutra",
        posts: [
            {id: 1, message: "Hello, how are you?", likeCount: 15},
            {id: 2, message: "It's my first post", likeCount: 18},
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Arina", img: "https://video-pricheski.ru/photo/img/foto-devushek-s-korotkoi-strizhkoi-dlia-avy-3.jpg"},
            {id: 2, name: "Alina", img: "https://bipbap.ru/wp-content/uploads/2017/05/370.jpg"},
            {id: 3, name: "Dimych", img: "https://prikolnye-kartinki.ru/img/picture/Aug/23/f0b9e5a7d4b40ce999e2ba9b4e4d1b39/2.jpg"},
            {id: 4, name: "Viktor", img: "https://87.img.avito.st/640x480/8817015087.jpg"},
            {id: 6, name: "Anna", img:"https://i.pinimg.com/originals/b2/95/45/b29545916fbf406f7cec10ff1845a191.jpg" },
        ],
        messages: [
            {id: 1, message: "How are you?"},
            {id: 2, message: "Hello"},
            {id: 3, message: "Yo"},
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: "Alex",img:"http://drasler.ru/wp-content/uploads/2019/01/s1200-4.jpg"},
            {id: 2, name: "Petr",img:"https://meragor.com/files/styles//ava_800_800_wm/sfztn_man_avatar_4.jpg"},
            {id: 3, name: "Sasha",img:"https://klike.net/uploads/posts/2019-03/1551596637_4.jpg"},
        ]
    }
}
export let addPost=(postMessage:string)=>{
    const newPost:PostsType={
        id:5,
        message: state.profilePage.newPostText,
        likeCount:0
    }
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}

export let changeText=(newText: string) =>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}



export default state;