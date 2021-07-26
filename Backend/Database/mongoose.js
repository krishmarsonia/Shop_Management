const mongoose = require('mongoose')


const connectionURL = 'mongodb+srv://Krish_Marsonia:krish2000@cluster0.ecnqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

module.exports = mongoose;