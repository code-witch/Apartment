const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

let app = express();


let indexRouter = require('./routes/index');
let userRouter = require('./routes/user');
let mangaRouter = require('./routes/manga');
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
app.use('/manga', mangaRouter);
// app.use('/review', reviewRouter);
// app.use('/todo', todoRouter);
// app.use('/grocery', groceryRouter);

app.use((req, res, next) => {
    next()
})

app.listen(PORT, HOST_NAME, () => {
    console.log(`Running Server at: http://${HOST_NAME}:${PORT}`)
});