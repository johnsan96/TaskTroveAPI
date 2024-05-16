const request = require('supertest');
const app = require('../index');

describe('GET /api/todos', () => {
    it('responds with JSON array of todos', async () => {
      const response = await request(app).get('/api/todos');
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  

 