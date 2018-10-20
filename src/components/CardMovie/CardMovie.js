import React , { Component } from 'react';

import '../Movies/Movies.css';


class CardMovie extends Component{

    state={
        movie: this.props.movie
    }

    render(){
        return(
             <div className='card' style={{width:'14rem'}}>
                        <h5 className='card-title'
                            onClick={() => this.props.redirect(this.state.movie._id)}>
                            {this.state.movie.name}
                        </h5>
                        <img src={this.state.movie.image} className='image-small' alt="Poster"/>
                        <div className='card-body'>
                            <p>4.0</p>
                        </div>
                    </div>
        )
    }
}

export default CardMovie;