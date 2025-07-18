const route = require("express").Router();
const bookValidate = require("../middlwares.js/BookValidation.js");
const Book = require("../models/Book");

// retrieve all books
route.get("/", async (req, res) => {
  try {
    const data = await Book.allBooks();
    // data found 200
    if (data.length !== 0) {
      return res.json(data);
    }
    return res.sendStatus(404);
    // data not found 404
  } catch (error) {
    return res.sendStatus(500);
  }
});

// retrieve a book based on ID
route.get("/:id", async (req, res) => {
  // validate ID
  const id = req.params.id;
  // check exiting ID
  try {
    const result = await Book.getBookById(id);
    if (result) {
      res.json(result);
    }
    res.sendStatus(404);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

// add a new book
route.post("/", bookValidate, async (req, res) => {
  try {
    const result = await Book.addBook(req.book);
    return res
      .status(201)
      .json({ message: " adding book completed", bookInfo: result });
  } catch (error) {
    res.sendStatus(500);
  }
});

// update a specific book based on ID
route.put("/:id", bookValidate, async (req, res) => {
  try {
    await Book.updateBook(req.params.id, req.book);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
  // return res.sendStatus(200);
});

// delete a book
route.delete("/:id", async (req, res) => {
  try {
    await Book.deleteBook(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = route;
