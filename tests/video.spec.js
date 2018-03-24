const videoHandler = require('../handlers/video');

describe('GET /video/{id}', () => {
    var evt = {};
    var ctx = {};
    
    it('return statusCode 200', (done) => {
        let cb = (ctx, data) => {
			expect(data.statusCode).toBe(200);
            done();
        }
        videoHandler.get(evt, ctx, cb);
    });
});