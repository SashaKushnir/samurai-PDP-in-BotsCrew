
import React from 'react'
import s from './LoginNavLink.module.css'
import { NavLink } from 'react-router-dom'
const LoginNavLink : React.FC = () => {
  return (
    <NavLink className = {s.makeBlackDisUnderLine} to="login">
      <div>
        log in
      </div>
    </NavLink>
  )
}

export default LoginNavLink