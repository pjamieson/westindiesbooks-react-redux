import React, { Component } from 'react';
import Author from './Author';
import Book from './Book';
import Edition from './Edition';
import './ResultsSection.css';

class ResultsSection extends Component {
  authorHasTitle(books, title) {
    let isMatch = false;
    books.forEach((book) => {
      if (book.title.toLowerCase().indexOf(title) > -1) {
        isMatch = true;
      }
    });
    return isMatch;
  }
  authorHasPublisher(books, publisher) {
    let isMatch = false;
    books.forEach((book) => {
      book.editions.forEach((edition) => {
        if (edition.pub_info.toLowerCase().indexOf(publisher) > -1) {
          isMatch = true;
        }
      });
    });
    return isMatch;
  }
  authorHasTitleFromPublisher(books, title, publisher) {
    let isMatch = false;
    books.forEach((book) => {
      book.editions.forEach((edition) => {
        if (book.title.toLowerCase().indexOf(title) > -1
          && edition.pub_info.toLowerCase().indexOf(publisher) > -1) {
          isMatch = true;
        }
      });
    });
    return isMatch;
  }
  bookHasEditionFromPublisher(editions, publisher) {
    let isMatch = false;
    editions.forEach((edition) => {
      if (edition.pub_info.toLowerCase().indexOf(publisher) > -1) {
        isMatch = true;
      }
    });
    return isMatch;
  }
  render() {
    let authorFilterText = this.props.authorFilterText.toLowerCase();
    let titleFilterText = this.props.titleFilterText.toLowerCase();
    let publisherFilterText = this.props.publisherFilterText.toLowerCase();
    let countryFilterText = this.props.countryFilterText.toLowerCase();
    let full_name = '';
    let show_author = true;
    let show_book = true;
    let show_edition = true;
    let rows = [];
    this.props.authors.forEach((author) => {
      full_name = author.first_name + ' ' + author.last_name;
      show_author = true;
      if (authorFilterText || titleFilterText || publisherFilterText || countryFilterText) {
        if (authorFilterText) {
          show_author = full_name.toLowerCase().indexOf(authorFilterText) > -1;
        }
        if (show_author && titleFilterText) {
          show_author = this.authorHasTitle(author.books, titleFilterText);
        }
        if (show_author && publisherFilterText) {
          show_author = this.authorHasPublisher(author.books, publisherFilterText);
        }
        if (show_author && titleFilterText && publisherFilterText) {
          show_author = this.authorHasTitleFromPublisher(author.books, titleFilterText, publisherFilterText);
        }
        if (show_author && countryFilterText) {
          show_author = author.birth_country.toLowerCase().indexOf(countryFilterText) > -1;
        }
      }
      if (show_author) {
        rows.push( <Author author={author} key={rows.length} /> );
        // show author's books
        author.books.forEach((book) => {
          show_book = true;
          if (titleFilterText || publisherFilterText) {
            if (titleFilterText) {
              show_book = book.title.toLowerCase().indexOf(titleFilterText) > -1;
            }
            if (show_book && publisherFilterText) {
              show_book = this.bookHasEditionFromPublisher(book.editions, publisherFilterText);
            }
          }
          if (show_book) {
            rows.push( <Book book={book} key={rows.length} /> );
            // show editions of Book
            book.editions.forEach((edition) => {
              show_edition = true;
              if (publisherFilterText) {
                show_edition = edition.pub_info.toLowerCase().indexOf(publisherFilterText) > -1;
              }
              if (show_edition) {
                rows.push( <Edition edition={edition} key={rows.length} /> );
              }
            });
          }
        });
      }
    });
    if (rows.length === 0) {
      rows.push( <mark>No books found using the above search criteria.</mark>);
    }
    return (
      <section className="ResultsSection">
        {rows}
      </section>
    );
  }
}

export default ResultsSection;