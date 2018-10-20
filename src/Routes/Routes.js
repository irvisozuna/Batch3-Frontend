import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Logout from '../components/Logout/Logout';
import Privado from '../components/Privado/Privado';
import checkToken from '../resolvers/checkToken';
import Movies from '../components/Movies/Movies';



class Routes extends Component {

    render(){

        const PrivateRoute = ({component: Component, ...rest}) =>(
            <Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to='/home' />
                )} />
        )

        return(
            <Router>
                <main>
                    <Navbar/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/logout' component={Logout} />
                    <PrivateRoute exact path='/privado' component={Privado} />
                    <PrivateRoute exact path='/movies' component={Movies} />
                </main>
            </Router>
        )
    }
}


export default Routes;