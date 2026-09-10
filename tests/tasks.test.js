const request = require('supertest');
const app = require('../server');

test('POST /tasks creates a task', async () => {
  const res = await request(app).post('/tasks').send({ title: 'Test' });
  expect(res.statusCode).toBe(201);
});