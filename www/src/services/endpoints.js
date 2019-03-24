var isDev = true;

var base = 'http://138.68.44.59';

if(isDev){
    base = 'http://localhost:8000';
}

var endpoints = {
    user: base + '/api/u',
    auth: base + '/api/auth',
    me: base + '/api/me',
    base: base,
    version: '1',
};

console.log(endpoints);

export default endpoints;
