import React, { Component } from 'react';
import './Edition.css';

class Edition extends Component {
  render() {
    const edition = this.props.edition;
    let copies = [];
    if (edition.copies) {
      edition.copies.forEach((copy) => {
        copies.push(
          <div key={copies.length} className="edition-copy">
            <p className="copy-header">An available copy of this edition:</p>
            <p>{copy.features}</p>
            <p>{copy.condition}</p>
            <p className="copy-price">{copy.price}</p>
          </div>
        );
      });
    }
    return (
      <div className="Edition">
        <h6 className="edition-pub-info">{edition.pub_info}</h6>
        <div className="edition-detail">
          <p>{edition.edition} {edition.binding}</p>
          <p>{edition.size} {edition.pages}</p>
        </div>
        <div className="edition-copies">
          {copies}
        </div>
      </div>
    );
  }
}

export default Edition;
