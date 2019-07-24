import React, { Component } from 'react'
import data from './randomUser'
import { Link } from 'react-router-dom'
import SingleView from './singleview'
import User from './user'

class Home extends Component {
    render() {
        return (
            <div className="listview">
                <h3>My Peeps</h3>
                <ul>
                    {data.map(result => (
                    <li className="productLink" key={result.id}>
                        <Link to={"/" + result.id}>
                        <User 
                            pic={result.picture.thumbnail}
                            fname={result.name.first}
                            lname={result.name.last}
                        />
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home