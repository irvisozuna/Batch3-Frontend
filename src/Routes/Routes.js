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
import Movie from '../components/Movie/Movie';
import WatchMovie from '../components/WatchMovie/WatchMovie';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import NewMovie from '../components/NewMovie/NewMovie';



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
                    <PrivateRoute exact path='/movie/:id' component={Movie} />
                    <PrivateRoute exact path='/watch/:id' component={WatchMovie} />
                    <PrivateRoute exact path='/profile/:id' component={Profile} />
                    <PrivateRoute exact path='/profile/edit/:id' component={EditProfile} />
                    <PrivateRoute exact path='/new-movie' component={NewMovie} />
                </main>
            </Router>
        )
    }
}


export default Routes;