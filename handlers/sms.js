'use strict';

//const logger = require("../utils/logging");
const SMS = require("../services/sms");
const baseHandler = require("./base");

module.exports = {
	get: (evt, ctx, cb) => {
		//logger.debug("handler/sms.get");
		return new Promise((resolve, reject) => {
            resolve(new SMS().get());
        })
		.then(data => baseHandler.responder(data))
		.then(data => cb(data.error, data.response))
		.catch(err => cb(err));
	},
	post: (evt, ctx, cb) => {
		//logger.debug("handler/sms.post");
		return new Promise((resolve, reject) => {
            resolve(new SMS().get());
        })
		.then(data => baseHandler.responder(data))
		.then(data => cb(data.error, data.response))
		.catch(err => cb(err));
	}
};