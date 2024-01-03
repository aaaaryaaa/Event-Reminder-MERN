//Including .env file after installing the pkg
require('dotenv').config()

//importing
const express = require('express')
const mongoose = require('mongoose')
const eventRemRoutes = require('./routes/eventRemRoutes')

//
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

//Router setup
app.use('/api/eventrem', eventRemRoutes)

//connecting to mongodb using mongoose
const port = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //server listening to PORT
        app.listen(port, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

