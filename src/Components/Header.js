import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render(){
        return(
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  Github Searcher
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
             <NavItem href="#">Login</NavItem>
              </Nav>
            </Navbar>
          );
        }
      }
      
      export default Header;