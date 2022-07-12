import '../styles/navbar.css'
import { Nav, Navbar as NV, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = {
  link: {
    textDecoration: "none",
    color:"white"
  },
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(document.body.getBoundingClientRect().top > scrollPosition);
      setScrollPosition(document.body.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    // <Navbar collapseOnSelect expand={true}>
    <>
      <NV
        collapseOnSelect
        expand="lg"
        className={`${showNavbar ? "active" : "hidden"}`}
      >
        <Link to="/">
          <Nav.Link href="#home">
            <NV.Brand
              style={{
                display: "flex",
                padding: "0.3rem",
                marginTop: "0.3rem",
                color: "var(--brand)",
              }}
            >
              {/* <img className={"navLogo"} src={logo}  /> */}
              <p style={{ marginLeft: "10px", marginTop: "5px" }}>The variable design</p>
            </NV.Brand>
          </Nav.Link>
        </Link>

        <NV.Toggle aria-controls="responsive-navbar-nav" />

        <NV.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={styles.link}>
              <Nav.Link href="#home">HOME</Nav.Link>
            </Link>

            <Link to="/services" style={styles.link}>
              <Nav.Link href="#services">SERVICES</Nav.Link>
            </Link>
            <Link to="/plans" style={styles.link}>
              <Nav.Link href="#plan">PLAN</Nav.Link>
            </Link>
            <Link to="/about" style={styles.link}>
              <Nav.Link href="#about">ABOUT</Nav.Link>
            </Link>
            <Link to="/policy" style={styles.link}>
              <Nav.Link href="/policy">POLICY</Nav.Link>
            </Link>
            <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
              {/* {ServicesData.map((service) => (
                <Link
                  currentPath="/services"
                  to={`/services/${service.id}`}
                  style={styles.link}
                  key={service.id}
                >
                  <NavDropdown.Item key={service.id} href={service.id}>
                    {service.name}
                  </NavDropdown.Item>
                </Link>
              ))} */}
            </NavDropdown>
            <Link to="/contact" style={styles.link}>
              <Nav.Link href="#blogs">CONTACT</Nav.Link>
            </Link>
          </Nav>
        </NV.Collapse>
      </NV>
    </>
  );
};

export default Navbar;
