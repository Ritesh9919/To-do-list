const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/to-do-list-db');

const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

 //up and running then print message

db.once('open', function() {
    console.log('successfully connected to the database');
})