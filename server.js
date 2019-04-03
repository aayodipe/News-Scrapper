// Dependencies
const express = require('express');

;
// Require axios and cheerio. This makes the scraping possible
const axio = require('axios');
const cheerio = require('cheerio')

const app = express()
const PORT = process.argv.PORT || 3000;




app.listen(PORT, ()=>{
     console.log(`Server is listen to PORT ${PORT}`);     
})


