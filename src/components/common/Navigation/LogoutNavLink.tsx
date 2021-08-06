import React from 'react'
import { NavLink } from 'react-router-dom'


const LogoutNavLink: React.FC<{toLogOut : () => void}> = ({toLogOut}) => {
    return (
        <NavLink to='/login'>
            <button onClick={toLogOut}>
                log out
            </button>
        </NavLink>
    )
}

export default LogoutNavLink