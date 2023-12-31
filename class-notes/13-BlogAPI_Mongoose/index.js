"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv express-async-errors
 * npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */

app.use(express.json())

require('./src/dbConnection')

//Home Page
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})


//Routes
app.use('/blog', require('./src/routes/blogRoute'))

// continue from here...



/* ------------------------------------------------------- */
// error handling

app.use(require('./src/errorHandler.js'))


app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))