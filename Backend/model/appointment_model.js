const mongoose = require('mongoose')

const appointmentSchema = ({
    service: {
        type: String,
        required: true,
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    serviceID: {
        type: mongoose.Schema.Types.ObjectId,
        // requred: true,
        ref: 'Service',
    },
    time: {
        type: Date,
    },
    
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment