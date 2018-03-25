'use strict';

const logger = require("../utils/logging");
const dbPool = require('../config/db');

class Sms {
    constructor() {
      
    }

    get() {
		logger.debug("services/sms.get");

		// callback - checkout a client
dbPool.connect((err, client, done) => {
  if (err) throw err
  client.query('SELECT NOW()', (err, res) => {
    done()

    if (err) {
      console.log(err.stack)
    } else {
      return res.rows[0];
    }
  })
})
	}
}

module.exports = Sms;