const bcrypt = require('bcrypt');

// Get Database
let mongo = require('../index').database;

// Gets alls user **ONLY FOR TESTING**
const getUser = async (req, res) => {
    let collection = mongo.collection('users');
    collection.find({}).toArray(function(err, result) {
    if(err) {
      res.send(err);
    } else if (result.length) {
      res.send(result);
    } else {
      res.send('No documents found');
    }
  })
};

// Creates a new user
const createUser = async (req, res) => {
  let data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };    
  let collection = mongo.collection('users');
  try {
    // Hash password with salt
    const hashed = await bcrypt.hash(data.password, 10);
    data.password = hashed;
  
    collection.insertOne(data, function(err) {
      if(err) {
        res.send('Account exists for that email');
      } else {
        res.sendStatus(200);
      }
    })

  } catch (err) {
    res.send(err);
  }
};

// Login User
const getUserAccount = async (req, res) => {
  let collection = mongo.collection('users');

  collection.findOne({email: req.body.email}, async function(err, user) {
    if (user == null) {
      return res.status(400).send('Cannot find user');
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        let data = {
          username: user.username,
          email: user.email
        };  

        req.session.user = data;
        res.status(200).send('Success');
      } else {
        res.send('Incorrect Password');
      }
    } catch {
      res.status(500).send();
    }
  })
};

module.exports = { getUser, createUser, getUserAccount };