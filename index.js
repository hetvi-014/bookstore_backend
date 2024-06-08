const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

// Import routes
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
app.use('/api/books', bookRoutes);
app.use('/api/auth/', authRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
