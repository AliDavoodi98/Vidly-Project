const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = new express();
const config = require('config');

var genres = [
    'action',
    'comedy',
    'romance',
    'SciFi'
];

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
console.log('Application Name: '+ config.get('name'))


app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use((req, res, next) => {
    console.log('Logging ...');
    next();
});

app.use((req, res, next) => {
    console.log('Authenticating ...');
    next();
});

app.get('/', (req, res)=>{
    res.render('index', {title:"page1", message:"Hello"});
})

app.get('/api/genres', (req, res)=> {
    res.send(genres);
});

app.put('/api/genres', (req, res) => {
    const newGenre = req.query.genre;

    if(newGenre){
        genres.push(newGenre);
        res.send(genres);
    } else {
        res.status(400).send({ error: 'Genre is not stated'});
    }
});

app.delete('/api/genres', (req, res) => {
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
app.listen(port, ()=> {
    console.log(`Listening on Port ${port}`)
});