import React, { Component } from "react";
import { connect } from "react-redux";
import { saveBook, deleteBook } from "../store/action";
import "./main.css";

export class bookCard extends Component {
  saveBook(book) {
    this.props.saveBook(book);
  }
  deleteBook(b_id) {
    this.props.deleteBook(b_id);
  }

  render() {
    const { book, location } = this.props;

    return (
      <div className="card book-card m-4 rounded-lg shadow-lg" key={book.id}>
        <img src={book.image} className="book-img" alt="" height="60%" />
        <div className="card-body">
          <h5 className="card-title text-truncate">{book.title}</h5>
          <blockquote className="blockquote-footer text-truncate  ">
            {book.authors &&
              book.authors.map((author, index) => {
                return <span key={index}>{author} , </span>;
              })}
          </blockquote>
          <div className="d-flex justify-content-end">
            <a className="btn btn-primary mr-2" href={book.link}>
              Details &nbsp;
              <i className="fas fa-chevron-right" />
            </a>
            {location.pathname === "/" ? (
              <div className="btn btn-success" onClick={saveBook(book)}>
                Save &nbsp;
                <i className="far fa-bookmark"></i>
              </div>
            ) : (
              <div className="btn btn-danger text-center" onClick={deleteBook(book.b_id)}>
                Delete &nbsp;
                <i className="far fa-trash-alt"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveBook: (book) => {
    dispatch(saveBook(book));
  },
  deleteBook: (b_id) => {
    dispatch(deleteBook(b_id));
  },
});

export default connect(null, mapDispatchToProps)(bookCard);
