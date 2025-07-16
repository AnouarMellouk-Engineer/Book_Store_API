const express = require("express");
const app = express();
const DB = require("./src/utils/data");
const bookValidate = require("./src/middlwares.js/BookValidation");
const PORT = 3000;
app.use(express.json());

// retrieve all books
app.get("/api/books", (req, res) => {
  return res.json(DB.books);
});

// retrieve a book based on ID
app.get("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }
  const result = DB.books.find((book) => book.id === parsedId);
  if (!result) {
    return res.sendStatus(404);
  }
  return res.json(result);
});

// add a new book
app.post("/api/books", bookValidate, (req, res) => {
  // create the new book and add it
  DB.books.push({
    id: DB.books[DB.books.length - 1].id + 1,
    title: req.body.title,
    authorId: req.body.authorId,
    categoryId: req.body.categoryId,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating,
    publishedYear: req.body.publishedYear,
    description: req.body.description,
  });
  return res.status(201).json({ message: "created succefully" });
});

// update a specific book based on ID
app.put(
  "/api/books/:id",
  (req, res, next) => {
    // id virification
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
      return res.sendStatus(400);
    }
    const bookIndex = DB.books.findIndex((book) => book.id === parsedId);
    if (bookIndex === -1) {
      return res.sendStatus(404);
    }

    req.bookindex = bookIndex;
    req.parseId = parsedId;

    next();
  },
  bookValidate,
  (req, res) => {
    DB.books[req.bookindex] = { id: req.parseId, ...req.body };
    return res.sendStatus(200);
  }
);

// delete a book
app.delete(
  "/api/books/:id",
  (req, res, next) => {
    // id virification
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
      return res.sendStatus(400);
    }
    const bookIndex = DB.books.findIndex((book) => book.id === parsedId);
    if (bookIndex === -1) {
      return res.sendStatus(404);
    }

    req.bookindex = bookIndex;

    next();
  },
  (req, res) => {
    DB.books.splice(req.bookindex, 1);
    return res.sendStatus(200);
  }
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
