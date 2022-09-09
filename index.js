const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

let app = express();

// website routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');


// API stuff
const apiMangaRouter = require('./routes/api/manga');
const apiFlashCardRouter = require('./routes/api/flashcard');
const apiRouter = require('./routes/api/index');

// let reviewRouter = require('./routes/reveiw');
// let todoRouter = require('./routes/todo');
// let groceryRouter = require('./routes/grocery');

// might be a user thing? or profiles or something idk
// could be a feedRouter kinda like a twitter feed?
// let blogRouter = require('./routes/blog');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/user', userRouter);


app.use('/api/manga', apiMangaRouter);
app.use('/api/flashcard', apiFlashCardRouter);
app.use('/api', apiRouter);

// app.use('/review', reviewRouter);
// app.use('/todo', todoRouter);
// app.use('/grocery', groceryRouter);

app.use((req, res, next) => {
    next()
})

app.listen(PORT, HOST_NAME, () => {
    console.log(`Running Server at: http://${HOST_NAME}:${PORT}`)
});