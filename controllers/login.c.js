const passport = require('../config/passportConfig')
 module.exports = {
    loginGet: (req, res) => {
        if(req.isAuthenticated()){
            return res.redirect('/dashboard');
        }
        res.render('login', {
            title: "login",
            style: "login.css",
            script: "login.js",
        })
    },
    loginAuth: (req, res, next) => {
        passport.authenticate('local', {session: true}, (err, user)=>{
            if(err || !user) {
                return res.send({msg: "Wrong username or password"})
            }
            else {
                // res.send({msg: "succeed"})
                req.logIn(user, function(err) {
                    if (err) return next(err);
                    return res.send({msg: "succeed"})
                  });    
            }
        })(req, res, next)
    },
    loginPost: (req, res) => {
        
    }
 }