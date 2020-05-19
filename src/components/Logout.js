import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button'


const Logout = props => {

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.logout()
      props.history.push('/')
    }}>
      <Button variant="light" type="submit">Logout</Button>
    </form>
  )
}

export default connect(null, { logout })(Logout)
