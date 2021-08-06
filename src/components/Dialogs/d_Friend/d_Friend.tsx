import React from 'react'
import s from './d_Friend.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id : number
    name : string
}

const D_Friend: React.FC<PropsType> = (props) => {
    const path = '/dialogs/' + props.id 
    
    return (
        <div className={s.d_Friend}>
        <NavLink activeClassName = {s.ActiveFriend} to = {path} >
            {props.name}
        </NavLink>
        </div>
    )
}

export default D_Friend
