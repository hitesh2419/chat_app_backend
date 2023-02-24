const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB Connection Successfull");
  })
  .catch((err) => {
    console.log("Mongo DB Connection Failed", err);
  });
