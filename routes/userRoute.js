const express = require("express");
const router = express.Router();
const { getUser, createUser, getUserAccount } = require('../controllers/userController');

router.route("/").get(async (req, res) => {  
    getUser(req,res);
}).post(async (req, res) => {   
    createUser(req,res);
});

router.route("/login").post(async (req, res) => {   
    getUserAccount(req,res);
});

//router.route("/:id").get(controller.getTagFromID).delete(controller.deleteTag).put(controller.editTag);

module.exports = router;