require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./src/utils/connectDB.js");
const bookRouter = require("./src/routes/book.js");
const PORT = process.env.PORT || 3000;
const database = process.env.DATABASE;
connect(database);

app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
