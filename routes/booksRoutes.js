const express = require('express')
const router = express.Router()

//all books
const books = require('../data/books')

//route
router.get('/data/books');

//Create a new book 
router.post('/books', (req,res) => {

    if(req.body.title && req.body.releaseYear && req.body.series) {
        if(books.find((book) => book.title == req.body.title)){
            res.json({error: "Book already exists"});
            return;
        }

    const book = {
        id: book[book.length - 1].id +1,
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        series: req.body.series,
    };
    books.push(book);
    res.json(books[books.length - 1]);    
    } else res.json({error: "Insufficient Data"})
})
//single book
router.get('/', (req,res) => {
    res.json(books)
})

router.get('/:id', (req, res) => {
    const book = books.find((book) => book.id == req.params.id)
    if (book) res.json(book)
});


module.exports = router