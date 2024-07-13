const express = require("express")
const router = express.Router()

const characters = require('../data/characters')

//route
router.get('/data/characters');

//POST
//Create a new book 
router.post('/characters', (req,res) => {

    if(req.body.name && req.body.godlyParent && req.body.seriesAppearedIn) {
        if(characters.find((character) => character.name == req.body.name)){
            res.json({error: "Character already exists"});

            return;
        }

    const character = {
        id: character[character.length - 1].id +1,
        name: req.body.name,
        godlyParent: req.body.godlyParent,
        seriesAppearedIn: req.body.seriesAppearedIn,
    };
    characters.push(character);
    res.json(characters[characters.length - 1]);    
    } else res.json({error: "Insufficient Data"})
})
//single book
router.get('/', (req,res) => {
    res.json(characters)
})

router.get('/:id', (req, res) => {
    const character = characters.find((character) => character.id == req.params.id)
    if (character) res.json(character)
});





module.exports = router