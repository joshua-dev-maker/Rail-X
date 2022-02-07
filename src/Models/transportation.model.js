const mongoose= require('mongoose');

const schema = mongoose.Schema


const createSchema = new schema({

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
const adminModel = mongoose.model('Admin',createSchema);
module.exports = adminModel;