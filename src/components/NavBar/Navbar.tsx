import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarClass from './Navbar.module.css'
const Navbar: React.FC = () => {
  return (
    <nav className={NavbarClass.nav}>
      <h3 className={NavbarClass.item}>
        <NavLink to="/profile" activeClassName = {NavbarClass.active} >Profile </NavLink>
      </h3>
      <h3 className={NavbarClass.item}>
        <NavLink to="/dialogs" activeClassName = {NavbarClass.active}>Message</NavLink>
      </h3>
      <h3 className={NavbarClass.item}>
        <NavLink to="/news" activeClassName = {NavbarClass.active}> News</NavLink>
      </h3>
      <h3 className={NavbarClass.item}>
        <NavLink to="/music" activeClassName = {NavbarClass.active}>Music</NavLink>
      </h3>
      <h3 className={NavbarClass.item}>
        <NavLink to="/users" activeClassName = {NavbarClass.active}>Users</NavLink>
      </h3>
      <h3 className={NavbarClass.item}>
        <NavLink to="/settings" activeClassName = {NavbarClass.active}>Settings</NavLink>
      </h3>
    </nav>
  )
}

export default Navbar