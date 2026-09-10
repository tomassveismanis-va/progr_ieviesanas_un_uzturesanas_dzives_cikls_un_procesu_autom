const request = require('supertest');
const app = require('../server');

test('POST /tasks creates a task', async () => {
  const res = await request(app).post('/tasks').send({ title: 'Test' });
  expect(res.statusCode).toBe(201);
});

test('GET /tasks returns array', async () => {
  const res = await request(app).get('/tasks');
  expect(Array.isArray(res.body)).toBe(true);
});

test('DELETE /tasks/:id removes a task', async () => {
  const created = await request(app).post('/tasks').send({ title: 'To delete' });
  const res = await request(app).delete(`/tasks/${created.body.id}`);
  expect(res.statusCode).toBe(204);
});

test('GET /tasks filters by category_id', async () => {
  const res = await request(app).get('/tasks?category_id=1');
  expect(res.statusCode).toBe(200);
});