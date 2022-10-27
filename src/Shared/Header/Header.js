import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import images1 from '../../picture/images1.jpg';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//11 now at header or anywhere else:use useContext hooks 
const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then( () =>{})
    .catch(error=>console.error(error))
  }
    return (
        <Navbar collapseOnSelect style={{backgroundColor:'#B0C4DE'}} className='mb-4 ' expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src={images1}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Programming-Languages-Assign
            
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <ButtonGroup aria-label="Basic example">
      <Button variant="dark">Dark-Theme</Button>
      <Button variant="light">Light-Theme</Button>
      
    </ButtonGroup>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>Courses</Nav.Link>
            <Nav.Link href="#deets">FAQ</Nav.Link>
            <Nav.Link as={Link} to ='/blog'>Blog</Nav.Link>
            <>
              {
                user?.uid ?
                <>
                <Nav.Link><span>{user?.displayName}</span></Nav.Link>
                <Nav.Link><Button variant='info' onClick={handleLogOut}>Log Out</Button></Nav.Link>
                </>
                :
                <>
                    <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to ='/register'>Register</Nav.Link>
                </>
              }
            </>
            <Nav.Link  href="#memes">
              {user?.photoURL ?
             
              <Image title={user?.displayName} style={{height:'40px'}} roundedCircle src={user?.photoURL} ></Image>
                :
               
                <FaUser></FaUser>
              
                
            }
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;