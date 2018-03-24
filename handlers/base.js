'use strict';

//const logger = require("../utils/logging");

module.exports = {
	responder: (data) => {
        //logger.debug("handler/base.responder", data);
		return {
			error: null, 
			response: {
        		statusCode: 200,
        		headers: {
          			'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        		},
        		body: JSON.stringify(data)
			}
		};
    }
};