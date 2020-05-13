import React from 'react'
import Logout from '../components/Logout.js'


const NavBar = props => {

  return (
    <div className="NavBar">
      <h2 className="center">Task Assign</h2>
      {props.loggedIn ? < Logout /> : null}
    </div>
  )

}

export default NavBar