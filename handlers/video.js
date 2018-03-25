'use strict';

const logger = require("../utils/logging");
const Sms = require("../lib/sms");
const base = require("./base");

module.exports = {
	get: (evt, ctx, cb) => {
		logger.debug("handler/video.get");
		return new Promise((resolve, reject) => {
            resolve(new Sms(base.db).get())
        })
		.then(data => base.responder(data))
		.then(data => cb(data.error, data.response))
		.catch(err => cb(err));
	}
};