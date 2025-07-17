// this is local data :
//   Books : {
//       id: 1,
//       title: "Clean Code",
//       authorId: 1,
//       categoryId: 1,
//       price: 35.99,
//       stock: 10,
//       rating: 4.8,
//       publishedYear: 2008,
//       description: "A Handbook of Agile Software Craftsmanship",
//     }
//  author :{ id: 1, name: "Robert C. Martin" }
// category :{ id: 1, name: "Programming" }

// using mongoose and mongoDB
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

const addBook = async () => {
  const book1 = new Book({
    id: 1,
    title: "Clean Code",
    author: {
      name: "Robert C. Martin",
      age: 31,
    },
    category: "Programming",
    price: 35.99,
    stock: 10,
    rating: 4.8,
    publishedYear: 2008,
    description: "A Handbook of Agile Software Craftsmanship",
  });

  try {
    const result = await book1.save();
    console.log("adding books completed");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = addBook;
