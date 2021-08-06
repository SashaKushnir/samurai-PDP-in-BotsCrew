
import React from 'react'
import Contacts from './Contacts/Contacts'
import Info from './Info'
import {MyPageProps} from "./MyPageContainer";
import {ContactsType} from "../../Redux/profile/profileInfoReducer";

export type MyPageNonContainerProps = {
  cantChangeStatus : boolean
} & MyPageProps

export type ContactsOwnPropsType = {
  key : string
  value : string
  key1 : string
  showInputs : boolean
}

const MyPage : React.FC<MyPageNonContainerProps> = React.memo (props => {
  
  let contacts : Array<React.ReactNode> = Object.keys(props.profileByUserId.contacts).map(key =>
      <Contacts key = {key} value= {props.profileByUserId.contacts[key]} key1= {key} showInputs = {false} />)
  return (
    <div>
      {!props.profileByUserId.userId ? null :
        <div>
          <Info {...props} contacts = {contacts}/>
        </div>
      }
    </div>
  )
})

export default MyPage