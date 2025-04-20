const pg = require('pg-promise')();

const cnStr = require('./cnStr');

const db = pg(cnStr)

module.exports = db;