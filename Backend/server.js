const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to MentorStudents app"})
})

app.listen(7000, () => {
    console.log('server is sunning on port:7000');
});