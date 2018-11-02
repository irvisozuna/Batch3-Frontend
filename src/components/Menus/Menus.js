import React, { Component} from 'react';
import allMenus from '../../services/allMenus';
import RowMenu from '../RowMenu/RowMenu';
import addRank from '../../services/addRank';

import './Menus.css';


class Menus extends Component{
    state={
        menus: ''
    }


    componentDidMount(){
        allMenus().then((resp)=>{
            console.log(resp.data)
            this.setState({
                menus: resp.data.data.allMenus
            })
            console.log(this.state.menus)
        })
    }

    redirect = (id) => {
        this.props.history.push(`/menu/${id}`);
    }

    getRankValue=(id,rank)=>{
        addRank({id,rank}).then((resp)=>{
            console.log(resp)
        })
    }

    renderMenus = () => {
        if(this.state.menus !== ''){

          let menus = this.state.menus.map((menu,index)=>{
                return(
                   <RowMenu 
                        key={index}
                        menu={menu}
                        redirect={this.redirect}
                        getRank={this.getRankValue} />

                )
            }) 

            return menus

        } else{
            return (
                <div><h1>Loading...</h1></div>
            )
        }
    }


    render(){
        return(
            <div className='row justify-content-center'>
                <div className='col-md-10 col-lg-8 text-center'>
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="header">
                        <h4 class="title">Menu de la Semana</h4>
                        <p class="category"></p>
                        </div>
                    
                <div class="content table-full-width">
                <div class="table-responsive">
                <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Dia de la Semana</th>
                    <th>Comida</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderMenus()}
                </tbody>
                </table>
                </div>
                </div>
                <a class="btn btn-success" href="/new-menu" target="_self">Agregar Menú</a>
                </div>
                </div>
            </div>
        )
    }
}


export default Menus;