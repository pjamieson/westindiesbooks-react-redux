import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  static propTypes = {
    book: React.PropTypes.object.isRequired
  };

  render() {
    const book = this.props.book;
    const summary_paragraphs = [];
    book.summary.forEach((paragraph) => {
      summary_paragraphs.push(
        <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
      );
    });
    return (
      <div className="Book">
        <h5 className="book-title">{book.title}</h5>
        <p className="book-subtitle">{book.subtitle}</p>
        <div className="book-summary">
          {summary_paragraphs}
        </div>
      </div>
    );
  }
}

export default Book;
