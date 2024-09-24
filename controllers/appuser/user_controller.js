const express = require('express');
const router = express.Router();
const { getUsers, getUser } = require('./user_service');

router.get('/api/users', (req, res) => {
    const users = getUsers();
    res.send({ "users": users });
})

router.get('/api/user/:userId', (req, res) => {
   const user = getUser(req.params.userId);
   res.send({ "user": user });
})

module.exports = router;

