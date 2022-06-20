const bookModel = require('../models/book');



exports.getAllBooks = async () => {
    const data = await bookModel.find({});
    return data;
}