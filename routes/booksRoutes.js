const express = require('express')
const router = express.Router()
const books = require('../data/books')


//POST
//Create a new book 
router.post('/', (req,res) => {

    if(req.body.title && req.body.releaseYear && req.body.series) {
        if(books.find((book) => book.title == req.body.title)){
            res.json({error: "Book already exists"});
            return;
        }

    const book = {
        id: books[books.length - 1].id +1,
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        series: req.body.series,
    };
    books.push(book);
    res.json(books[books.length - 1]);    
    } else res.json({error: "Insufficient Data"})
})
//all books
router.get('/', (req,res) => {
    res.json(books)
})
//single book /api/data/book/:id
router.get('/:id', (req, res) => {
    const book = books.find((book) => book.id == req.params.id)
    if (book) res.json(book)
});

//PATCH - update 
router.patch("/:id", (req,res, next) => {
    const book = books.find((book, i) => {
        if(book.id === +req.params.id){
            for(const key in req.body){
                books[i][key] = req.body[key]

            }
            return true
        }
    })
    if(book) res.json(book)
        else next()
})
//DELETE delete book
//DELETE - DELETE - Delete a user (id)
router.delete("/:id", (req, res, next) => {
    const book = books.find((book, i) => {
      if (book.id === +req.params.id) {
        books.splice(i, 1);
        return true;
      }
    });
    if (book) res.json(book);
    else next();
  });













module.exports = router