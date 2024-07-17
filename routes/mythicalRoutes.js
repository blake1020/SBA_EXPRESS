const express = require("express")
const router = express.Router()

const mythicals = require('../data/mythicals')

//POST
//Create a new mythical 
router.post('/', (req,res) => {

    if(req.body.name && req.body.alliance && req.body.description) {
        if(mythicals.find((mythical) => mythical.name == req.body.name)){
            res.json({error: "mythical already exists"});
            return;
        }

    const mythical = {
        id: mythicals[mythicals.length - 1].id +1,
        name: req.body.name,
        // species: req.body.species,
        alliance: req.body.alliance,
        description: req.body.description
    };
    mythicals.push(mythical);
    res.json(mythicals[mythicals.length - 1]);    
    } else res.json({error: "Insufficient Data"})
})
//all mythicals
router.get('/', (req,res) => {
    res.json(mythicals)
})
//single mythical /api/data/mythical/:id
router.get('/:id', (req, res) => {
    const mythical = mythicals.find((mythical) => mythical.id == req.params.id)
    if (mythical) res.json(mythical)
});

//PATCH - update 
router.patch("/:id", (req,res, next) => {
    const mythical = mythicals.find((mythical, i) => {
        if(mythical.id === +req.params.id){
            for(const key in req.body){
                mythicals[i][key] = req.body[key]

            }
            return true
        }
    })
    if(mythical) res.json(mythical)
        else next()
})
//DELETE delete mythical
//DELETE - DELETE - Delete a user (id)
router.delete("/:id", (req, res, next) => {
    const mythical = mythicals.find((mythical, i) => {
      if (mythical.id === +req.params.id) {
        mythicals.splice(i, 1);
        return true;
      }
    });
    if (mythical) res.json(mythical);
    else next();
  });







module.exports = router