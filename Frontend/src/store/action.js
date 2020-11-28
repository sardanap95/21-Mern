/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { apiKey } from "../api/apiKey";
import { toast } from "react-toastify";

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
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&maxResults=4`)
      .then((books) => {
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
          payload: books.data.books,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const saveBook = (book) => {
  return (dispatch, getState) => {
    axios
      .post("/api/books", book)
      .then((res) => {
        toast.dark(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteBook = (b_id) => {
  return (dispatch, getState) => {
    axios
      .delete("/api/book", {
        params: { b_id },
      })
      .then((res) => {
        dispatch({
          type: "removeSavedBook",
          payload: b_id,
        });
        toast.dark(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
