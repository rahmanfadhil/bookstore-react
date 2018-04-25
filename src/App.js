import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Navbar';
import Hero from './components/Hero';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Container>
          <Row>
            <Col><Item /></Col>
            <Col><Item /></Col>
            <Col><Item /></Col>
          </Row>
          <br/>
          <Row>
            <Col><Item /></Col>
            <Col><Item /></Col>
            <Col><Item /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
