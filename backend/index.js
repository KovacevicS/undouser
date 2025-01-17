const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const korisniciRouter = require('./routes/korisnici'); // Dodato


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/korisnici', korisniciRouter); // Dodato


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});