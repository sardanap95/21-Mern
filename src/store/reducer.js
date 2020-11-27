/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
const initialState = {
  apiKey: "AIzaSyAyItq36H1DdTCaN71bDuujxMTv5v7EJkw",
  savedBooks: [],
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
      case "setSavedBook":
        return {
          ...state,
          savedBooks: action.payload,
        };
      case "removeSavedBook":
        console.log("xx");
        return {
          ...state,
          savedBooks: state.savedBooks.splice(
            state.savedBooks.findIndex((i) => i.b_id === action.payload),
            1
          ),
        };
      default:
        return state;
    }
  },
});
