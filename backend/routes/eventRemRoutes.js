//importing
const express = require('express')
const { createReminder, getAllReminders, getReminder, updateReminder, deleteReminder } = require('../controllers/eventRemController')

//
const router = express.Router()

//get req for all displaying all event reminders
router.get('/', getAllReminders)

//get ONE event reminder
router.get('/:id', getReminder)

//post an event reminder
router.post('/', createReminder)

//delete ONE event reminder
router.delete('/:id', deleteReminder)

//updating ONE event reminder
router.patch('/:id', updateReminder)

module.exports=router