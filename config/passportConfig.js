const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userM = require('../models/user.m');
const bcrypt = require('bcrypt');

// module.exports = ()=>{
    // app.use(passport.initialize())
    // app.use(passport.session())
    passport.serializeUser((user, done)=>{
        done(null, user.username)
    })
    passport.deserializeUser( async (username, done)=>{
        try {
            const user = await userM.getAccountByUsername(username);
            done(null,user);
        }
        catch (err) {
            done(err, null);
        }
    })
    passport.use(new localStrategy(
        async (username, password, done) => {
            try {
                const user = await userM.getAccountByUsername(username)
                if(!user) return done(null, false)
                const cmp = await bcrypt.compare(password, user.encrypt_password)
                if(!cmp) return done(null, false)
                return done(null, user);
            }
            catch (err){
                return done(err);
            }
        }
    ))
// }
module.exports = passport