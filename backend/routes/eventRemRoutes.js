//importing
const express = require('express')
const eventRemModel = require('../models/eventRemModel')

//
const router = express.Router()

//get req for all displaying all event reminders
router.get('/', (req,res)=>{
    res.send({mssg: 'getting all'})
})

//get ONE event reminder
router.get('/:id', (req,res)=>{
    res.send({mssg: 'getting ONE'})
})

//post an event reminder
router.post('/', async (req,res)=>{
    const {title, desc, target, validity} = req.body
    try{
        const eventRem = await eventRemModel.create({title, desc, target, validity})
        res.status(200).json(eventRem)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//delete ONE event reminder
router.delete('/:id', (req,res)=>{
    res.send({mssg: 'deleting ONE'})
})

//updating ONE event reminder
router.patch('/:id', (req,res)=>{
    res.send({mssg: 'updating ONE'})
})

module.exports=router