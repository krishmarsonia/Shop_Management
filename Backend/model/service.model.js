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

module.exports = mongoose.model('Services', serviceSchemas);