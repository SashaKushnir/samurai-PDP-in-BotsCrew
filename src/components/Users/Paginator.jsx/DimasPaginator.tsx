
import React from 'react'
import s from '../Users.module.css'
import { UsersPropsType } from "../Users";





const DimasPaginator : React.FC<UsersPropsType> = ({currentArrayElement, currentUserPage, pageNumber,totalUserItems,setNonLocalUsersByDimaTK, ...props}) => {
    let pageNumberItems = []
    // @ts-ignore
    let totEmpP = Math.ceil((totalUserItems / pageNumber))
    for (let i = 1; i <= totEmpP; i++) {
        pageNumberItems.push(i)
    }
    let leftBorder = (currentUserPage - 1) * pageNumber + 1;
    let rightBorder = currentUserPage * pageNumber;
    let output = pageNumberItems.filter(val => val >= leftBorder && val <= rightBorder)
        .map((val) => <span key = {val} onClick={() => props.getLocalUsersByDimaTK(val, pageNumber)}
         className={currentArrayElement === val ? s.selectedItem : s.item}>{val} </span>)


    const change5PaginatorsMin = () => {
        setNonLocalUsersByDimaTK(leftBorder - pageNumber, pageNumber, currentUserPage - 1)
    }
    const change5PaginatorsMax = () => {
        setNonLocalUsersByDimaTK(rightBorder + 1, pageNumber, currentUserPage + 1)
    }

    return (
        <div>
            <button onClick={change5PaginatorsMin}>
                Previous {pageNumber}
            </button>
            {
                output
            }
            <button onClick={change5PaginatorsMax}>
                Next {pageNumber}
            </button>
        </div>
    )
}

export default DimasPaginator




