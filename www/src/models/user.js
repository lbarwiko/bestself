class User{
    constructor(params){
        if(!params){
            return;
        }
        this.user_id = params.user_id;
        this.username = params.username;
    }
}

class RootUser extends User{
    constructor(params){
        super(params);
        this.token = params.token;
    }

    fetch(url, options={}){
        if(!options.headers){
            options.headers = {};
        }
        options.headers['Authorization'] = this.getToken();
        return fetch(url, options);
    }

    fetchJSON(url, options={}){
        return this.fetch(url, options)
        .then(res=>{
            return res.json();
        })
        .catch(err=> Promise.reject(err));
    }

    getToken(){
        return this.token;
    }
    
}  

export {
    User,
    RootUser
}