import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export const Allmenus = ()=>{
    return axios({
        url:constantes.url+'graphql',
        method: 'post',
        data:{
            query:`
                query{
                    allMenus{
                    _id,
                    image,
                    description,
                    company {
                        name
                        description
                    },
                    date
                    }
                }
            `
        },headers: { 'Authorization' : 'JWT ' + getToken()}
    })
}

export const Singlemenu = (id) => {
    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                query{
                    singleMovie(id:"${id}"){
                        _id,
                        image,
                        description,
                        company {
                          name
                          description
                        },
                        date
                    }
                }
            `
        }, headers:{'Authorization': 'JWT ' + getToken()}
    })
}

export const updateMenu = (id,data) => {
    let {image, description, company, date } = data;

    let DataQuery = `{image:"${image}",description:"${description}",date:"${date}",company:"${company}"}`

    return axios({
        url: constantes.url+'graphql',
        method: 'post',
        data:{
            query:`
                mutation{
                    updateUser(id:"${id}",data:${DataQuery}){
                        _id,
                        image,
                        description,
                        company{
                          name
                        },
                        date
                    }
                }
            `
        },headers: { 'Authorization' : 'JWT ' +getToken()}
    })
}
export const addMenu = (data) => {
    let {image, description, company, date, price } = data;
    let DataQuery = `{image:"${image}",description:"${description}",date:"${date}",company:"${company}",price:"${price}"}`

    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                mutation {
                    addMenu(data:data:${DataQuery}){
                    _id,
                    description,
                    company{
                        name
                    }
                    date,
                    price
                    }
                }
            `
        },headers:{'Authorization': 'JWT ' +getToken()}
    })
}