// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const reportRoutes = require('./routes/reports');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/reports', reportRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log('Error:', err));