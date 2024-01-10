const mongoose = require('mongoose');

function dbConnect(){
    const mongoURI = 'mongodb://127.0.0.1:27017/codersHouse';

    mongoose.connect(mongoURI);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
    console.log('Connected to MongoDB');
});
}

module.exports = dbConnect