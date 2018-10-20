import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../resolvers/payload';

import './Navbar.css';



class Navbar extends Component {


    chargeProfile = () => {

        const token = localStorage.getItem('token')
        if(token !== null){

            let pl = payload(token)
          return (
                <ul className='navbar-nav'>
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Welcome {pl.email}</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/"  className="nav-link">Profile</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/movies"  className="nav-link">Movies</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/logout"  className="nav-link">Logout</Link>
                    </li>
                </ul>
          )
        }else{
          return (
                <ul className='navbar-nav'>
                    <li className="navbar-item">
                        <Link  to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                </ul>
          )
        }
      }
    


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a  href="/">NopalFlix</a>
                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target='#navbar' 
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    {this.chargeProfile()}
                </div>
            </nav>
        )
    }
}


export default Navbar;