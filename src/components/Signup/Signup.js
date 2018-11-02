import React , { Component } from 'react';
import signup from '../../services/signup';
import './Signup.css';
import { Link } from 'react-router-dom';
import logo from '../../img/sandwich-blue.png'
import '../Login/Login.css';

class Signup extends Component{


    state={
        name:'',
        lastName:'',
        email:'',
        password:'',
        check_password:'',
        avatar: 'avatar.jpg'
    }
    styles = {
        homeClass: 'bg-home',
      }

      componentDidMount(){
        document.body.className = this.styles.homeClass
      }


    validatePassword(password,passwordToVerify){
        if(password === passwordToVerify){
            return true;
        }else{
            alert('Passwords Dont Match Loco!')
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.validatePassword(this.state.password, this.state.check_password)){
            signup(this.state).then((response)=>{
                console.log(response.data)
                this.props.history.push('/login')
            }).catch((err)=>{
                console.log(err);
                alert('Something went wrong Bro :(')
            })
        }
    }

    onInputHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]:value
        })
        console.log(this.state)
    }




    render(){
        return(
            <div className='container'>
                <div className='login-page'> 
                    <div className='form'>
                    <img src={logo} alt="lunch app" className="logo-login"/>
                        <h3 className="app-name">Lunch App</h3>
                        <div className='panel panel-default'>
                        </div>
                        <div>
                            <p>{this.error}</p>
                        </div>
                        <form className='login-form' onSubmit={this.submitForm}>
                            <div className='col-xs-12'>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='name'
                                                    className='form-control input-sm'
                                                    placeholder='Nombre completo'
                                                    value={this.state.name}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-12'>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='email'
                                                    className='form-control input-sm'
                                                    placeholder='Correo eléctronico'
                                                    value={this.state.email}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-12'>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='password'
                                                    className='form-control input-sm'
                                                    placeholder='Contraseña'
                                                    value={this.state.password}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-12'>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='check_password'
                                                    className='form-control input-sm'
                                                    placeholder='Contraseña'
                                                    value={this.state.check_password}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <input type="submit" value='Register' className='btn btn-success btn-block'/>
    
                            <p><Link to='/login'>Ya tengo cuenta</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;