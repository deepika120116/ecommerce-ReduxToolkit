import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar=()=>{

    const cartList=useSelector(state=>state.cart);
    return(


        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">React Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end"  >
          <Nav.Link to="/cart" as={Link} style={{paddingRight:"50px"}}>Cart {cartList.length}</Nav.Link >
          </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
};
export default NavBar;