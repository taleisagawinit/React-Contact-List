import React, { Component } from 'react'
import data from './randomUser'
import './singleview.css'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'


class SingleView extends Component {
    state = {
        img: '',
        first: '',
        last:'',
        email:'',
        phone:'',
        city:'',
        st:''
    }

    getContact = (id) => {
        const contact = data.find(result => id == result.id)
        console.log(contact.picture.large)
        this.setState({
            img: contact.picture.large,
            first: contact.name.first,
            last: contact.name.last,
            email: contact.email,
            phone: contact.phone,
            city: contact.location.city,
            st: contact.location.state
            
        })
    }

    componentDidMount() {
        this.getContact(this.props.match.params.id)
    }
    
    render() {
        return (
            <div className="singlev">
                <div className="header">
                    <Link to="/">
                        <MaterialIcon icon="arrow_back" size='medium' color='#000'/>
                    </Link>
                    <div className="account">
                        <img src={this.state.img} alt="account"/>
                    </div>
                </div>
                <div className="item"> 
                    <MaterialIcon icon="person" size='small' color='#000'/>
                    <p>{this.state.first} {this.state.last}</p>
                </div>
                <div className="item">
                    <MaterialIcon icon="email" size='small' color='#000'/>
                    <p>{this.state.email}</p>
                </div>
                <div className="item">
                    <MaterialIcon icon="smartphone" size='small' color='#000'/>
                    <p>{this.state.phone}</p>
                </div>
                <div className="item">
                    <MaterialIcon icon="location_city" size='small' color='#000'/>
                    <p>{this.state.city}, {this.state.st}</p>
                </div>
            </div>
        )
    }
}

export default SingleView
