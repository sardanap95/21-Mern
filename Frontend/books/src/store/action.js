/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { apiKey } from "../api/apiKey";
axios.defaults.baseURL = "http://localhost:9090";

export default {
  fetchBooks(searchTerm, dispatch) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
      .then((books) => {
        dispatch({
          type: "setSearchBooks",
          payload: books,
        });
      });
  },
  saveBook(bookInfo) {
    axios.post("/api/books", bookInfo).then((res) => {
      console.log(res);
    });
  },
  getSavedBook(dispatch) {
    axios.get("/api/books").then((books) => {
      dispatch({
        type: "setSavedBook",
        payload: books,
      });
    });
  },
};
