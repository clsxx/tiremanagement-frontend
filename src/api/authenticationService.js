import axios from 'axios';


export const userLogin = (authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/account/logIn`,
        'data':authRequest,
        'headers':{
            "Content-Type":"application/json"
        },
    })
}
