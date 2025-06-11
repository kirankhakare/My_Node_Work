const express = require('express');
const app = express();

// Body parsing middleware
app.use(express.json());

let users = [
  { id: 1, name: 'Kiran', role: 'Developer' },
  { id: 2, name: 'Ankit', role: 'Designer' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST new user
app.post('/api/users', (req, res) => {
  const { name, role } = req.body;
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user by ID
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.role = req.body.role || user.role;

  res.json(user);
});

// DELETE user by ID
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
});

// Start server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
