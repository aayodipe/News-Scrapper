const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Sets the schema of the movie data
const commentSchema = new Schema({
   
     username:{
          type: String,
           trim:true,
         
          },
     comment:{
               type: String,
             },
     email: {
               type: String,
               match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
             },
     date: {
          type: Date,
          default: Date.now()
        },   
})


const commentsFromUser = mongoose.model("commentPosted", commentSchema)
module.exports = commentsFromUser;