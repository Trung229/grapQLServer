const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const userSchema = new schema({
    id: { type: ObjectId },
    userName: { type: String },
    userAge: { type: Number }
})

module.exports = mongoose.model('user', userSchema)