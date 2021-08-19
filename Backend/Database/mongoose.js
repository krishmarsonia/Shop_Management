const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();


const connectionURL = process.env.URL;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

module.exports = mongoose;