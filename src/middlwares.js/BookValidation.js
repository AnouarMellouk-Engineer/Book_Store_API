bookVlidation = (req, res, next) => {
  // validate data
  const data = req.body;
  const parsedAuthorAge = parseInt(data.author.age);
  const parsedPublishYear = parseInt(data.publishedYear);
  const parsedPrice = parseFloat(data.price);
  const parsedStock = parseInt(data.stock);
  const parsedRating = parseFloat(data.rating);
  if (
    !data.title ||
    !data.author.name ||
    isNaN(parsedAuthorAge) ||
    !data.category ||
    isNaN(parsedPublishYear) ||
    isNaN(parsedPrice) ||
    isNaN(parsedStock) ||
    isNaN(parsedRating)
  ) {
    return res.sendStatus(400);
  }

  if (
    parsedPublishYear < 1900 ||
    parsedPrice < 0 ||
    parsedRating < 0 ||
    parsedStock < 0
  ) {
    return res.sendStatus(400);
  }

  req.book = {
    title: data.title,
    author: {
      name: data.author.name,
      age: parsedAuthorAge,
    },
    category: data.category,
    price: parsedPrice,
    stock: parsedStock,
    rating: parsedRating,
    publishedYear: parsedPublishYear,
    description: data.description,
  };
  next();
};

module.exports = bookVlidation;
