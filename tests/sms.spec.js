'use strict';

const smsHandler = require('../handlers/sms');


describe('GET /sms/{id}', () => {
    let evt = {};
    let ctx = {};
    
    it('return statusCode 200', (done) => {
        let cb = (ctx, data) => {
			expect(data.statusCode).toBe(200);
            done();
        }
        smsHandler.get(evt, ctx, cb);
    });
});

describe('POST /sms/{id}', () => {
    let evt = {};
    let ctx = {};
    
    it('return statusCode 200', (done) => {
        let cb = (ctx, data) => {
			expect(data.statusCode).toBe(200);
            done();
        }
        smsHandler.post(evt, ctx, cb);
        
    });
});