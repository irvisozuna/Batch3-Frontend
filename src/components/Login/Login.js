import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import FormErrors from '../FormErrors/FormErrors';
import login from '../../services/login';
import logo from '../../img/sandwich-blue.png'
import './Login.css';

class Login extends Component{


    state={
        email:'',
        password: '',
        formErrors: {email: '', password: ''},
        formValid: false,
        errorMessage: '',
        passwordValid: false,
        emailValid: false,

    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        login(this.state).then((resp)=>{
            if(resp.status === 200){
                let token = resp.data.token
                localStorage.setItem('token',token);
                console.log(this.props)
                this.props.history.push('/')
            }else{
                console.log(resp.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value},
            ()=>{
                this.validateField(name,value);
                console.log(this.state)
            })
    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid

        switch(fieldName){
            case 'email' :
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '' : 'is too short';
            break;
            default:
            break;
        }
        this.setState({formErrors:fieldValidationErrors,
        emailValid:emailValid,passwordValid:passwordValid},this.validateForm)
    }

    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.passwordValid})
    }

    errorClass(error){
        return (error.length === 0 ? '' : 'has error')
    }

    error=()=>{
        if(this.state.errorMessage.length === 0){
            return <p>{this.state.errorMessage}</p>
        }
        return <p>error</p>
    }
    styles = {
        homeClass: 'bg-home',
      }

    componentWillMount() {
        document.body.className = this.styles.homeClass
      }
    
      componentWillUnmount() {
        document.body.className = null
      }

    render(){
        return(
            <div className='login-page'>
                    
                <div className='form'>
                <img src={logo} alt="lunch app" className="logo-login"/>
                    <h3 className="app-name">Lunch App</h3>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div>
                    <div>
                        <p>{this.error}</p>
                    </div>
                    <form className='login-form' onSubmit={this.submitForm}>
                        <div className='form-group'>
                            <input type="email" required className='form-control' name='email' placeholder='E-mail' value={this.state.email}
                                onChange={this.handleUserInput}/>
                        </div>
                        <div className='form-group'>
                            <input type="password" required className='form-control' name='password' placeholder='Password' value={this.state.password}
                                onChange={this.handleUserInput}/>
                        </div>
                        <button type='submit'>Login</button>

                        <p><Link to='/signup'>Crea una Nueva Cuenta</Link> </p>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;