import React, { Component} from 'react';
import allMovies from '../../services/allMovies';


class Movies extends Component{


    componentDidMount(){
        allMovies().then((resp)=>{
            console.log(resp.data)
        })
    }

    render(){
        return(
            <div>
                <h1>AQUI VAN LAS MOVIES!</h1>
            </div>
        )
    }
}


export default Movies;