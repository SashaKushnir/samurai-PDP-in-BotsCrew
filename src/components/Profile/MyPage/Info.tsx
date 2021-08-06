
// @ts-ignore
import s from './Info.module.css'
import React, {ChangeEvent, ReactElement, useState} from 'react'
import InfoShowsNEditMode from './InfoShows/InfoShowsNEditMode'
import InfoShowsEditMode from './InfoShows/InfoShowsEditMode'
import {MyPageNonContainerProps} from "./MyPage";
import {ContactsReturnType} from "./Contacts/Contacts";

// export interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }
export type InfoPropsType = {
  contacts : Array<React.ReactNode>
} & MyPageNonContainerProps

const Info: React.FC<InfoPropsType> = React.memo (props => {

  let [editMode, setEditMode] = useState(false)
  const savePhoto = (e: ChangeEvent<HTMLInputElement>) : void => {
    if (e.target.files?.length)
    props.savePhoto(e.target.files[0])
  }
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActavateEditMode = () => {
    setEditMode(false)
  }

  const formOnSubmit = (value : any) =>  /*ddddddddddddddddddddddddddddddddd*/
  {
     props.updateProfileData(value)
     .then(() => { 
      setEditMode(false)
      })  
  }
  return (
    <div className = {s.NoImg}>
        {!editMode && 
          <InfoShowsNEditMode savePhoto = {savePhoto} activateEditMode = {activateEditMode}
          profileByUserId = { props.profileByUserId} contacts = {props.contacts} cantChangeStatus = {props.cantChangeStatus}
          updateProfileStatus = {props.updateProfileStatus}  status = {props.status}
          />
      }
      {
        editMode && 
        <div>
           <InfoShowsEditMode initialValues = {props.profileByUserId} savePhoto = {savePhoto} onSubmit = {formOnSubmit}
           deActavateEditMode = {deActavateEditMode} status = {props.status}
           profileByUserId = { props.profileByUserId}  updateProfileStatus = {props.updateProfileStatus}
           contacts = {props.contacts} cantChangeStatus = {props.cantChangeStatus}
           anyTouched/>
        </div>
      }
    </div>
  )
})

export default Info


