import React, { Component } from 'react';
import './Edition.css';

class Edition extends Component {
  render() {
    const edition = this.props.edition;
    return (
      <div className="Edition">
        <h6>{edition.pub_info}</h6>
      </div>
    );
  }
}

export default Edition;
