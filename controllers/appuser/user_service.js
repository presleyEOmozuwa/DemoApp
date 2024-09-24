const users = require('../../data.json').users;

const getUsers = () => {
    if(!users){
        throw new Error("request for user list failed");
    }
    return users;
}

const getUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    if(!user){
      throw new Error("user not found");
    }
    return user;
}

module.exports = { getUsers, getUser }