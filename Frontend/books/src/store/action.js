/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { apiKey } from "../api/apiKey";
axios.defaults.baseURL = "http://localhost:9090";

export const setSearchText = (searchTerm) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setSearchText",
      payload: searchTerm,
    });
  };
};
export const getDefaultBooks = (searchTerm) => {
  return (dispatch, getState) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&maxResults=3`)
      .then((books) => {
        console.log(books.data.items);
        dispatch({
          type: "setSearchBooks",
          payload: books.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getSearchedBook = (searchTerm) => {
  return (dispatch, getState) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
      .then((books) => {
        console.log(books.data.items);
        dispatch({
          type: "setSearchBooks",
          payload: books.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getSavedBook = () => {
  return (dispatch, getState) => {
    axios
      .get("/api/books")
      .then((books) => {
        dispatch({
          type: "setSavedBook",
          payload: books,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const saveBook = (bookInfo) => {
  axios
    .post("/api/books", bookInfo)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBook = (b_id) => {
  axios
    .delete("/api/delete", {
      params: { b_id },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
