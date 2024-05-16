const request = require('supertest');
const app = require('../index');

describe('GET /api/profile', () => {
    it('responds with JSON profile data', async () => {
      const response = await request(app).get('/api/profile');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        name: "John Doe",
        age: 30,
        profession: "Software Developer"
      });
    });
  });

  