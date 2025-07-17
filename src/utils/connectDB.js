const mongoose = require("mongoose");

const connect = async (dataBaseUrl) => {
  try {
    await mongoose.connect(dataBaseUrl);
    console.log("database connected ...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
