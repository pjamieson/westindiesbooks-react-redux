import React, { Component } from 'react';
import './Author.css';

class Author extends Component {
  render() {
    const author = this.props.author;
    return (
      <div className="Author">
        <h4>
          {author.last_name + ', ' + author.first_name}
        </h4>
        <h6 className="author-country">
          {author.birth_country} ({author.birth_year} - {author.death_year})
        </h6>
        <p dangerouslySetInnerHTML={{__html: author.bio}}></p>
    </div>
    );
  }
}

export default Author;
