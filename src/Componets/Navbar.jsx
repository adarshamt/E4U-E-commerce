import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { FcApproval } from 'react-icons/fc';


function Navbars() {

  const nav = useNavigate()

  const data= useSelector(state=>state.E4U_slice)
  return (
    <Navbar bg='primary' expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{color:'white'}} href="#">U4_ME</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form style={{alignItems:'center'}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
              <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
             <Button onClick={()=>nav('/login')} style={{display:'flex',textAlign:'center',width:'150px',height:'40px',justifyContent:'space-around',alignItems:'center'}} >

              <FaUserCircle style={{fontSize:'30px'}} />
              {(data==false)?
              <p>Sign In</p> : <p>Active<FcApproval/> </p> }

             </Button>

              </div>

          </Form>
        
        
     
         
        
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;