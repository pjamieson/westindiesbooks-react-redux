import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import './AboutSection.css';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ collapsed: !this.state.collapsed })
  }
  render() {
    return (
      <section className="AboutSection">
        <div className="about-header">
          <div>
            <h2>West Indian Literature</h2>
            <h3>A list compiled by Patrick Jamieson</h3>
          </div>
          <Button className="about-btn" color="secondary" size="sm" onClick={this.toggle}>
            {this.state.collapsed ? 'more' : 'less'}
          </Button>
        </div>
        <Collapse isOpen={!this.state.collapsed}>
          <p>This is a reference listing of "literature" by West Indian authors.
            The emphasis is on prose fiction written in English, however some poetry
            and nonfiction has been included, as have some works that have been
            translated to English.</p>
          <p>My definition of a "West Indian Author" is rather broad: Most West
             Indian authors were born and raised in the West Indies. Some were born
             elsewhere and parented by at least one West Indian. Others immigrated
             to the West Indies from another part of the globe. Many West Indian
             authors have found it necessary to live in other countries in order
             to better pursue their careers as writers, often becoming citizens of
             their new home countries. Today, a West Indian Author could live
             anywhere in the world, and may be "claimed" by both a West Indian
             country and their country of residence. To me, the defining factor is
             that the West Indian Author usually writes of West Indian characters
             and/or concerns with understanding and insight.</p>
          <p>Use the inputs below to filter the complete list by author name, book
            title, publisher, or the West Indian country most associated with the
            author(s).</p>
          <p>Results are ordered alphabetically by author last name, with an author's.
            titles ordered by date of original publication of the first edition.</p>
        </Collapse>
      </section>
    );
  }
}

export default AboutSection;
