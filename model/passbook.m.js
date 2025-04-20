const db = require('../config/connectDB')

module.exports = {
    addPB: async passbook => {
        maxPassbookID = await db.query('select max(passbook_id) from passbook')
        if (maxPassbookID[0].max===null) maxPassbookID[0].max=0;
        await db.one('insert into passbook(passbook_id, passbook_type, passbook_name, passbook_deposits, passbook_date, customer_id, passbook_times) values ($1, $2, $3, $4, $5, $6, $7) returning *',
        [maxPassbookID[0].max+1, passbook.type, passbook.bookname.replace(/^\s+|\s+$/gm,''), passbook.deposit.replace(/^\s+|\s+$/gm,''), passbook.date, passbook.customerID, 1])
    },
    getAll: async customerID => {
        const rs = await db.any('select * from passbook where customer_id = $1 order by passbook_id asc', [customerID])
        return rs;
    },
    getByID: async passbookID => {
        const rs = await db.oneOrNone('select *from passbook where passbook_id = $1', [passbookID])
        return rs;
    },
    get15D: async passbookID => {
        const rs = await db.oneOrNone('select passbook_name + 15 from passbook where passbook_id = $1', [passbookID])
        return rs;
    },
    getExpdate3M: async passbookID => {
        const rs = await db.oneOrNone('select passbook_name + 30*3 from passbook where passbook_id = $1', [passbookID])
        return rs;
    },
    getExpdate6M: async passbookID => {
        const rs = await db.oneOrNone('select passbook_date + 30*6 as expdate from passbook where passbook_id = $1', [passbookID])
        return rs;
    },
    depositMoney: async data => {
        await db.one('update passbook set passbook_deposits = passbook_deposits + $1 where passbook_id = $2 returning *',
        [data.depositAmount, data.passbookID])
        maxDepositID = await db.query('select max(depslip_id) from deposit_slip')
        if (maxDepositID[0].max===null) maxDepositID[0].max=0;
        await db.one('insert into deposit_slip (depslip_id, customer_id, passbook_id, depositdate, depslip_amount) values ($1, $2, $3, current_date, $4) returning *', 
        [maxDepositID[0].max+1, data.customerID, data.passbookID, data.depositAmount])
    },
    withdrawMoney: async data => {
        await db.one('update passbook set passbook_deposits = COALESCE(passbook_deposits - $1, 0) where passbook_id = $2 returning *',
        [data.withdrawAmount, data.passbookID])
        maxWithdrawID = await db.query('select max(wdslip_id) from withdrawal_slip')
        if (maxWithdrawID[0].max===null) maxWithdrawID[0].max=0;
        await db.one('insert into withdrawal_slip (wdslip_id, customer_id, passbook_id, withdrawaldate, wdslip_amount) values ($1, $2, $3, current_date, $4) returning *', 
        [maxWithdrawID[0].max+1, data.customerID, data.passbookID, data.withdrawAmount])
        amount = await db.query('select (passbook_deposits) from passbook where passbook_id = $1',[data.passbookID])
        // console.log(amount.passbook_deposits)
        if (amount[0].passbook_deposits == 0)
            await db.query('delete from passbook where passbook_id = $1', [data.passbookID])
    },
    sendAgains: async data => {
        await db.one ('update passbook set passbook_date = current_date, passbook_times = passbook_times + 1 where passbook_id = $2 returning *')
    },
    getDepositThisMonth: async customerID => {
        const rs = await db.any('select depslip_amount from deposit_slip d where d.customer_id = $1 and extract(year from d.depositdate) = extract (year from current_date) and extract(month from d.depositdate) = extract (month from current_date) order by depslip_id desc',
        [customerID])
        return rs;
    },
    getWithdrawThisMonth: async customerID => {
        const rs = await db.any('select wdslip_amount from withdrawal_slip w where w.customer_id = $1 and extract(year from w.withdrawaldate) = extract (year from current_date) and extract(month from w.withdrawaldate) = extract (month from current_date) order by wdslip_id desc',
        [customerID])
        return rs;
    }
}