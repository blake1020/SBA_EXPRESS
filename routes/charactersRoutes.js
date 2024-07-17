const express = require("express")
const router = express.Router()

const characters = require('../data/characters')


//POST
//Create a new character 
router.post('/', (req,res) => {

    if(req.body.name && req.body.godlyParent && req.body.seriesAppearedIn) {
        if(characters.find((character) => character.name == req.body.name)){
            res.json({error: "Character already exists"});

            return;
        }

    const character = {
        id: characters[characters.length - 1].id +1,
        name: req.body.name,
        godlyParent: req.body.godlyParent,
        seriesAppearedIn: req.body.seriesAppearedIn,
    };
    characters.push(character);
    res.json(characters[characters.length - 1]);    
    } else res.json({error: "Insufficient Data"})
})
//single characters
router.get('/', (req,res) => {
 

        console.log("Main route")
        res.json(characters)
})


router.get('/:id', (req, res) => {
    const character = characters.find((character) => character.id == req.params.id)
    if (character) res.json(character)
});

//get characters by godlyParent

router.get('/:godlyParent', (req,res) => {
    console.log(req.params)
    const godlyParent = characters.find((characters.godlyParent[req.params.godlyParent]))
    if (godlyParent) res.json(godlyParent)
})

//Patch make updates to character not working
//PATCH - Update a character 
router.patch('/:id', (req, res, next)=>{
    const character = characters.find((character, i)=>{
        if(character.id === +req.params.id){
            for(const key in req.body){
                characters[i][key] = req.body[key]
            }
            return true
        }
    })
    if(character) res.json(character)
        else next()
})

//Delete
router.delete("/:id", (req,res,next) => {
    const character = characters.find((character, i) => {
        if(character.id === +req.params.id) {
            characters.splice(i, 1);
            return true;
        }
    });
    if(character) res.json(character);
    else next(); 
})

module.exports = router