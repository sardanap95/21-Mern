import React, { Component } from "react";

import "./main.css";

export class bookCard extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="card book-card m-4 rounded-lg shadow-lg">
        <img
          src={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail}
          className="book-img"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{book.volumeInfo.title}</h5>
          by
          {book.volumeInfo.authors &&
            book.volumeInfo.authors.map((author) => {
              return <p>{author}</p>;
            })}
          <div className="d-flex justify-content-end">
            <a className="btn btn-primary mr-2" href={book.volumeInfo.infoLink}>
              Details &nbsp;
              <i className="fas fa-chevron-right" />
            </a>
            <a className="btn btn-success" href={book.volumeInfo.infoLink}>
              Save &nbsp;
              <i className="far fa-bookmark"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default bookCard;
