const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return CI message', async () => {
    const res = await request(app).get('/'); 
        //expect(res.statusCode).toBe(200);
        expect(res.statusCode).toBe(201); wrong on purpose
    expect(res.body.message).toBe('CI is working!');
  });
});