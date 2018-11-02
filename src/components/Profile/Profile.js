import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singleUser from '../../services/singleUser';


class Profile extends Component{

    state={
        userData: ''
    }

    componentDidMount(){
        singleUser(this.props.match.params.id).then((resp)=>{
            this.setState({
                userData: resp.data.data.singleUser
            })
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }

    loadUserData(){

        let { name, email, phone } = this.state.userData;
        if(this.state.userData === ''){
            return(
                <div>Loading your info...</div>
            )
        }else{
            return(
                <div>
                    <h1>Perfil </h1>
                    <h2>Nombre: <strong>{name}</strong></h2>
                    <h2>Phone: <strong>{phone}</strong></h2>
                    <Link to={`/profile/edit/${this.props.match.params.id}`}>Editar Perfil</Link>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.loadUserData()}
            </div>
        )
    }
}


export default Profile;