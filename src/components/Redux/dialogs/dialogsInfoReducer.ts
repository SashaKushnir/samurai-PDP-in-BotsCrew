import { dialogsActions, SEND_MESSAGE } from "./dialogsActions";
import { GetActionsTypes } from "../app/appReducer";

let _idMessageMCount : number | null


export type MessageInfoObjectType = {
    id : number | null,
    message : string,
    me : boolean
}
export type dFriendObjectType =  {
    name : string
    id  : number
   // message : string | null
}
export type MessageInfoType = Array<MessageInfoObjectType>
export type d_FriendsInfoType = Array<dFriendObjectType>
type dialogsPageType = {
    d_MessagesInfo : Array<MessageInfoObjectType>,
    d_FriendsInfo : d_FriendsInfoType
}
let dialogsPage : dialogsPageType  = {
    d_MessagesInfo : [
    {id : 1, message : "Hello, Lets play something", me : true},    
    {id : 3, message : "Yeaaahhhhh", me : false},
    {id : 4, message : "Hello, Lets1111212 play something", me : true},
    {id : 5, message : "Hello, Lets play something", me : true}
  ],
   d_FriendsInfo : [
    { name: 'Ninzya', id: 1},
    { name: 'Babe', id: 2 },
    { name: 'Mam', id: 3 },
    { name: 'Dad', id: 4 }
  ]
}
const dialogsInfoReducer = (dialogsInfo = dialogsPage, action : GetActionsTypes<typeof dialogsActions>) => {
    switch (action.type) {
        case SEND_MESSAGE:
            _idMessageMCount = (dialogsInfo.d_MessagesInfo.length + 1)
            let newMessageD : MessageInfoObjectType = { id: _idMessageMCount, message: action.message, me: true }
            return {
                ...dialogsInfo,
                d_MessagesInfo : [...dialogsInfo.d_MessagesInfo , newMessageD]
            }
        default:
            return dialogsInfo
    }
}




export default dialogsInfoReducer       
