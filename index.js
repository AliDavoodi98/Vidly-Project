const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = new express();
const config = require('config');
const router = require('./router')

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
console.log('Application Name: '+ config.get('name'))


app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/genres', router);
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

const port = 3000;
app.listen(port, ()=> {
    console.log(`Listening on Port ${port}`)
});