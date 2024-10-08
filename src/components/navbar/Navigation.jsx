import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import { useState } from "react";


const Navigation = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  
setTimeout(() => {
    const currentTime = new Date()
    setTime(currentTime.toLocaleTimeString())
  }, 1000);

  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand><NavLink className="my-name" to="/">Michael</NavLink></Navbar.Brand>
          <p className="time">{time}</p>
          <Nav className="d-none d-md-flex flex-row links">
          <NavLink className="list" to="/">Start</NavLink>
            <NavLink className="list" to="/about">Über mich</NavLink>
            <NavLink className="list" to="/workbackground">Werdegang</NavLink>
            <NavLink className="list" to="/abilities">Fähigkeiten</NavLink>
            <NavLink className="list" to="/projects">Projekte</NavLink>
            <NavLink className="list" to="/contact-me">Kontakt</NavLink>
          </Nav>
          <DropdownButton
            className="dropdown d-sm-flex d-md-none"
            id="dropdown-item-button"
            title={<i className="fa-solid fa-bars"></i>}
          >
            <NavLink className="links" to="/"><Dropdown.Item as="button">Start</Dropdown.Item></NavLink>
            <NavLink className="links" to="/about"><Dropdown.Item as="button">Über mich</Dropdown.Item></NavLink>
            <NavLink className="links" to="/workbackground"><Dropdown.Item as="button">Werdegang</Dropdown.Item></NavLink>
            <NavLink className="links" to="/abilities"><Dropdown.Item as="button">Fähigkeiten</Dropdown.Item></NavLink>
            <NavLink className="links" to="/projects"><Dropdown.Item as="button">Projekte</Dropdown.Item></NavLink>
            <NavLink className="links" to="/contact-me"><Dropdown.Item as="button">Kontakt</Dropdown.Item></NavLink>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;