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
            <Col lg="2" sm="3" xs="12">
              <Nav>
                <NavItem>
                  <NavLink href="https://github.com/pjamieson/react-redux-landing-page" target="_blank">
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
            <Col lg="3" sm="4" xs="12">
              <Row>
                <div>
                  <h6>Contact</h6>
                  <div>
                    <p className="email">patrick@westindiesbooks.com</p>
                  </div>
                </div>
              </Row>
            </Col>
            <Col lg="7" sm="5" xs="12">
              <div className="copyright-block">
                <p>Created by Patrick Jamieson</p>
                <p className="copyright">Copyright 2017. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
