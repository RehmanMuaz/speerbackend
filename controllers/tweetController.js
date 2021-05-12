// Get Database
let mongo = require('../index').database;

// Creates a new user
const createTweet = async (req, res) => {
    let collection = mongo.collection('tweet');
    if (!req.session.user) {
        return res.status(401).send('Not logged in');
    }
    let data = {
        username: req.body.username,
        text: req.body.text,
        parent: req.body.parent,
        date: Date.now()
    };  
    collection.insertOne(data, function(err) {
        if(err) {
          res.send(err);
        } else {
          res.sendStatus(200);
        }
    })
};

module.exports = { createTweet };