import React, { Component } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, Form, FormGroup, Input } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Bookstore</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={NavLinkRouter} exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavLinkRouter} to="/books" activeClassName="active">Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavLinkRouter} to="/authors" activeClassName="active">Authors</NavLink>
              </NavItem>

              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="password" name="password" id="examplePassword" placeholder="Your Password" />
                </FormGroup>
                <Button color="success">Submit</Button>
              </Form>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
