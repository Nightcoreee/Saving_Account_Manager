const express = require('express');
const { dirname } = require('path');
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const passport = require('passport');

require('dotenv').config()
require('./config/exphbsConfig')(app);

app.use(express.static(path.join(__dirname,"public")))
// app.use("/imh",express.static(__dirname + "public/img"));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
const passport = require('./config/passportConfig')
app.use(passport.initialize())
app.use(passport.session())

port  = process.env.PORT || 3000;

registerR = require('./routes/register.r')
loginR = require('./routes/login.r')
dashboardR = require('./routes/dashboard.r')
profileR = require('./routes/profile.r.js')
passbookR = require('./routes/passbook.r')

app.get('/', (req, res) => {
    res.redirect('/register')
})

app.use('/register', registerR)
app.use('/login', loginR)
app.use('/dashboard', dashboardR)
app.use('/profile', profileR)
app.use('/passbook', passbookR)
app.get('/logout', (req, res) => {
    if(req.isAuthenticated()) {
        req.logout(err=>{
            console.log('user logout', err);
            if(err){
              return next(err);
            }
          });
    }
    res.redirect('/login')
})

app.listen(port, ()=>{
    console.log('Server running at port ' + port);
});