import React , { Component } from 'react';
import Rate from 'rc-rate';
import '../Movies/Movies.css';
import calculateRank from './calculateRank';


class CardMovie extends Component{

    state={
        movie: this.props.movie,
        rank: calculateRank(this.props.movie.rank)
    }

    componentDidMount(){
        console.log(this.props.movie,'<<<<')
    }

    render(){
        return(
            <div>
            <div className='card' style={{width:'14rem'}} >
                        <h5 className='card-title'
                           >
                            {this.state.movie.name}
                        </h5>
                        <img src={this.state.movie.image} className='image-small' alt="Poster"  onClick={() => this.props.redirect(this.state.movie._id)}/>
                        <div className='card-body'>
                            <Rate 
                                defaultValue={parseFloat(this.state.rank)}
                                allowHalf
                                onChange={(rank)=>this.props.getRank(this.state.movie._id, rank)}
                            />
                            <p>{this.state.rank}</p>
                        </div>
                    </div>
            </div>
             
        )
    }
}

export default CardMovie;