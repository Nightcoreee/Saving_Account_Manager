const userM = require('../models/user.m');
const passbookM = require('../models/passbook.m');


function getDate(date_obj) {
    let day = ("0" + date_obj.getDate()).slice(-2);
    let month = ("0" + (date_obj.getMonth() + 1)).slice(-2);
    let year = date_obj.getFullYear();
    let date = year + "-" + month + "-" + day;
    return date;
}

function getInterest(passbookInfo) {
    if (passbookInfo.passbook_type == "3M")
        return passbookInfo.passbook_deposits * 3 * 0.005 * passbookInfo.passbook_times;
    else 
        return passbookInfo.passbook_deposits * 6 * 0.0055 * passbookInfo.passbook_times;
}
module.exports = {
    passbookGet: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        const passbooks = await passbookM.getAll(req.user.customer_id)
        if(passbooks.length < 10) createable = true
        else createable = false
        res.render('passbookList', {
            active: {passbook: true},
            layout: "working",
            title: "Danh sách sổ tiết kiệm",
            style: "passbookList.css",
            script: "dashboard.js",
            createable: createable,
            passbooks: passbooks,
        })
    },
    passbookPost: (req,res) => {
        res.redirect('/dashboard')
    },
    detailsGet: (req,res) => {
        res.redirect('/dashboard')
    },
    
    detailsPost: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        passbookID = req.body.passbookID
        const passbookInfo = await passbookM.getByID(passbookID);
        if(!passbookInfo) res.redirect('/dashboard')
        //nếu sổ đang được truy suất không phải của tài khoản hiện tại thì quay về dashboard
        if (!req.user || req.user.customer_id != passbookInfo.customer_id)
            res.redirect('/dashboard')
        let today_obj = new Date();
        let today = getDate(today_obj);
        if(passbookInfo.passbook_type == "NO") {
            passbookType = "Không kỳ hạn";
            sendAgain = false;
            depositable = true;
            withdrawable = true;
            expdate = false;
        }
        else {
            if (passbookInfo.passbook_type == "3M") {
                passbookType = "Kỳ hạn 3 tháng";
                expdate_obj = await passbookM.getExpdate3M(passbookID)
            }
            else {
                passbookType = "Kỳ hạn 6 tháng";
                expdate_obj = await passbookM.getExpdate6M(passbookID)
            }
            expdate = getDate(expdate_obj.expdate)
            depositable = false;
            if (expdate <= today) {
                sendAgain = true;
                withdrawable = true;
            }
            else {
                withdrawable = false;
                sendAgain = false;
            }
        }     
        res.render('passbookDetails', {
            active: {passbook: true},
            layout: "working",
            title: "Thông tin chi tiết",
            style: "form.css",
            script: "createPB.js",
            passbookID: passbookID,
            bookname: passbookInfo.passbook_name,
            type: passbookType,
            typename: passbookInfo.passbook_type,
            deposit: passbookInfo.passbook_deposits,
            date: getDate(passbookInfo.passbook_date),
            expdate: expdate,
            sendAgain: sendAgain,
            depositable: depositable,
            withdrawable: withdrawable
        })
    },
    createGet: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        const passbooks = await passbookM.getAll(req.user.customer_id)
        if(passbooks.length >= 10) {
            return res.redirect('/dashboard');
        }
        let today_obj = new Date();
        let today = getDate(today_obj);
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        res.render('createPassbook', {
            active: {passbook: true},
            layout: "working",
            title: "Mở sổ",
            style: "form.css",
            script: "createPB.js",
            form: true,
            fullname: userInfo.customer_name,
            phonenumber: userInfo.phone_number,
            address: userInfo.customer_address,
            citizenID: userInfo.identity_number,
            date: today
        })
    },
    createPost: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        passbook = {
            type: req.body.type,
            bookname: req.body.bookname,
            deposit: req.body.deposit,
            date: req.body.date,
            customerID: userInfo.customer_id
        }
        await passbookM.addPB(passbook);
        res.send({msg: "succeed"})
    },
    depositGet: (req,res) => {
        res.redirect('/dashboard')
    },
    depositPost: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        passbookID = req.body.passbookID
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        const passbookInfo = await passbookM.getByID(passbookID);
        if(!passbookInfo) res.redirect('/dashboard')
        //nếu sổ đang được truy suất không phải của tài khoản hiện tại thì quay về dashboard
        if (!req.user || req.user.customer_id != passbookInfo.customer_id)
            res.redirect('/dashboard')
        let today_obj = new Date();
        let today = getDate(today_obj);
        res.render('depositMoney', {
            active: {passbook: true},
            passbookID: passbookID,
            layout: "working",
            title: "Gửi tiền",
            style: "form.css",
            script: "deposit.js",
            form: true,
            fullname: userInfo.customer_name,
            bookname: passbookInfo.passbook_name,
            bookdeposit: passbookInfo.passbook_deposits,
            date: today
        })
    },
    depositPostLoading: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        passbookID = req.body.passbookID
        const passbookInfo = await passbookM.getByID(passbookID);
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        data = {
            depositAmount: req.body.deposit,
            passbookID: req.body.passbookID,
            customerID: userInfo.customer_id,
            date: req.body.date,
        }
        await passbookM.depositMoney(data);
        res.send({msg: "succeed"})
    },
    withdrawGet: (req,res) => {
        res.redirect('/dashboard')
    },
    withdrawPost: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        passbookID = req.body.passbookID
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        const passbookInfo = await passbookM.getByID(passbookID);
        if(!passbookInfo) res.redirect('/dashboard')
        //nếu sổ đang được truy suất không phải của tài khoản hiện tại thì quay về dashboard
        if (!req.user || req.user.customer_id != passbookInfo.customer_id)
            res.redirect('/dashboard')
        let today_obj = new Date();
        let today = getDate(today_obj);
        if(passbookInfo.passbook_type == "NO") {withdrawAll = false; interest = false}
        else {withdrawAll = true; interest = getInterest(passbookInfo)}
        //console.log(interset)
        res.render('withdrawMoney', {
            active: {passbook: true},
            passbookID: passbookID,
            layout: "working",
            title: "Rút tiền",
            style: "form.css",
            script: "withdraw.js",
            withdrawAll: withdrawAll,
            interest: interest,
            form: true,
            fullname: userInfo.customer_name,
            bookname: passbookInfo.passbook_name,
            bookdeposit: passbookInfo.passbook_deposits,
            date: today
        })
    },
    withdrawPostLoading: async (req, res) => {
        if(req.isUnauthenticated()){
            return res.redirect('/login');
        }
        passbookID = req.body.passbookID
        const passbookInfo = await passbookM.getByID(passbookID);
        const userInfo = await userM.getCustomerByUsername(req.user.username)
        data = {
            withdrawAmount: req.body.withdraw,
            passbookID: req.body.passbookID,
            customerID: userInfo.customer_id,
            date: req.body.date,
        }
        // console.log(req.body.withdraw)
        // res.send("ok")
        await passbookM.withdrawMoney(data);
        res.send({msg: "succeed"})
    }
}