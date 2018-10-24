import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export default(data)=>{
    let newMovie = `{
        name:"${data.name}",
        director:"${data.director}",
        year:"${data.year}",
        image:"${data.image}",
        rating:"${data.rating}",
        category:"${data.category}",
        plot:"${data.plot}",
        url:"${data.url}",
    }`

    return axios({
        url: constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                mutation{
                    addMovie(data:${newMovie}){
                        _id,
                        name
                    }
                }
            `
        },headers:{'Authorization' : 'JWT ' + getToken()}
    })
}