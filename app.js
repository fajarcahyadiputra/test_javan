const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models');
const cors = require('cors');
const whiteUrl = require('./config/whiteUrl');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');


//call routes
const indexRoute = require('./routes');
const keluargaRoute = require('./routes/keluarga-route');
const anggotaRoute = require('./routes/anggota-route');
const assetAnggotaRoute = require('./routes/assets-anggota');
const assetKeluargaRoute = require('./routes/assets-keluarga-route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//for make flash message
app.use(flash());
//for make a session
app.use(session({
  secret : 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));

//set cors
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteUrl.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions));
app.use(methodOverride("_method"))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//untuk meload data asset dari sb admin 2
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')))

app.use('/', indexRoute);
app.use('/keluarga', keluargaRoute);
app.use('/anggota', anggotaRoute);
app.use('/assets-anggota', assetAnggotaRoute);
app.use('/assets-keluarga', assetKeluargaRoute);


db.sequelize.sync({ force: false }).then(() => {
  console.log("Database running");
}).catch(err => {
  console.log(err.message);
})

module.exports = app;
