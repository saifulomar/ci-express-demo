const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return CI message', async () => {
    //const res = await request(app);
    const res = await request(app).get('/');   // ✅ FIX HERE
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('CI is working!');
  });
});