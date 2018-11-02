import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Singlemenu } from '../../services/menu';
import './Menu.css';

class Menu extends Component{

    state={
        id: this.props.match.params.id,
        menu: ''
    }

    componentDidMount(){
        Singlemenu(this.state.id).then((menu)=>{
            this.setState({
                menu: menu.data.data.Singlemenu
            })
            console.log(this.state.menu)
        }).catch((err)=>{
            console.log(err)
        })
    }

    loadMenuData(){
        const {
            _id,
            description,
            date,
            company
        } = this.state.menu

        if(!this.state.menu){
            return(
                <div><h1>Loading Menu Info...</h1></div>
            )
        }else{
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                        </div>
                        <div className='col menu-info'>
                            <h1><strong>{date}</strong> | {description}</h1>
                            <h3>Company:</h3>
                            <h3>{company}</h3>
                        </div>
                        <div className='row justify-content-md-center'>
                            <Link className='btn btn-info boton-ver' to='/menus'>Regresar</Link>
                            <Link className='btn btn-danger boton-ver' to={`/menu/delete/${_id}`} >Borrar menú</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.loadMenuData()}
            </div>
        )
    }
}

export default Menu;