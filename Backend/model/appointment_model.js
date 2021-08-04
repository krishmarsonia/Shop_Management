const mongoose = require('mongoose')


const appointmentSchema = ({
    service: {
        type: String,
        required: true,
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    serviceID: {
        type: mongoose.Schema.Types.ObjectId,
        // requred: true,
        ref: 'Service',
    },
    barberID: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Barber'
    },
    date: {
        type: Date,
        required: false,
    },
    time:{
        type: String,
        // required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment