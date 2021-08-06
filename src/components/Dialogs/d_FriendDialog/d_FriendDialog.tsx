import React from 'react'


type PropsType =  {
    message : string
    who : string
    me : boolean
} 

const D_FriendDialog : React.FC<PropsType> = (props) => {

    return (
        <div >
            <div>
                {props.message} 
            </div>
            <div>
             {props.who}  
             </div>    
        </div>

    )
}

export default D_FriendDialog