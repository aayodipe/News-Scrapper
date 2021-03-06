const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//Sets the schema of the movie data
const scrapedSchema = new Schema({
     commentId: ObjectId,
     title:{
          type: String,
           unique:true,
           trim:true},
           
     image :String,
     desc:String,
     rating:String,
     year:String,
     duration:String
})


const scrapedMovieSchema = mongoose.model("scrapedMovie", scrapedSchema)
module.exports = scrapedMovieSchema;