const mongoose= require('mongoose');

const Transporter = mongoose.Schema


const TransporterSchema = new Transporter({

    firstName: {
        type: String,
        required: true,
      },

    lastName: {
        type: String,
        required: true,
    },

    destination: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },
    nextOfKin: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }
});
const TransporterModel = mongoose.model('Transporter',TransporterSchema);
module.exports = TransporterModel;