require('dotenv').config();
const pool = require('./src/config/database');
const express = require('express');
const authRoutes = require('./src/routes/auth.routes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);


pool.connect()
    .then(() => {
        console.log('Connected to the database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });
