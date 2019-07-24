import React, { Component } from 'react'
import data from './randomUser.json'
import User from './user'


class Users extends Component {
  render() {
    return (
      <div className="listview">
        <h3>My Peeps (scroll)</h3>
        <ul>
            {data.map(result => (
            <User 
              key={'contact' + result.id}
              fname={result.name.first}
              lname={result.name.last}
            />
          ))}
        </ul>
              
      </div>
    )
  }
}

export default Users