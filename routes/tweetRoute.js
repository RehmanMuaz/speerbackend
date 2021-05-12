const express = require("express");
const router = express.Router();
const { createTweet } = require('../controllers/tweetController');

router.route("/").post(async (req, res) => {   
    createTweet(req,res);
});

//router.route("/:id").get(controller.getTagFromID).delete(controller.deleteTag).put(controller.editTag);

module.exports = router;