const express = require('express');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3000;

// MongoDB setup
const uri = "mongodb+srv://root:8qovJrdDYaYw3vlg@cluster0.dpf29.mongodb.net/twitter?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

// Express session
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

// Json body parsing
app.use(express.json());

// Connect to MongoDB
client.connect(err => {
    if(err) throw err;

    db = client.db('twitter');
    module.exports.database = db;
    
    // Start after db connection
    app.use('/user', require("./routes/userRoute"));
    app.use('/tweet', require("./routes/tweetRoute"));
    app.listen(port, () => console.log(`Listening on port: ${port}`));
});

