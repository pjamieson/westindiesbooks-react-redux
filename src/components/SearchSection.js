import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import './SearchSection.css';

class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggle = this.toggle.bind(this);
    this.handleCountryFilterTextInputChange = this.handleCountryFilterTextInputChange.bind(this);
    this.handlePublisherFilterTextInputChange = this.handlePublisherFilterTextInputChange.bind(this);
    this.handleAuthorFilterTextInputChange = this.handleAuthorFilterTextInputChange.bind(this);
    this.handleTitleFilterTextInputChange = this.handleTitleFilterTextInputChange.bind(this);
    this.handleOfferedOnlyInputChange = this.handleOfferedOnlyInputChange.bind(this);
  }
  toggle() {
    this.setState({ collapsed: !this.state.collapsed })
  }
  handleCountryFilterTextInputChange(e) {
    // Call function passed down as a prop by App
    this.props.onCountryFilterTextInput(e.target.value);
  }
  handlePublisherFilterTextInputChange(e) {
    this.props.onPublisherFilterTextInput(e.target.value);
  }
  handleAuthorFilterTextInputChange(e) {
    this.props.onAuthorFilterTextInput(e.target.value);
  }
  handleTitleFilterTextInputChange(e) {
    this.props.onTitleFilterTextInput(e.target.value);
  }
  handleOfferedOnlyInputChange(e) {
    this.props.onOfferedOnlyInput(e.target.checked);
  }
  render() {
    return (
      <section className="SearchSection">
        <form>
          <div className="search-header">
            <label>
              <p className="search-label">Author Name:</p>
              <input className="search-text-input"
                type="text"
                placeholder="All Authors..."
                value={this.props.authorFilterText}
                onChange={this.handleAuthorFilterTextInputChange}
              />
            </label>
            <Button className="search-btn" color="secondary" size="sm" onClick={this.toggle}>
              {this.state.collapsed ? 'more' : 'less'}
            </Button>
          </div>
          <Collapse isOpen={!this.state.collapsed}>
            <label>
              <p className="search-label">Book Title:</p>
              <input className="search-text-input"
                type="text"
                placeholder="All Titles..."
                value={this.props.titleFilterText}
                onChange={this.handleTitleFilterTextInputChange}
              />
            </label>
            <label>
              <p className="search-label">Edition Publisher:</p>
              <input className="search-text-input"
                type="text"
                placeholder="All Publishers..."
                value={this.props.publisherFilterText}
                onChange={this.handlePublisherFilterTextInputChange}
              />
            </label>
            <label>
              <p className="search-label">Author Country:</p>
              <input className="search-text-input"
                type="text"
                placeholder="All Countries..."
                value={this.props.countryFilterText}
                onChange={this.handleCountryFilterTextInputChange}
              />
            </label>
            <p className="offered-container">
              <input
                type="checkbox"
                checked={this.props.offeredOnly}
                onChange={this.handleOfferedOnlyInputChange}
              />
              &nbsp;
              Only show books offered for sale (New feature; adding titles daily.)
            </p>
          </Collapse>
        </form>
      </section>
    );
  }
}

export default SearchSection;
