// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const fetch = require('node-fetch')
// Require axios and cheerio. This makes the scraping possible
const axio = require('axios');
const cheerio = require('cheerio')

const app = express()
const PORT = process.argv.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/newAppScrapper", { useNewUrlParser: true });

//Scrape Fox News Database

// Scrape data from one site and place it into the mongodb db
app.get("/scrape", function(req, res) {
     const url = 'https://www.imdb.com/freedive/?ref_=nv_tp_fdv'
     // Make a request via axios for the news section of `ycombinator`
     axios.get(url).then(function(res) {
       // Load the html body from axios into cheerio
       let $ = cheerio.load(res.data);

       let responseArr = []
      
       // For each element with a "title" class
       $('.ribbonize').each(function(i, element) {
   const $element = $(element)
  const $image = $element.find('figure img').attr('src');
  const $title = $element.find('figcaption div a').text();
  const $rating = $element.find('.freedive-titlePoster__hoverRating span').text();
  const $desc = $element.find('.freedive-titlePoster__hoverDescription').text();
  const $year = $element.find('.freedive-titlePoster__hoverYear').text()
  const $duration = $element.find('.freedive-titlePoster__hoverDuration').text()
  console.log($title.trim())
  console.log($image.trim())
  console.log($desc.trim())
  console.log($rating.trim())
  console.log($year.trim())
  console.log($duration.trim())
  console.log('\n........................................\n')
      });
      
   });
      
     // Send a "Scrape Complete" message to the browser
      res.send("Scrape Complete");

});
   



app.listen(PORT, ()=>{
     console.log(`Server is listen to PORT ${PORT}`);     
})


