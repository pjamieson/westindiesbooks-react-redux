import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Container>
          <Row>
            <Col md="2" xs="12">
              <Nav>
                <NavItem>
                  <NavLink href="https://github.com/pjamieson/westindiesbooks-react-redux" target="_blank">
                    <FontAwesome name="github" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/patrick-react-jamieson/" target="_blank">
                    <FontAwesome name="linkedin" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="5" sm="6" xs="12">
              <Row>
                <div>
                  <h6>Contact</h6>
                  <div>
                    <p className="email">patrick@westindiesbooks.com</p>
                  </div>
                </div>
              </Row>
            </Col>
            <Col md="5" sm="6" xs="12">
              <div className="copyright-block">
                <p>Created by Patrick Jamieson</p>
                <p className="copyright">Copyright 1997-2017. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
