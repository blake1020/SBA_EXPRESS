const express = require("express");
const app = express();
const port = 3000

const books = require('./data/books')
const characters = require('./data/characters')
const mythicals = require('./data/mythicals')
const bookRoutes = require('./routes/booksRoutes')
 const charactersRoutes = require('./routes/charactersRoutes')
const mythicalRoutes = require('./routes/mythicalRoutes')
//Patch
const bodyParser = require('body-parser')

//Middleware ADD LATER
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use('/api/data/books', bookRoutes)
app.use('/api/data/characters', charactersRoutes)
app.use('/api/data/mythicals', mythicalRoutes)

//ROUTES
app.get('/', (req,res) => {
    res.send("Home Page");
})



//server Listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})