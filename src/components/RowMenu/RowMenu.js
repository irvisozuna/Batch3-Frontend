import React , { Component } from 'react';
import '../Menus/Menus.css';
import Moment from 'react-moment';
import 'moment/locale/es';


class RowMenu extends Component{

    state={
        menu: this.props.menu,
    }

    componentDidMount(){
        console.log(this.props.menu,'<<<<')
    }

    render(){
        const toUpperCaseFilter = (d) => {
            return d.toUpperCase();
        };

        return(
            <tr>
                <td>
                    <div>
                        <strong><Moment  filter={toUpperCaseFilter} format="dddd">{this.state.menu.date}</Moment></strong> {this.state.menu.description}
                    </div>
                </td>
                <td>
                    <a className="btn btn-success" href="/new-menu" target="_self">+</a>
                </td>
            </tr>
             
        )
    }
}

export default RowMenu;