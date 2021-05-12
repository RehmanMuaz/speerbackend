const express = require('express');
const router = express.Router();
const { getUser, createUser, changePassword, changeUsername, deleteUser } = require('../controllers/userController');

router.route('/').get(async (req, res) => {  
    getUser(req,res);
}).post(async (req, res) => {   
    createUser(req,res);
}).delete(async (req, res) => {
    deleteUser(req, res);
});

router.route('/password').put(async (req, res) => {
    changePassword(req, res);
});

router.route('/username').put(async (req, res) => {
    changeUsername(req, res);
});

module.exports = router;