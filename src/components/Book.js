import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="Book">
        <h5>{book.title}</h5>
        <p dangerouslySetInnerHTML={{__html: book.summary}}></p>
      </div>
    );
  }
}

export default Book;
