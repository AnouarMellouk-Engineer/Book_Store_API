const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  rating: { type: Number, required: true, min: 0 },
  publishedYear: { type: Number, required: true, min: 1900 },
  description: String,
});
const Book = mongoose.model("book", BookSchema);

const addBook = async (book) => {
  const book1 = new Book(book);
  const result = await book1.save();
  return result;
};

const allBooks = async () => {
  return await Book.find();
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

const updateBook = async (id, data) => {
  await Book.updateOne({ _id: id }, data);
};

const updateBooks = async (condition, data) => {
  await Book.updateMany(condition, data);
};

const deleteBook = async (id) => {
  await Book.deleteOne({ _id: id });
};

const deleteBooks = async (condition) => {
  await Book.deleteMany(condition);
};

module.exports = {
  allBooks,
  addBook,
  getBookById,
  updateBooks,
  updateBook,
  deleteBook,
  deleteBooks,
};
