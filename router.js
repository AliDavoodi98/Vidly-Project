const express = require('express');
const router = express.Router();

// 

router.get('/api/genres', (req, res)=> {
    res.send(genres);
});

router.put('/api/genres', (req, res) => {
    const newGenre = req.query.genre;

    if(newGenre){
        genres.push(newGenre);
        res.send(genres);
    } else {
        res.status(400).send({ error: 'Genre is not stated'});
    }
});

router.delete('/api/genres', (req, res) => {
    const removeGenre = req.query.genre;

    if(removeGenre){
        const index = genres.indexOf(removeGenre);
        if (index > -1) {
            genres.splice(index, 1);
          }
        res.send(genres);
    }
});

const port = 3000;
router.listen(port, ()=> {
    console.log(`Listening on Port ${port}`)
});

module.exports = router;