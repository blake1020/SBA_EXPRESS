const express = require("express");
const app = express();
const port = 3000

const books = require('./data/books')
// const characters = require('./data/characters')
// const mythical = require('./data/mythical')
const bookRoutes = require('./routes/booksRoutes')
// const charactersRoutes = require('./routes/charactersRoute')
// const mythicalRoutes = require('./routes/mythicalRoutes')
//Patch
const bodyParser = require('body-parser')

//Middleware ADD LATER
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use('/data/books', bookRoutes)
//ROUTES
app.get('/', (req,res) => {
    res.send("Home Page");
})

app.use((req,res) => {
    res.status(404)
    res.json({error: "Resources not found "})
})

//server Listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})