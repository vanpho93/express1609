const express = require('express');

const app = express();

const db = [
    { id: 1, en: 'hello', vn: 'xin chao' },
    { id: 2, en: 'morning', vn: 'buoi sang' },
    { id: 3, en: 'afternoon', vn: 'buoi chieu' },
];

app.get('/', (req, res) => {
    res.send({ name: 'Pho' });
});

app.get('/all', (req, res) => res.send(db));

app.get('/word/:id', (req, res) => {
    const { id } = req.params;
    const word = db.find(word => word.id === +id);
    res.send(word);
});

app.listen(3000, () => console.log('Server started'));
