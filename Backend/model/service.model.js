const mongoose  = require("mongoose");

const serviceSchemas =  mongoose.Schema({
    serType:{
        type: String,
        required: true
    },
    serPrice: {
        type: Number,
        required: true
    },
    serApp: {
        type: Date,
        required: false
    },
})
/* got a idea where we can delete the collection document automatically in which we need to compare the time of now and time of model and if the time now now is small than that we can create the function and we can delete the entries automatically */

module.exports = mongoose.model('Services', serviceSchemas);