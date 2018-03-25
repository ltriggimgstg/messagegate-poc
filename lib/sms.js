'use strict';

const logger = require("../utils/logging");
const dbPool = require('../config/db');

class Sms {
    constructor() {
      
    }

    get() {
		logger.debug("services/sms.get");

		return true;
	}
}

module.exports = Sms;