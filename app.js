const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

// const routes = require('./routes/index');


//load config
dotenv.config({path:'./config/config.env'});

//Passport config
require('./config/passport')(passport);

connectDB();



const app = express();
//logging
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', exphbs({ defaultLayout:'main', extname:'.hbs' }));
app.set('view engine', '.hbs'); 

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    
    // cookie: { secure: true }
}))

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Static Folders
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/', require('./routes/index'));
app.use('/auth',require('./routes/auth'));

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));

