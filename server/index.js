// dependencies
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require(".secure/dotenv")

// create new instance of dependency
const app = express()

mongoose.
connect("")
.then(() => {

})
.catch((error) => {

})

app.get("/", (req, res) => {
   res.send("Hello NODE API:3030 _new")
})

app.get("/blog", (req, res) => {
   res.send("Hello Blog")
})

app.listen(3030, () => {
   console.log("Server is running on port 3030");
})
