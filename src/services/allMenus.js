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
                    allMenus{
                        _id,
                            description,
                            date,
                            company{
                                name,
                                _id,
                                description
                            }
                      }
                }
            `
        },headers:{'Authorization': 'JWT ' +getToken()}
    })
}

