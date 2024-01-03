const eventRemModel = require('../models/eventRemModel')
const mongoose = require('mongoose')

//get all
const getAllReminders = async (req, res) => {

    const allReminders = await eventRemModel.find({}).sort({ createdAt: -1 })


    res.status(200).json(allReminders)
}


//get ONE
const getReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such reminder' })
    }

    const reminder = await eventRemModel.findById(id)

    if (!reminder) {
        return res.status(404).json({ error: 'No such reminder' })
    }

    res.status(200).json(reminder)
}


//post
const createReminder = async (req, res) => {
    const { title, desc, target, validity } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if(!validity){
        return res.status(400).json({error: 'Please enter a valid date'})
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill the title', emptyFields })
    }


    try {
        const eventRem = await eventRemModel.create({ title, desc, target, validity })
        res.status(200).json(eventRem)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete
const deleteReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such reminder' })
    }


    const reminder = await eventRemModel.findOneAndDelete({ _id: id })


    if (!reminder) {
        return res.status(404).json({ error: 'No such reminder' })
    }

    res.status(200).json(reminder)
}


//patch
const updateReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such reminder' })
    }


    const reminder = await eventRemModel.findByIdAndUpdate({ _id: id }, {

        ...req.body
    })

    if (!reminder) {
        return res.status(404).json({ error: 'No such reminder' })
    }

    res.status(200).json(reminder)
}


module.exports = {
    getAllReminders,
    getReminder,
    createReminder,
    deleteReminder,
    updateReminder
}