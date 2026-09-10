const express = require('express');
const taskModel = require('./models/taskModel');
const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.post('/tasks', async (req, res) => {
  const [task] = await taskModel.create(req.body);
  res.status(201).json(task);
});
app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;