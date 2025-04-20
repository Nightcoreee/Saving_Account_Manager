const bcrypt = require('bcrypt');
const userM = require('../models/user.m')
module.exports = {
    registerGet: (req, res) => {
        if(req.isAuthenticated()){
            return res.redirect('/dashboard');
        }
        res.render('register', {
            title: "Register",
            style: "register.css",
            script: "register.js",
        })
    },
    registerPost: async (req, res) => {
        const pw = req.body.password;
        var hashedpw = await bcrypt.hash(pw,10);
        const user = {
            username: req.body.username,
            password: hashedpw,
            email: req.body.email,
            fullname: req.body.fullname,
            phonenumber: req.body.phonenumber,
        }
        const checkUn = await userM.getAccountByUsername(user.username);
        if(checkUn) {
            res.send({msg: 'Username has already exist'});
            return;
        }
        const checkEmail = await userM.getCustomerByEmail(user.email);
        if(checkEmail) {
            res.send({msg: 'Email has already exist'});
            return;
        }
        const checkPhonenumber = await userM.getCustomerByPhonenumber(user.phonenumber);
        if(checkPhonenumber) {
            res.send({msg: 'Phone number has already exist'})
            return;
        }
        await userM.add(user)
        req.logIn(user, function(err) {
            if (err) return next(err);
            // console.log('is authenticated?: ' + req.isAuthenticated());
            return res.send({msg: "succeed"})
          });    
        // res.send({msg: 'succeed'})
        // res.send({msg: 'test'})
    }
}