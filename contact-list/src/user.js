import React, { Component } from 'react'
import './user.css'


class User extends Component {
  render() {
    return (
      <div className="contacts">
          <img src={this.props.pic} alt="account"/>
          {this.props.fname} {this.props.lname}
      </div>

    )
  }
}

export default User