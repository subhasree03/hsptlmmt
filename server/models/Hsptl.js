const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema({

     name: {
        type: String,
        required: true
     },
     age: {
        type: Number,
        require: true
     },
     address: {
        type: String,
        require: true
     },
     phone: {
        type: Number,
        require: true
     },
     diseases: {
        type: String,
        require: true
     },
     doctor: {
        type: String,
        require: true
     }
})

module.exports = Hsptl = mongoose.model("hsptlmmt", HospitalSchema);