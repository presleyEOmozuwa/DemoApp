const { getUsers, getUser } = require('../appuser/user_service');

describe('User.js', () => {
    it('get user list', () => {
        const users = getUsers();
        expect(users).toEqual([
            { "id": "1", "email": "smithblake@gmail.com", "password": "123" },
            { "id": "2", "email": "johncoleman@gmail.com", "password": "413" },
            { "id": "3", "email": "marypayne@gmail.com", "password": "313" },
            { "id": "4", "email": "beckkyshane@gmail.com", "password": "202" }
        ])
    })

    it('retrieve a single user', () => {
        const user = getUser("3");
        expect(user).toEqual({ "id": "3", "email": "marypayne@gmail.com", "password": "313" })
    })
})
