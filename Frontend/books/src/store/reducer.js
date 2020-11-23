/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
const initialState = {
  apiKey: "AIzaSyAyItq36H1DdTCaN71bDuujxMTv5v7EJkw",
  books: {
    savedBooks: [],
  },
  searchedBooks: [],
  searchText: "",
};

export default combineReducers({
  books: function (state = initialState, action) {
    switch (action.type) {
      case "setSearchText":
        return {
          ...state,
          searchText: action.payload,
        };
      case "setSearchBooks":
        
        return {
          ...state,
          searchedBooks: action.payload,
        };
      case "setSaveBook":
        return {
          ...state.books,
          savedBooks: action.payload,
        };
      default:
        return state;
    }
  },
});
