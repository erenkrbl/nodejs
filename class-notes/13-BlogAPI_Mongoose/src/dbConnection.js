"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

// const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/'
// mongoose.connect(MONGODB)



mongoose.connect(process.env.MONGODB || 'mongodb+srv://cedric:C12345678@cluster0.evjdkig.mongodb.net/')
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))