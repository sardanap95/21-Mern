/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
const initialState = {
  apiKey: "AIzaSyAyItq36H1DdTCaN71bDuujxMTv5v7EJkw",
  books: {
    searchedBooks: [],
    savedBooks: [],
  },
};

export default combineReducers({
  books: function (state = initialState, action) {
    switch (action.type) {
      case "setSearchBooks":
        return {
          ...state.books,
          searchBooks: action.payload,
        };
      case "setSaveBook":
        return {
          ...state.books,
          savedBooks: action.payload,
        };
      default:
        return state;
    }
  }
});
