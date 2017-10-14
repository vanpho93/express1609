const express = require('express');
const jsonParser = require('body-parser').json();
const uid = require('uid');

const app = express();

const db = [
    { id: uid(6), en: 'hello', vn: 'xin chao' },
    { id: uid(6), en: 'morning', vn: 'buoi sang' },
    { id: uid(6), en: 'afternoon', vn: 'buoi chieu' },
];

app.post('/word', jsonParser, (req, res) => {
    const { en, vn } = req.body;
    const id = uid(6);
    db.push({ id, en, vn });
    res.send({ message: 'OK' });
});

app.get('/', (req, res) => {
    res.send({ name: 'Pho' });
});

app.get('/all', (req, res) => res.send(db));

app.get('/word/:id', (req, res) => {
    const { id } = req.params;
    const word = db.find(word => word.id === id);
    res.send(word);
});

app.listen(3000, () => console.log('Server started'));
