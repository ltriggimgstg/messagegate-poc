'use strict';

const logger = require("../utils/logging");
const { Pool } = require('pg');
const dbPool = new Pool({
	connectionString: "postgres://master:hvdm8HZ2h@messagegate-poc.cmt7uglree8b.ap-southeast-2.rds.amazonaws.com:5432/messagegatepoc",
	ssl: true
});

dbPool.on('error', (err, client) => {
	logger.error('Database Pool Error: ', err);
  	process.exit(-1);
});

module.exports = dbPool;