const express = require('express');
const connection = require('./config/db');

const userRoute=require('./routes/user.routes')
const app = express();

app.use(express.json());

// basic route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to MentorStudents app" })
});

// routes

app.use('/user', userRoute);

app.listen(7000, async () => {
    try {
        await connection;
        console.log('Connected to Db');
    } catch (error) {
        console.log('Error at conncting DB:',error);
    }
    console.log('server is sunning on port:7000');
});