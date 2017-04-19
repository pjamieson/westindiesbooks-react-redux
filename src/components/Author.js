import React, { Component } from 'react';
import './Author.css';

class Author extends Component {
  static propTypes = {
    author: React.PropTypes.object.isRequired
  };

  render() {
    const author = this.props.author;
    let bio_paragraphs = [];
    author.bio.forEach((paragraph) => {
      bio_paragraphs.push(
        <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
      );
    });
    return (
      <div className="Author">
        <h4 className="author-name">
          {author.last_name + ', ' + author.first_name}
        </h4>
        <h6 className="author-country">
          {author.birth_country} ({author.birth_year} - {author.death_year})
        </h6>
        <div className="author-bio">
          {bio_paragraphs}
        </div>
    </div>
    );
  }
}

export default Author;
