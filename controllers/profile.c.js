const userM = require('../models/user.m');

module.exports = {
    profileGet: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        // console.log(userInfo)
        res.render('profile', {
            active: {profile: true},
            layout: "working",
            title: "Profile",
            style: "form.css",
            script: "profile.js",
            form: true,
            fullname: userInfo.customer_name,
            phonenumber: userInfo.phone_number,
            address: userInfo.customer_address,
            citizenID: userInfo.identity_number,
            email: userInfo.email
        })
    },
    profilePost: async (req, res) => {
        const user = {
            customerID: req.user.customer_id,
            fullname: req.body.fullname,
            citizenID: req.body.citizenID,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            address: req.body.address
        }
        const checkEmail = await userM.getCustomerByEmail(user.email);
        if(checkEmail && checkEmail.customer_id != req.user.customer_id) {
            res.send({msg: 'Email has already exist'});
            return;
        }
        const checkPhonenumber = await userM.getCustomerByPhonenumber(user.phonenumber);
        if(checkPhonenumber  && checkPhonenumber.customer_id != req.user.customer_id) {
            res.send({msg: 'Phone number has already exist'})
            return;
        }
        await userM.updateCustomerInfo(user);
        return res.send({msg: "succeed"});
    }
}