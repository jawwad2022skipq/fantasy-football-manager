const path = require('path');
const express = require('express');
// Used to set colors of text in command line
const colors = require('colors');
// Makes .env variables avaialble gloabally i think
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB()

const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP methods like get, post, put, delete defined in routes folder
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Custom middleware to handle errors, must be defined after the routes in server.js
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))