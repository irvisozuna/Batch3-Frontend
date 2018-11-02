import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export const AllCompanies = ()=>{
    return axios({
        url:constantes.url+'graphql',
        method: 'post',
        data:{
            query:`
                query{
                    allCompanies{
                        _id,
                        name
                    }
                }
            `
        },headers: { 'Authorization' : 'JWT ' + getToken()}
    })
}

export const SingleCompany = (id) => {
    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                query{
                    singleMovie(id:"${id}"){
                        _id,
                        name
                    }
                }
            `
        }, headers:{'Authorization': 'JWT ' + getToken()}
    })
}
