import React, { Component } from 'react';
import './Edition.css';

class Edition extends Component {
  render() {
    const edition = this.props.edition;
    const email_href = 'mailto:patrick@westindiesbooks.com?subject='
     + this.props.book_title + ' by ' + this.props.author_name;
    const img_url = '../assets/images/' + edition.img_file;
    let copies = [];
    if (edition.copies) {
      edition.copies.forEach((copy) => {
        copies.push(
          <div key={copies.length} className="edition-copy">
            <p className="copy-header">An available copy of this edition:</p>
            <p>{copy.features}</p>
            <p>{copy.condition}</p>
            <p>
              <span className="copy-price">{copy.price}</span>
              <span> To inquire about this copy, email </span>
              <span>
                <a href={email_href}>West Indies Books</a>
              </span>
            </p>
          </div>
        );
      });
    }
    return (
      <div className="Edition">
        <h6 className="edition-pub-info">{edition.pub_info}</h6>
        <div>
          {edition.img_file ?
            <img className="edition-image" src={img_url} alt={edition.pub_info} />
            : null }
          { edition.edition || edition.binding || edition.description || edition.size || edition.pages ?
            <div className="edition-detail">
              { edition.edition || edition.binding ?
                <p>{edition.edition}&nbsp;{edition.binding}</p>
              : null }
              { edition.description ?
                <p>{edition.description}</p>
              : null }
              { edition.size || edition.pages ?
                <p>{edition.size}&nbsp;{edition.pages}</p>
              : null }
            </div>
          : null }
          <div className="edition-copies">
            {copies}
          </div>
        </div>
      </div>
    );
  }
}

export default Edition;
