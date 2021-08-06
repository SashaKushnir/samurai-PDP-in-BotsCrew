import React from 'react'
// @ts-ignore
import s from './Mytextare.module.css'

type PropsType = {
    input : string
    meta : {
        error: string | null
        touched :  boolean
    }
}

export const Mytextarea : React.FC<PropsType> = ({ input, meta, ...props }) => {
    
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props} />
            {hasError  &&
                <div>
                    <span>
                        {meta.error}
                    </span>
                </div>}
        </div>
    )
} 

export const Myinput : React.FC<PropsType> = ({ input, meta, ...props }) => {
    
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props} />
            {hasError  &&
                <div>
                    <span>
                        {meta.error}
                    </span>
                </div>}
        </div>
    )
} 