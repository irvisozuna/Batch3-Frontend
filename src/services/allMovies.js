import axios from 'axios';
import getToken from '../resolvers/getToken';
import constante from '../const';

export default () => {

    return axios({
        url:constante.url+'graphql',
        method: 'post',
        data:{
            query: `
                query{
                    allMovies{
                        _id,
                        name,
                        year,
                        director,
                        rank,
                        director,
                        plot,
                        cast
                    }
                }
            `
        },headers:{'Authorization': 'JWT ' +getToken()}
    })
}

