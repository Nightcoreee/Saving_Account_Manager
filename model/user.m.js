const db = require('../config/connectDB')

module.exports = {
    add: async user =>{
        maxCustomerId = await db.query('select max(customer_id) from customer')
        if (maxCustomerId[0].max == null) maxCustomerId[0].max=0;
        maxAccountId = await db.query('select max(account_id) from account')
        if (maxAccountId[0].max===null) maxAccountId[0].max=0;
        await db.one('insert into customer (customer_id, customer_name, phone_number, email) values ($1, $2, $3, $4) returning *',
        [maxCustomerId[0].max + 1, user.fullname.replace(/^\s+|\s+$/gm,''), user.phonenumber.replace(/^\s+|\s+$/gm,''), user.email.replace(/^\s+|\s+$/gm,'')])
        await db.one('insert into account (account_id, account_type, username, encrypt_password, customer_id) values ($1, $2, $3, $4, $5) returning *',
        [maxAccountId[0].max + 1, "CUST", user.username.replace(/^\s+|\s+$/gm,''), user.password.replace(/^\s+|\s+$/gm,''), maxCustomerId[0].max + 1])
    },
    updateCustomerInfo: async customer => {
        await db.one('update customer set customer_name = $2, identity_number=$3, phone_number=$4, email=$5, customer_address=$6 where customer_id = $1 returning *',
        [customer.customerID, customer.fullname.replace(/^\s+|\s+$/gm,''), customer.citizenID.replace(/^\s+|\s+$/gm,''), customer.phonenumber.replace(/^\s+|\s+$/gm,''), customer.email.replace(/^\s+|\s+$/gm,''), customer.address.replace(/^\s+|\s+$/gm,'')])
    },
    getAccountByUsername: async username=>{
        var rs = await db.oneOrNone('select * from account where username=$1', [username])
        return rs;
    },
    getCustomerByUsername: async username=>{
        var rs = await db.oneOrNone('select * from customer where customer.customer_id = (select customer_id from account where account.username = $1)', 
        [username])
        return rs;
    },
    getCustomerByEmail: async email=>{
        var rs = await db.oneOrNone('select * from customer where email=$1', [email])
        // console.log(rs)
        return rs;
    },
    getCustomerByPhonenumber: async phonenumber=>{
        var rs = await db.oneOrNone('select * from customer where phone_number=$1', [phonenumber])
        // console.log(rs)
        return rs;
    }
}