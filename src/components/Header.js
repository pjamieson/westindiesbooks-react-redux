import React, { Component } from 'react';
import banner from '../assets/banner.jpeg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img className="banner" src={banner} alt="banner" />
        <h1 className="title">West Indies Books</h1>
      </header>
    );
  }
}

export default Header;
