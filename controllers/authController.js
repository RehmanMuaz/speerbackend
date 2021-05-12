const bcrypt = require('bcrypt');

// Get Database
let mongo = require('../index').database;

// Login User
const loginUser = async (req, res) => {
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

  const logoutUser = async (req, res) => {
    req.session.destroy(function(err) {
      if(err) {
          res.send(err);
      } else {
          res.status(200).send('Logged Out');
      }
  });
  };
  
  module.exports = { loginUser, logoutUser };