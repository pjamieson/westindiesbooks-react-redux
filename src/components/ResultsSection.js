import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  authorHasEditionOffered(books) {
    let isMatch = false;
    books.forEach((book) => {
      book.editions.forEach((edition) => {
        if (edition.copies) {
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
  bookHasTitleWithEditionOffered(editions) {
    let isMatch = false;
    editions.forEach((edition) => {
      if (edition.copies) {
        isMatch = true;
      }
    });
    return isMatch;
  }
  render() {
    const authorFilterText = this.props.authorFilterText.toLowerCase();
    const titleFilterText = this.props.titleFilterText.toLowerCase();
    const publisherFilterText = this.props.publisherFilterText.toLowerCase();
    const countryFilterText = this.props.countryFilterText.toLowerCase();
    const offeredOnly = this.props.offeredOnly;

    let full_name = '';
    let show_author = true;
    let show_book = true;
    let show_edition = true;

    const rows = [];
    this.props.authors.forEach((author) => {
      full_name = author.first_name + ' ' + author.last_name;

      show_author = true;
      // Check if the Author meets all filter criteria. At this point, we are only
      // determining if we want to show at least one Book by the Author. The order
      // of these tests is important, and once any test fails, no more will be tried.
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
      if (show_author && offeredOnly) {
        show_author = this.authorHasEditionOffered(author.books);
      }

      if (show_author) {
        rows.push( <Author author={author} key={rows.length} /> );
        // show author's books that meet search criteria
        author.books.forEach((book) => {
          show_book = true;
          if (titleFilterText) {
            show_book = book.title.toLowerCase().indexOf(titleFilterText) > -1;
          }
          if (show_book && publisherFilterText) {
            show_book = this.bookHasEditionFromPublisher(book.editions, publisherFilterText);
          }
          if (show_book && offeredOnly) {
            show_book = this.bookHasTitleWithEditionOffered(book.editions);
          }
          if (show_book) {
            rows.push( <Book key={rows.length} book={book}
              author_name={full_name} /> );
            // show editions of Book that meet search criteria
            book.editions.forEach((edition) => {
              show_edition = true;
              if (publisherFilterText) {
                show_edition = edition.pub_info.toLowerCase().indexOf(publisherFilterText) > -1;
              }
              if (offeredOnly) {
                show_edition = edition.copies;
              }
              if (show_edition) {
                rows.push( <Edition key={rows.length} edition={edition}
                book_title={book.title}
                author_name={full_name} /> );
              }
            });
          }
        });
      }
    });
    if (rows.length === 0) {
      rows.push( <mark key="x">No books found using the above search criteria.</mark>);
    }
    return (
      <section className="ResultsSection">
        {rows}
      </section>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up in the props of this (ResultsSection)
  return {
    authors: state.authors
  };
}

// Promote ResultsSection from a React component to a Redux container.
export default connect(mapStateToProps)(ResultsSection);
