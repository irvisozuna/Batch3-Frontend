import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singleMovie from '../../services/singleMovie';
import './Movie.css';

class Movie extends Component{

    state={
        id: this.props.match.params.id,
        movie: ''
    }

    componentDidMount(){
        singleMovie(this.state.id).then((movie)=>{
            this.setState({
                movie: movie.data.data.singleMovie
            })
            console.log(this.state.movie)
        }).catch((err)=>{
            console.log(err)
        })
    }

    loadMovieData(){
        const {
            _id,
            year,
            name,
            image,
            plot,
            director,
            length,
            category,
            rating,
            cast,
            rank
        } = this.state.movie

        if(!this.state.movie){
            return(
                <div><h1>Loading Movie Info...</h1></div>
            )
        }else{
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={image} alt={name} className='img'/>
                        </div>
                        <div className='col movie-info'>
                            <h1><strong>{name}</strong> | {year}</h1>
                            <span><small>Runtime: {length}</small></span>
                            <h3>Plot:</h3>
                            <h3>{plot}</h3>
                        </div>
                        <div className='row justify-content-md-center'>
                            <Link className='btn btn-success boton-ver' to={`/watch/${_id}`} >WATCH</Link>
                            <Link className='btn btn-info boton-ver' to='/movies' >Go Back</Link>
                            <Link className='btn btn-danger boton-ver' to={`/movie/delete/${_id}`} >Delete</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.loadMovieData()}
            </div>
        )
    }
}

export default Movie;