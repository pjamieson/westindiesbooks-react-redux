import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtIndex.css';

class ArtIndex extends Component {
  render() {
    const rows = [];
    let last_cat = null;
    this.props.art_links.forEach((link) => {
      if (link.cat !== last_cat) {
        rows.push(<h6 key={link.cat}>{link.cat}</h6>);
      }
      rows.push(
        <p key={link.name}>
          <a href={link.url} target="_blank">{link.name}</a>
        </p>
      );
      last_cat = link.cat;
    });
    return (
      <sidebar className="ArtIndex">
        <h4>Visit Our Caribbean Art Gallery</h4>
        <div className="links-list">
          {rows}
        </div>
      </sidebar>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up in the props of this (ArtIndex)
  return {
    art_links: state.art_links
  };
}

// Promote ArtIndex from a React component to a Redux container.
export default connect(mapStateToProps)(ArtIndex);
