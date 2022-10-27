import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
//3.create one row and two colums 
const Main = () => {
    return (
            <Container>
            <Header></Header>
            <div className='col-lg-12'>
                <Row>
                <Col lg="2" className='col-sm-12' style={{backgroundColor:'#A9A9A9'}}>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="10" className='col-sm-12' style={{backgroundColor:'#808080'}}>
                <Outlet></Outlet>
                </Col>
            </Row>
           
            
        
        </div>
        </Container>
    );
};

export default Main;