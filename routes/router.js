const express = require('express');
const router = express.Router();

// 
var genres = [
    'action',
    'comedy',
    'romance',
    'SciFi'
];

router.get('/', (req, res)=> {
    res.send(genres);
});

router.put('/', (req, res) => {
    const newGenre = req.query.genre;

    if(newGenre){
        genres.push(newGenre);
        res.send(genres);
    } else {
        res.status(400).send({ error: 'Genre is not stated'});
    }
});

router.delete('/', (req, res) => {
    const removeGenre = req.query.genre;

    if(removeGenre){
        const index = genres.indexOf(removeGenre);
        if (index > -1) {
            genres.splice(index, 1);
          }
        res.send(genres);
    }
});

module.exports = router;