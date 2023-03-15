import React from "react"

import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="liight"  bg="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <div class="topnav-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/#home">
    
      </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto me-auto"activeKey={pageInfo && pageInfo.pageName}>
            <a href="/#home" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Home
              </Nav.Link>
            </a>
            <NavDropdown title="Produk" id="basic-nav-dropdown" aria-haspopup="true" aria-expanded="false">
          <NavDropdown.Item href="/H_Arkhakandara">Arkha Kandara</NavDropdown.Item>
          <NavDropdown.Item href="/H_CentralParkTownhouse">H_Central Park Townhouse</NavDropdown.Item>
          <NavDropdown.Item href="/H_Kandara">Kandara Village</NavDropdown.Item>
          <NavDropdown.Item href="/H_Mezzanine">Mezzanine Adara</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
            <a href="/#about" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Profit
              </Nav.Link>
            </a>
          </Nav>
 
        </Navbar.Collapse>
        </div>
        {/* </Container> */}
      </Navbar>
      
    </>
  )
}

export default CustomNavbar
