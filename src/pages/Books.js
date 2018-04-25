import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hero from '../components/Hero';
import Item from '../components/Item';

class Books extends Component {
  render() {
    return (
      <Container>
        <Hero />
        <Row>
          <Col><Item /></Col>
          <Col><Item /></Col>
          <Col><Item /></Col>
          <Col><Item /></Col>
        </Row>
      </Container>
    )
  }
}

export default Books;
