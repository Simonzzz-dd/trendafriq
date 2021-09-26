import { Navbar, Container, Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ripple from 'material-ripple-effects';
import { Link } from 'react-router-dom';




const S1NavBar = () => {
    const ripple = new Ripple();

    function rippleEF ( e ) {
        ripple.create(e, 'dark')
    }
    return ( 
      <Navbar collapseOnSelect expand="lg" style={{border:"0"}}  variant="light">
        <Container>
        <Navbar.Brand  style={{color: "#44546cd2"}} onClick={rippleEF}>
          <Link className="prompt" to="/"> TRENDAFRIQ </Link> 
        </Navbar.Brand>
        <Navbar.Toggle onClick={rippleEF} aria-controls="responsive-navbar-nav" style={{border: "none"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{margin: "0 auto"}} >
            <Link className="a"  onClick={rippleEF} to="/Progects">Our Projects</Link>

          </Nav>
          <Nav>
            <Link className="a mr"  onClick={rippleEF} to="/about">About</Link>
            <Link className="a"  onClick={rippleEF} to="/contactUs"> Contact US</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default S1NavBar;




