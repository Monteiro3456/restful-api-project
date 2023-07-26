// db.js
const mongoose = require('mongoose');

// Replace 'your-database-uri' with your actual MongoDB URI
const databaseURI = 'mongodb+srv://MelcomeMongoOSeDB:9325667300@cluster0.5fmyzep.mongodb.net/';

const dbconnect = mongoose.connect(databaseURI).then (()=> {
    console.log("connected to db");
}).catch((err) => {console.log(err)})


module.exports = {dbconnect};
