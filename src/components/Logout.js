import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
// import { withRouter } from 'react-router-dom'


const Logout = props => {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.logout()
      // props.history.push('/')
    }
    }>
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { logout })(Logout)
