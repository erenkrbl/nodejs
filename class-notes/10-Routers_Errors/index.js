"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? "Router" is special app for URL control in ExpressJS.


// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

const router = express.Router();


router.get("/", (req, res) => { res.send({ message: "Hello World!" }) })
router.get("/about", (req, res) => { res.send({ message: "About page" }) })
router.get("/user/:userId", (req, res) => { res.send({ message: "User Page!" }) })


app.use(router);
/* ------------------------------------------------------- */


const router = require('./routes')


app.use(router);

  
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));