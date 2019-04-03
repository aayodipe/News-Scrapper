var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const scrapeSchema = new Schema({
     headline: String,
     Summary: String,
     URL: String,
     image:String

})


const newScrape = mongoose.model("newScrape", scrapeSchema)
module.export = newScrape;