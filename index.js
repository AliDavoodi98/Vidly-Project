const express = require('express');

const app = new express();

var genres = [
    'action',
    'comedy',
    'romance',
    'SciFi'
];

app.use(express.json());

app.use((req, res, next) => {
    console.log('Logging ...');
    next();
});

app.use((req, res, next) =>{
    console.log('Authenticating ...');
    next();
});

app.get('/api/genres', (req, res)=>{
    res.send(genres);
});

app.put('/api/genres', (req, res) => {
    const newGenre = req.query.genre;

    if(newGenre){
        genres.push(newGenre)
        res.send(genres);
    } else {
        res.status(400).send({ error: 'Genre is not stated'});
    }
});

app.delete('/api/genres', (req, res) =>{
    const removeGenre = req.query.genre;

    if(removeGenre){
        const index = genres.indexOf(removeGenre);
        if (index > -1) {
            genres.splice(index, 1); // Remove the element at the found index
          }
        res.send(genres)
    }
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
});