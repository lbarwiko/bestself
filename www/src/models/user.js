class User{
    constructor(params){
        if(!param){
            return;
        }
        this.user_id = params.user_id;
        this.username = params.user_name;
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