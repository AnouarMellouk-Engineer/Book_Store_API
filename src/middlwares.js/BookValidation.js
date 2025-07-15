const DB = require("../utils/data");

bookVlidation = (req, res, next) => {
  // validate data
  const data = req.body;
  const parsedAuthorId = parseInt(data.authorId);
  const parsedCatId = parseInt(data.categoryId);
  const parsedPublishYear = parseInt(data.publishedYear);
  const parsedPrice = parseFloat(data.price);
  const parsedStock = parseInt(data.stock);
  const parsedRating = parseFloat(data.rating);
  if (
    !data.title ||
    isNaN(parsedAuthorId) ||
    isNaN(parsedCatId) ||
    isNaN(parsedPublishYear) ||
    isNaN(parsedPrice) ||
    isNaN(parsedStock) ||
    isNaN(parsedRating)
  ) {
    return res.sendStatus(400);
  }

  const authorIndex = DB.authors.findIndex(
    (author) => author.id === parsedAuthorId
  );
  const categorieIndex = DB.categories.findIndex(
    (cat) => cat.id === parsedCatId
  );

  if (authorIndex === -1 || categorieIndex === -1) {
    return res
      .status(400)
      .json({ message: "bad request , author or categorie not found" });
  }

  if (
    parsedPublishYear < 1900 ||
    parsedPrice < 0 ||
    parsedRating < 0 ||
    parsedStock < 0
  ) {
    return res.sendStatus(400);
  }
  next();
};

module.exports = bookVlidation;
