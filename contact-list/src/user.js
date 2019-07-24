import React, { Component } from 'react'
import './user.css'


class User extends Component {
  render() {
    return (
      <div className="contacts">
          <img src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Account-2-512.png" alt="account"/>
          {this.props.fname} {this.props.lname}
      </div>

    )
  }
}

export default User