import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Game Night</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Game Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>My Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Add New Game</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>My Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
