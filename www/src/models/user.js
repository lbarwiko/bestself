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
    
}  

export {
    User,
    RootUser
}