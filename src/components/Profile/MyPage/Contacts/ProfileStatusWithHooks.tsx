
import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusWithHooksPropsType = {
    status : string
    updateProfileStatus : (status : string) => void
    cantChangeStatus : boolean
}

const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksPropsType> = (props) =>  {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatusMode] = useState(props.status)
    
    useEffect(() => {
        setStatusMode(props.status)
    },[props.status])

    const onStatusChange = (e :  ChangeEvent<HTMLInputElement>) => {
        setStatusMode(e.target.value)
    }   
    const deactivateeditmode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const activateeditmode = () => {
        if(!props.cantChangeStatus)
        setEditMode(true)
    }
        return (
            <span>
                {!editMode &&
                <span onClick = {activateeditmode}>
                    {props.status || <div>Empty</div>}
                </span> }
                {editMode &&
                   <input autoFocus = {true} onChange = {onStatusChange}
                   onBlur = {deactivateeditmode} value = {status}
                    type="text" name ={'profilestatus'}/>
                }
            </span>
        )
}


export default  ProfileStatusWithHooks
