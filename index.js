const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Mama! I can code with the help of node now!!!');
});

const users = [
    { id: 1, name: 'Fardan', email: 'fardan@gmail.com' },
    { id: 2, name: 'Sabbir', email: 'sabbir@gmail.com' },
    { id: 3, name: 'Fazla', email: 'fazla@gmail.com' },
    { id: 4, name: 'Rabbi', email: 'rabbi@gmail.com' },
    { id: 5, name: 'Kuddos', email: 'kuddos@gmail.com' },
    { id: 6, name: 'Abdul', email: 'abdul@gmail.com' },
    { id: 7, name: 'Ali', email: 'ali@gmail.com' },
    { id: 8, name: 'Hossain', email: 'hossain@gmail.com' },
    { id: 9, name: 'Hasan', email: 'hasan@gmail.com' },
    { id: 10, name: 'Nahid', email: 'nahid@gmail.com' }
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('Request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port!', port);
});