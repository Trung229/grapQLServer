const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const bookSchema = new schema({
    id: { type: ObjectId },
    name: { type: String },
    author: { type: String }
})

module.exports = mongoose.model('book', bookSchema)