'use strict';

const logger = require("../utils/logging");
const { Pool } = require('pg');
const dbPool = new Pool({
	connectionString: process.env.DATABASE_URI,
	ssl: ((process.env.DATABASE_SSL === 'true') || false),
	connectionTimeoutMillis: 5000,
	idleTimeoutMillis: 10000,
	max: 10
});

dbPool.on('error', (err, client) => {
	logger.error('Database Pool Error: ', err);
  	process.exit(-1);
});

module.exports = dbPool;