const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

let todos = [
    {
        title: "putzen",
        finished: "false"
    },
    {
        title: "waschen",
        finished: "false"
    },

];

const profileData = {
    name: "John Doe",
    age: 30,
    profession: "Software Developer"
};

app.get('/api/profile', (req, res) => {
    res.json(profileData);
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});


app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;