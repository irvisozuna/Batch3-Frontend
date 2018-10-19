import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';



class Routes extends Component {

    render(){
        return(
            <Router>
                <main>
                    <Navbar/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                </main>
            </Router>
        )
    }
}


export default Routes;