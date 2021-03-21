const express = require('express');
require('./db/mongoose');
const User = require('./model/user')
const Task = require('./model/task')

const app = express();
port = process.env.PORT || 3000

app.use(express.json());

app.post('/user',(req, res) => {
    const user = new User(req.body);
    user.save().then((result) => {
        res.status(201).send(result)
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.post('/task',(req, res) => {
    const task = new Task(req.body);
    task.save().then((result) => {
        res.status(201).send(result);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.listen(port,() => {
    console.log('Server is running on port '+ port);
})