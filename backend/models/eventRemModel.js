const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const eventRemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false //DESC not really required
    },
    target: {
        type: Date,
        required: true
    },
    validity: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports=mongoose.model('EventReminder', eventRemSchema)