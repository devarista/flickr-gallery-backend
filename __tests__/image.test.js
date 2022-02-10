const app = require('../src/app')
const request = require('supertest')

describe('Test all /images methods', () => {
    it('GET /image ===> 200, array of images', () => {
        return request(app).get('/image').expect('Content-Type', /json/).expect(200)
    })

    it('GET /image?tags=cat ===> 200, array of images', () => {
        return request(app).get('/image?tags=cat').expect('Content-Type', /json/).expect(200)
    })

    it('GET /image?tags=randomstringwillnotwork ===> 200, no result in items propertyy', () => {
        return request(app).get('/image?tags=kalsjlkgdhjskldjf').expect('Content-Type', /json/).expect(200)
    })
})
