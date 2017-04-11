import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Header from '../components/Header';
import ArtIndex from '../components/ArtIndex';
import AboutSection from '../components/AboutSection';
import SearchSection from '../components/SearchSection';
import ResultsSection from '../components/ResultsSection';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorFilterText: '',
      titleFilterText: '',
      publisherFilterText: '',
      countryFilterText: '',
      offeredOnly: false
    };
    this.handleAuthorFilterTextInput = this.handleAuthorFilterTextInput.bind(this);
    this.handleTitleFilterTextInput = this.handleTitleFilterTextInput.bind(this);
    this.handlePublisherFilterTextInput = this.handlePublisherFilterTextInput.bind(this);
    this.handleCountryFilterTextInput = this.handleCountryFilterTextInput.bind(this);
    this.handleOfferedOnlyInput = this.handleOfferedOnlyInput.bind(this);
  }
  handleAuthorFilterTextInput(filterText) {
    this.setState({
      authorFilterText: filterText
    });
  }
  handleTitleFilterTextInput(filterText) {
    this.setState({
      titleFilterText: filterText
    });
  }
  handlePublisherFilterTextInput(filterText) {
    this.setState({
      publisherFilterText: filterText
    });
  }
  handleCountryFilterTextInput(filterText) {
    this.setState({
      countryFilterText: filterText
    });
  }
  handleOfferedOnlyInput(offeredOnly) {
    this.setState({
      offeredOnly: offeredOnly
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col className="art-index-col" md="3">
              <ArtIndex />
            </Col>
            <Col md="9" xs="12">
              <AboutSection />
              <SearchSection
                authorFilterText={this.state.authorFilterText}
                titleFilterText={this.state.titleFilterText}
                publisherFilterText={this.state.publisherFilterText}
                countryFilterText={this.state.countryFilterText}
                offeredOnly={this.state.offeredOnly}
                onAuthorFilterTextInput={this.handleAuthorFilterTextInput}
                onTitleFilterTextInput={this.handleTitleFilterTextInput}
                onPublisherFilterTextInput={this.handlePublisherFilterTextInput}
                onCountryFilterTextInput={this.handleCountryFilterTextInput}
                onOfferedOnlyInput={this.handleOfferedOnlyInput}
              />
              <ResultsSection
                authorFilterText={this.state.authorFilterText}
                titleFilterText={this.state.titleFilterText}
                publisherFilterText={this.state.publisherFilterText}
                countryFilterText={this.state.countryFilterText}
                offeredOnly={this.state.offeredOnly}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
