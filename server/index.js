const express = require("express")
const app = express()

app.get('/', (req, res) => {
   res.send('Hello NODE API:3030')
})

app.listen(3030, () => {
   console.log("Server is running on port 3030");
})

