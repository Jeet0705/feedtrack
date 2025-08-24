const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Allow requests from Vite frontend
app.use(cors({ origin: 'http://localhost:5173' }));

// Parse JSON bodies
app.use(express.json());

// In-memory storage (no database)
let feedbacks = [];

// GET /api/feedback - return all feedback
app.get('/api/feedback', (req, res) => {
  res.json(feedbacks);
});

// POST /api/feedback - add new feedback
app.post('/api/feedback', (req, res) => {
  const { name, email, rating, comment } = req.body;
  const newFeedback = {
    id: Date.now(),
    name,
    email,
    rating,
    comment,
    createdAt: new Date().toISOString(),
  };
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});