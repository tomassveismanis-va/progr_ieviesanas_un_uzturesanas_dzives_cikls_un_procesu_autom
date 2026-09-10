const express = require('express');
const taskModel = require('./models/taskModel');
const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.post('/tasks', async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'title is required' });
  }
  const taskData = {
    title: req.body.title,
    priority: req.body.priority || 'normal'
  };
  const [task] = await taskModel.create(taskData);
  res.status(201).json(task);
});
app.get('/tasks', async (req, res) => {
  const tasks = await taskModel.getAll();
  res.json(tasks);
});
app.get('/tasks/:id', async (req, res) => {
  const task = await taskModel.getById(req.params.id);
  if (!task) return res.status(404).json({ error: 'not found' });
  res.json(task);
});
app.put('/tasks/:id', async (req, res) => {
  const [task] = await taskModel.update(req.params.id, req.body);
  res.json(task);
});
app.delete('/tasks/:id', async (req, res) => {
  await taskModel.remove(req.params.id);
  res.status(204).send();
});
app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;