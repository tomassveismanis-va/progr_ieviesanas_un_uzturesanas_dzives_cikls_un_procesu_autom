const express = require('express');
const taskModel = require('./models/taskModel');
const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.post('/tasks', async (req, res) => {
  const [task] = await taskModel.create(req.body);
  res.status(201).json(task);
});
app.get('/tasks', async (req, res) => {
  const tasks = await taskModel.getAll();
  res.json(tasks);
});
app.get('/tasks/:id', async (req, res) => {
  const task = await taskModel.getById(req.params.id);
  res.json(task);
});
app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;