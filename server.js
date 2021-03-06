const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const { bookModel } = require("./db/db");
// const cors = require("cors");

// app.use(cors({ origin: ["http://localhost:3000", "https://pushpi-google-books.herokuapp.com"] }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 9090;

app.get("/api/books", (req, res) => {
  console.log("Getting saved books.");
  bookModel
    .find()
    .then((books) => {
      console.log("Found " + books.length + " saved books.");
      res.status(200).send({ books });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: "Failed to get saved the book." });
    });
});
app.post("/api/books", (req, res) => {
  console.log("Saving book.");
  const savedBook = req.body;
  new bookModel(savedBook)
    .save()
    .then((response) => {
      res.status(200).send({ status: "Book saved successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: "Failed to save the book." });
    });
});
app.delete("/api/book", ({ query }, res) => {
  const { b_id } = query;
  console.log("Deleting book");
  bookModel
    .deleteOne({ b_id })
    .then(({ deletedCount }) => {
      if (deletedCount) {
        console.log("Book removed successfully.");
        res.status(200).send({ status: "Book removed successfully." });
      } else {
        console.log("No such book found, failed to removed book.");
        res.status(400).send({ status: "No such book found, failed to removed book." });
      }
    })
    .catch((err) => {
      console.log("Couldn't delete book.\n" + err);
      res.status(400).send({ status: "Couldn't delete book." });
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./Frontend/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Frontend/build/index.html"));
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./Frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("Books server running on port " + port);
});
