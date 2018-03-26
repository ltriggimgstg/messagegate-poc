'use strict';

const logger = require("../utils/logging");
const dbPool = require('../config/db');

class Sms {
    constructor() {
		return true;
    }

    get() {
		logger.debug("services/sms.get");

		return dbPool.connect()
		.then(client => {
			return client.query('SELECT NOW()')
			.then(data => {
				client.release();
				return data.rows[0];
			})
			.catch(err => {
				client.release();
				logger.error(error);
			});
		});
	}
}

module.exports = Sms;