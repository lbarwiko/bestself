var isDev = false;

var base = 'http://selfwoke.co';

if(isDev){
   // base = 'http://localhost:8000';
}

var endpoints = {
    feedback: base + '/api/f/',
    user: base + '/api/u',
    auth: base + '/api/auth',
    me: base + '/api/me',
    request: base + '/api/f/request',
    base: base,
    version: '1',
};

console.log(endpoints);

export default endpoints;
