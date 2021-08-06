import React from 'react'
import s from './MapUserList.module.css'
import UserDefaultPhoro from '../../../images/DefaultAvatar.jpg'
import { NavLink } from 'react-router-dom'
import { UserListType } from '../../Redux/users/usersReducer'
import { UCProps } from "../UsersContainer";


const MapUserList : React.FC<UCProps> = ({UserList, buttonIsEnable, unfollowCircle, followCircle}) => {
  
    return (
        <div className={s.UserItemWrapper}>
            {
                UserList.map((e: UserListType, index) => {
                    return (
                        <div key = {index}>
                        {e.id ?
                            <div className={s.UserItem}>
                                <NavLink to={'./profile/' + e.id}>
                                    <img className={s.imgItem} src={e.photos.large !== null ? e.photos.large : UserDefaultPhoro} alt='Avatar' />
                                    <div className={s.textItem}>
                                        {e.name}
                                        {e.status}
                                    </div>
                                </NavLink>
                                <div>
                                    <button disabled={buttonIsEnable.some(val => val === e.id)} onClick={() => {
                                        if (e.followed)
                                            unfollowCircle(e.id, index)
                                        else
                                            followCircle(e.id, index)

                                    }}> {e.followed ? 'followed' : 'unfollowed'}</button>
                                </div>
                            </div> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MapUserList
