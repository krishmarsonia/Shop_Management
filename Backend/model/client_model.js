const mongoose = require("mongoose");
const validate = require("validator")

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minLength: 13,
        validator(email) {
            if (!validate.isEmail(email)) {
                throw new Error('Please enter a valid email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 7,
        validator(pass) {
            if (pass.length <= 6) {
                throw new Error("Password must cointain min 7 character");
            }
            if (pass.toLowercase().includes('password')) {
                throw new Error("Please set a strong password");
            }
        }
    },
    // appointments: [{
    //     appointment: {
    //         type: String,
    //     },
    //     dateTime: {
    //         type: Date
    //     }
    // }],
})

clientSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'client'
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client