const videoHandler = require('../handlers/video');

describe('GET /video/{id}', () => {
    let evt = {};
    let ctx = {};
    
    it('return statusCode 200', (done) => {
        let cb = (ctx, data) => {
			expect(data.statusCode).toBe(200);
            done();
        }
        videoHandler.get(evt, ctx, cb);
    });
});