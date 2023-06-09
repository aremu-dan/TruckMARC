const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Please enter user fullname"]
      },
      quantity: {
         type: Number,
         required: true,
         default: 0
      },
      price: {
         type: Number,
         required: true
      }
   },
   {
      timestamps: true
   }
)


const User = mongoose.model('User', userSchema);

module.exports = User;