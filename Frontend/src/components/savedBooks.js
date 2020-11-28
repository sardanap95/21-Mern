import React, { Component } from "react";
import { connect } from "react-redux";
import BookCard from "./bookCard";

export class savedBooks extends Component {
  render() {
    const { savedBooks } = this.props;

    return (
      <div className="container-fluid bg-dark p-5 main-container">
        <div className="row justify-content-center">
          <h1 className="mb-3 text-light">Saved books</h1>
        </div>
        <div className="row overflow-auto x">
          {savedBooks &&
            savedBooks.map((book, index) => {
              return (
                <div className="col-lg-3 col-12" key={index}>
                  <BookCard book={book} actionBtn="delete" key={book.id} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedBooks: state.books.savedBooks,
});

export default connect(mapStateToProps, null)(savedBooks);
