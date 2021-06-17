const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Photo  = require('../models/Photo');

router.get('/',(req, res) => {
     Photo.findAll()
        .then(photos => {
             console.log(photos)
             res.send(photos)
         })
        .catch(err => console.log(err));
});
router.post('/', (req, res) => {
    console.log(req.body)
    Photo.create({
        url: req.body.imageURL
    }).then(()=>{
        res.send('created')
    });
})
router.delete('/:id', (req, res)=>{
    Photo.destroy({
        where:{
            url: req.params.id
        }
    }).then(() => {
        res.send(`id ${req.params.id} was deleted`)
    });
})


module.exports = router;
