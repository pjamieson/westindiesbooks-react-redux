import React, { Component } from 'react';
import './Edition.css';

class Edition extends Component {

  static propTypes = {
    edition: React.PropTypes.object.isRequired
  };

  render() {
    const edition = this.props.edition;
    const has_detail = edition.edition || edition.binding || edition.pages;
    const has_image = edition.img_file;
    const img_url = '../assets/images/' + edition.img_file;

    const note_paragraphs = [];
    if (edition.notes) {
      edition.notes.forEach((paragraph) => {
        note_paragraphs.push(
          <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
        );
      });
    }

    const copies = [];
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
              <span><a href={email_href}>{copy.seller_name}</a></span>
            </p>
          </div>
        );
      });
    }

    return (
      <div className="Edition">
        <h6 className="edition-pub-info">{edition.pub_info}</h6>
        <div>

          {has_image && <img className="edition-image" src={img_url} alt={edition.pub_info} />}

          {has_detail &&
            <div className="edition-detail">
              
              {((edition.edition || edition.binding) && !has_image) &&
                <div className="edition-detail">
                  <p>
                    {edition.edition && <span dangerouslySetInnerHTML={{__html: edition.edition}} />}
                    {edition.edition && <span>&nbsp;</span>}
                    {edition.binding && <span>{edition.binding}</span>}
                  </p>
                </div>
              }
              {((edition.edition || edition.binding) && has_image) &&
                <div className="edition-detail">
                  <p><span dangerouslySetInnerHTML={{__html: edition.edition}} /></p>
                  <p>{edition.binding}</p>
                </div>
              }

              {edition.description && <p>{edition.description}</p>}

              {((edition.size || edition.pages) && !has_image) &&
                <div className="edition-detail">
                  <p>
                    {edition.size && <span>{edition.size}&nbsp;</span>}
                    {edition.pages && <span>{edition.pages} pages.</span>}
                  </p>
                </div>
              }
              {((edition.size || edition.pages) && has_image) &&
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
