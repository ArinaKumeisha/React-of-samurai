import {ActionsType} from "./profile-reducer";


export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
    img: string
}

export type InitialStateType= {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

/*export type InitialStateType = typeof initialState*/

let initialState: InitialStateType= {
    dialogs: [
        {
            id: 1,
            name: "Marina",
            img: "https://video-pricheski.ru/photo/img/foto-devushek-s-korotkoi-strizhkoi-dlia-avy-3.jpg"
        },
        {
            id: 2,
            name: "Alina",
            img: "https://bipbap.ru/wp-content/uploads/2017/05/370.jpg"
        },
        {
            id: 3,
            name: "Alex",
            img: "https://prikolnye-kartinki.ru/img/picture/Aug/23/f0b9e5a7d4b40ce999e2ba9b4e4d1b39/2.jpg"
        },
        {id: 4, name: "Viktor", img: "https://87.img.avito.st/640x480/8817015087.jpg"},
        {
            id: 6,
            name: "Anna",
            img: "https://i.pinimg.com/originals/b2/95/45/b29545916fbf406f7cec10ff1845a191.jpg"
        },
    ] /*as Array<DialogsType>*/,
    messages: [
        {id: 1, message: "How are you?"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo"},
    ], // as Array<MessagesType>,
    newMessageText: " "
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "UP-DATE-NEW-MESSAGE-TEXT":
            return {
                ...state, newMessageText: action.newMessage
            }
        case "SEND-MESSAGE":
            const nextMessage: MessagesType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }

            return {
                ...state, messages:[nextMessage,...state.messages],
                newMessageText: ""
            }

        default:
            return state
    }
}

export const upDateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UP-DATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}
export const sendMessageAC = () => {
    return (
        {type: "SEND-MESSAGE"}
    ) as const
}
