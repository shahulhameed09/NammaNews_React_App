import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg='dark' data-bs-theme="dark" sticky='top' >
        <Container fluid className="align-items-baseline">
          <Navbar.Brand href="#">Namma News</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='m-2 text-decoration-none text-muted' to="/" >General</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/business" >Business</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/entertainment" >Entertainment</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/health" >Health</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/science" >Science</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/sports" >Sports</Link>
              <Link className='m-2 text-decoration-none text-muted' to="/technology" >Technology</Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;