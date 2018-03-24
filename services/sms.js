'use strict';

const logger = require("../utils/logging");

class SMS {
    constructor() {
      
    }

    get() {
		logger.debug("services/sms.get");
		return {
       		smsId: "3423dhsduh3234"
    	};
	}
}

module.exports = SMS;