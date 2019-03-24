const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file){
    const fullPath = path.join(__dirname, file); // generating full path;
    return new QueryFile(fullPath, {minify: true});
}

const User = {
    list: sql('./user/user.list.sql'),
    create: sql('./user/user.create.sql'),
    getById: sql('./user/user.get.id.sql'),
    getByUsername: sql('./user/user.get.username.sql'),
    getByIdPublic: sql('./user/user.get.id.public.sql'),
}

const Feedback = {
    create: sql('./feedback/feedback.create.sql'),
    list: sql('./feedback/feedback.list.sql')
}

export {
    User,
    Feedback
}