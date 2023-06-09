// dependencies ------------------
import express from "express";
import mongoose from "mongoose";


// create new instance of dependency ------------------
const app = express()
app.use(express.json())


// app config settings ------------------
const Config = {
   "Mongo_URL": "mongodb+srv://castle:Castle0@neptuneapi.ufygsur.mongodb.net/?retryWrites=true&w=majority"
}


// connect to database ------------------
// mongoose.set("strictQuery", false)
mongoose.connect(Config.Mongo_URL)
   .then(() => {
      console.log("Connected to MongoDB: castle")

      // set app listening port ------------------
      app.listen(3030, () => {
         console.log("Server is running on port 3030");
      });
   })
   .catch((error) => {
      console.log(error)
   })


// get api connecctions ------------------
// get user(all) informations-------------
// app.get("/user", (req, res) => {
//    res.send("Hello NODE API:3030 _new")
// })

// get user information ------------------ 
// app.get("/user", (req, res) => {
//    res.send("")
// })


// post api connections ------------------
// create new user -----------------------
app.post("/user", (req, res) => {
   console.log(req.body);
   res.send(req.body  )
})


// get api connections ------------------
// put api connections ------------------
// delete api connections ---------------


// ------------------ ------------------ ------------------ ------------------
// const connect = async () => {
//    try{
//       await mongoose.connect(process.env.MONGO_URL)
//       console.log("Conencted to MongoDB")
//    } catch (error) {
//       // handleError(error)
//       throw error;
//    }
// }