import React from 'react'
import s from './Users.module.css'
import MapUserList from './MapUserList/MapUserList'
import DimasPaginator from './Paginator.jsx/DimasPaginator'
import { UCProps } from './UsersContainer'


export type UsersPropsType = UCProps & {
    changeCurrentPage_ : (a : number) => void 
}
// {totalUserItems, followCircle, UserList, unfollowCircle, buttonIsEnable,
//     currentUserPage, pageNumber, currentArrayElement, getLocalUsersByDimaTK,
//     setNonLocalUsersByDimaTK}
const Users : React.FC<UsersPropsType> = (props) => {

    return (
        <div>
            Total Employees : {props.totalUserItems}
            <div className={s.item}>
                <input type='buttom' />
            </div>
            <div>
                <MapUserList {...props} />
            </div>
            <div>
                <DimasPaginator {...props}/>
            </div>
        </div>
    )
}

export default Users
