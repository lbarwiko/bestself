import {RootUser} from '../models';
import { ApiEndpoints } from './index.js';

var baseUrl = ApiEndpoints.base + '/api';

function getStoredToken(){
    var token = localStorage.getItem('bestSelfToken');
    if(token){
        return Promise.resolve(token);
    }
    return Promise.reject({
        err: 'Not logged in',
        code: 401
    });
}

function storeToken(token){
    localStorage.setItem('bestSelfToken', token);
    return Promise.resolve();
}

function init(){
    var token = null;
    return getStoredToken()
        .then((token_in)=>{
            token = token_in;
            return authenticateToken(token);
        })
        .then(res=>{
            res['token'] = token; // Add the token back
            var rootUser = new RootUser(res);
            return Promise.resolve(rootUser);
        })
        .catch(err=>Promise.reject(err));
}

function authenticateToken(token){
    var url = ApiEndpoints.me;

    console.log("Authenticating");
    if(!token){
        Promise.reject('Missing token');
    }
    return fetch(url,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(res=>{
        console.log(res);
        if(res.err){
            return Promise.reject(res.err);
        }
        return res.json();
    })
    .then(user=>{
        console.log("successful authentication");
        return Promise.resolve(user);
    })
    .catch(err=>Promise.reject(err));
}

function logout(){
    return storeToken(null)
}

function register(params){

    if(!params || !params.username || !params.password){
        console.log(params);
        return Promise.reject('Missing username or password');
    }
    var url = ApiEndpoints.user + '/';
    
    console.log("posting", params, "to ", url);

    return fetch(url,{
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username: params.username,
            password: params.password,
            phone_number: params.phone_number,
            country_code: params.country_code
        })
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        console.log(res);
        if(res.err){
            return Promise.reject(res);
        }
        return new Promise((resolve2, reject2)=>{
            storeToken(res.token)
                .then(res2=>{
                    resolve2(res);
                })
                .catch(err=>reject2(err));
        })
    })
    .then(res=>{
        console.log(res);
        if(res.err){
            Promise.reject(res.err);
        }
        var rootUser = new RootUser(res);
        return Promise.resolve(rootUser);
    })
    .catch(err=>{
        console.log("error w/ request");
        return Promise.reject(err)
    });
}

function login(params){
    if(!params || !params.username || !params.password){
        console.log(params);
        return Promise.reject('Missing username or password');
    }
    var url = baseUrl + '/auth/';
    console.log(url);

    return fetch(url,{
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username: params.username,
            password: params.password
        })
    })
    .then(res=>{
        var badStatuses = [401, 402, 403, 404, 500];
        if(badStatuses.includes(res.status)){
            //alert(JSON.stringify(res));
            return Promise.reject(JSON.stringify(res._bodyText) || 'Error logging in');
        }
        return res.json();
    })
    .then(res=>{
        return new Promise((resolve2, reject2)=>{
            storeToken(res.token)
                .then(res2=>{
                    resolve2(res);
                })
                .catch(err=>reject2(err));
        })
    })
    .then(res=>{
        console.log(res);
        if(res.err){
            return Promise.reject(res.err);
        }
        var rootUser = new RootUser(res);
        return Promise.resolve(rootUser);
    })
    .catch(err=>{
        console.log("error w/ request");
        //alert(err);
        return Promise.reject(err)
    });
}

export default {
    init: init,
    login: login,
    logout: logout,
    register: register
}