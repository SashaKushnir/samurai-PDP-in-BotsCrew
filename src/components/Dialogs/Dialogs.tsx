import React  from 'react'
import s from './Dialogs.module.css'
import DfriendDialog from './d_FriendDialog/d_FriendDialog'
import  Dfriend from './d_Friend/d_Friend'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Mytextarea } from '../common/Forms/Mytextarea'
import { maxLengthCreator, requiredField } from '../FormControl/Validators/Validators'
import  {MessageInfoObjectType, dFriendObjectType } from '../Redux/dialogs/dialogsInfoReducer'
import { compose } from 'redux'
import {ConnectPropsDialogsType} from "./DialogsContainer";

let maxLength = maxLengthCreator(20)

const Dialogs : React.FC<ConnectPropsDialogsType> = (props) => {
    
    
    let mapD_Friends = props.d_FriendsInfo.map((obj : dFriendObjectType) => <Dfriend name={obj.name} id={obj.id} key = {obj.id}  />)
 
    let mapD_Messages = props.d_MessagesInfo.map((obj: MessageInfoObjectType) => {

        if (obj.me === true)
            return (
                <div key = {obj.id}  className = {s.RigthSide}>
                <DfriendDialog  message={obj.message}  me={obj.me} who='me' />
                </div>
            )
        else
            return (
                <div key = {obj.id} className ={s.LeftSide}>
                <DfriendDialog    message={obj.message} me={obj.me} who={"Mama"} />
                </div>
            )
    })

    const sending_ = (obj : IUser) => {
        props.sendingM(obj.message)
    }
 

    return (
        <div className={s.dialogs_wrapper}>
            <div  className={s.d_Friends} >
                {mapD_Friends}
            </div>
            <div></div>
            <div > 
                <div>
                {mapD_Messages}
               </div>
                <div className={s.EnterMessage}>
                <ContainerSendMessageForm onSubmit = {sending_}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs


type IUser = {message : string}
type IProps = {}
const SendMessageForm: React.FC<InjectedFormProps<IUser>> = ({handleSubmit, ...props}) => {
    return (
        <form action="" onSubmit = {handleSubmit}>
                    <Field component = {Mytextarea}
                    validate = {[requiredField, maxLength  ]}
                        name="message"  cols="30" rows="4"
                        placeholder="Enter your message"
                        />
                        <button>Send Message</button>
                    
        </form>
    )
}
const ContainerSendMessageForm = compose( 
reduxForm<IUser>({form : 'dialogueMessage'}))(SendMessageForm)