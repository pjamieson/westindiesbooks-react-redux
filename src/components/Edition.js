import React, { Component } from 'react';
import './Edition.css';

class Edition extends Component {

  static propTypes = {
    edition: React.PropTypes.object.isRequired
  };

  render() {
    const edition = this.props.edition;
    const img_url = '../assets/images/' + edition.img_file;

    let note_paragraphs = [];
    if (edition.notes) {
      edition.notes.forEach((paragraph) => {
        note_paragraphs.push(
          <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
        );
      });
    }
    
    let copies = [];
    if (edition.copies) {
      edition.copies.forEach((copy) => {
        const email_href = 'mailto:' + copy.seller_email + '?subject='
         + this.props.book_title + ' by ' + this.props.author_name;
        copies.push(
          <div key={copies.length} className="edition-copy">
            <p className="copy-header">An available copy of this edition:</p>
            <p>{copy.features}</p>
            <p>{copy.condition}</p>
            <p>
              <span className="copy-price">US${copy.price}</span>
              <span> To inquire about this copy, email </span>
              <span>
                <a href={email_href}>{copy.seller_name}</a>
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
          {edition.img_file && <img className="edition-image" src={img_url} alt={edition.pub_info} />}
          {(edition.edition || edition.binding || edition.description || edition.size || edition.pages) &&
            <div className="edition-detail">
              {((edition.edition || edition.binding) && !edition.img_file) &&
                <div className="edition-detail">
                  {(edition.edition && edition.binding) &&
                    <p>
                      <span dangerouslySetInnerHTML={{__html: edition.edition}} />&nbsp;{edition.binding}
                    </p>
                  }
                  {(edition.edition && !edition.binding) &&
                    <p><span dangerouslySetInnerHTML={{__html: edition.edition}} /></p>
                  }
                  {(!edition.edition && edition.binding) && <p>{edition.binding}</p>}
                </div>
              }
              {((edition.edition || edition.binding) && edition.img_file) &&
                <div className="edition-detail">
                  <p><span dangerouslySetInnerHTML={{__html: edition.edition}} /></p>
                  <p>{edition.binding}</p>
                </div>
              }
              {edition.description && <p>{edition.description}</p>}
              {((edition.size || edition.pages) && !edition.img_file) &&
                <div className="edition-detail">
                  {(edition.size && edition.pages) && <p>{edition.size}&nbsp;{edition.pages} pages.</p>}
                  {(edition.size && !edition.pages) && <p>{edition.size}</p>}
                  {(!edition.size && edition.pages) && <p>{edition.pages} pages.</p>}
                </div>
              }
              {((edition.size || edition.pages) && edition.img_file) &&
                <div className="edition-detail">
                  {edition.size && <p>{edition.size}</p>}
                  {edition.pages && <p>{edition.pages} pages.</p>}
                </div>
              }
              {edition.notes && <div className="edition-detail">{note_paragraphs}</div>}
            </div>
          }
          <div className="edition-copies">
            {copies}
          </div>
        </div>
      </div>
    );
  }
}

export default Edition;
