import React from 'react'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = props => {

  return (
    <div className="NavBar">
      <h2 className="center">Task Assign</h2>
      {props.loggedIn ?
        <>
          <NavLink to="/"> My Tasks </NavLink>
          <NavLink to="/tasks/assigned"> Assigned Tasks </NavLink>
          <NavLink to="/tasks/completed"> Completed Tasks </NavLink>
          < Logout />
        </>
        : null}
    </div>
  )
}

export default NavBar