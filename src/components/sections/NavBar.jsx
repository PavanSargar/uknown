import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar className={styles.navbar} variant="dark" expand="lg">
      <Container className={styles["navbar-container"]}>
        <Navbar.Brand href="#home">
          <Image src="/logo.png" className={styles["brand-logo"]} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse collapseOnSelect>
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link href="#roadmap" className={styles["nav-link"]}>
              Roadmap
            </Nav.Link>
            <Nav.Link href="#faqs" className={styles["nav-link"]}>
              FAQs
            </Nav.Link>
            <Nav.Link href="#contact" className={styles["nav-link"]}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
