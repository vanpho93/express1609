const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    en: { type: String, unique: true, trim: true, minlength: 1 },
    vn: { type: String, trim: true, minlength: 1 }
});

const Word = mongoose.model('words', WordSchema);

mongoose.connect('mongodb://localhost/rn1609', { useMongoClient: true });

module.exports = Word;
// create

// const word = new Word({ en: 'code', vn: 'ma nguon' });
// word.save()
// .then(word => console.log(word))
// .catch(err => console.log(err));

// update

// Word.findByIdAndUpdate('59e1b51b851f79de0df357a4', { vn: 'Buoi Sang' })
// .then(x => console.log(x))
// .catch(err => console.log(err));

// read

// Word.find({ vn: 'ma nguon' })
// .then(words => console.log(words))
// .catch(err => console.log(err));

// Word.findById('59e1b51b851f79de0df357a4')
// .then(word => console.log(word));

// DELETE

// Word.findByIdAndRemove('59e1bac78345605390aa5017')
// .then(x => console.log(x));
