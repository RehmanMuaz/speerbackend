const express = require('express');
const router = express.Router();
const { loginUser, logoutUser } = require('../controllers/authController');

router.route('/').post(async (req, res) => {   
    loginUser(req,res);
});

router.route('/logout').post(async (req, res) => {
    logoutUser(req, res);
});

module.exports = router;