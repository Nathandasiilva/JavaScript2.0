require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewurlParser: true, useUnifiedTopology: true})
       .then(() => {
       app.emit('Pronto');
       })
       .catch(e => console.log('Ocorreu um erro'));


const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
    secret: 'fafafafafafafafafaafafaf()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);
app.use(routes);

app.on('pronto', () => {
    
});
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando a porta 3000');
});
