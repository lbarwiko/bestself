const accountSid = 'AC432945dcc565c1650e8454f14b0da1ca'; 
const authToken = '58a07c53c8db0b624a3db63d782e3fd8'; 
const client = require('twilio')(accountSid, authToken);

export default {
    send: (number, message)=>{
        return client.messages 
        .create({ 
            body: message, 
            from: '+17347893236',       
            to: number
        }) 
        .then(message => Promise.resolve(message)) 
        .done(err=>{console.log(err)});
    }
}