import React, { Component } from "react"
import { connect } from 'react-redux'

class EmployeeContainer extends Component {


  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)