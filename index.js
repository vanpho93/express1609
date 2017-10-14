const express = require('express');
const jsonParser = require('body-parser').json();
const Word = require('./db');

const app = express();

app.get('/words', (req, res) => {
    Word.find({})
    .then(words => res.send(words))
    .catch(err => res.send(err));
});

app.get('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findById(id)
    .then(word => res.send(word))
    .catch(err => res.send(err));
});

app.delete('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findByIdAndRemove(id)
    .then(word => res.send(word))
    .catch(err => res.send(err));
});

//create
app.post('/word', jsonParser, (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(w => res.send(w))
    .catch(err => res.send(err));
});

//update
app.put('/word/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    Word.findByIdAndUpdate(id, req.body)
    .then(() => res.send({ message: 'OK' }))
    .catch(err => res.send(err));
});

/* 
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

*/
app.listen(3000, () => console.log('Server started'));
