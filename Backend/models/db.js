const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/books", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Connected to DB successfully.");
  })
  .catch(function (err) {
    console.log("Connection failed");
  });

const booksScehma = new mongoose.Schema({
  b_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },  
});


const bookModel = mongoose.model("bookmodel", booksScehma);


