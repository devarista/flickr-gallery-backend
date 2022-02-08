const app = require('../src/app')
const request = require('supertest')

describe('Test all /images methods', () => {
    it('get /image ==> should return 200 and array of images', () => {
        request(app).get('/image').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200)
    })

    it('get /image?tags=cat,dog (with query) ==> should return 200 and array of images', () => {
        request(app)
            .get('/image?tags=cat,dog')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body.title).toEqual('Recent Uploads tagged cat and dog')
            })
            .catch((err) => err)
    })
})
