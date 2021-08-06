
import React from 'react'
import s from '../Users.module.css'

const Paginator = (props) => {
    let pageNumberItems = []
    let curEmpP = props.currentUserPage

    let n = props.pageNumber
    let totEmpP = Math.ceil(props.totalUserItems / n)


    if (props.totalUserItems) {
        let i
        if (curEmpP < n + 1) {
            for (i = 1; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else if ((totEmpP % n === 0) && (curEmpP === totEmpP - n)) {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else if (curEmpP > ((totEmpP % n !== 0) ? (totEmpP - totEmpP % n) : (totEmpP - n - 1))) {


            for (i = totEmpP; i >= (curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1); i--) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
    }
    return (
        <div>

            {curEmpP > n ? <span className={s.item}
             onClick={() => props.changeCurrentPage_(1)}>
                {1}
            </span> : null
            }
            {pageNumberItems.map((elem, index) => {
                return (
                    <span key = {elem} className={props.currentUserPage === index ? s.selectedItem : s.item}
                        onClick={() => props.changeCurrentPage_(index)}>
                        {elem}
                    </span>
                )
            })}
            {curEmpP <= ((totEmpP % n === 0) ? totEmpP - n : totEmpP - totEmpP % n) ? <span
            className = {s.item} onClick={() => props.changeCurrentPage_(totEmpP)}>
                {totEmpP}
            </span> : null}

        </div>
    )
}

export default Paginator
 // for(let i = 1; i < totEmpP; i++ ){
    //     pageNumberItems.push(i)
    // }
    // let leftBorder = (curEmpP - 1) * n + 1;
    // let rightBorder = curEmpP * n;




