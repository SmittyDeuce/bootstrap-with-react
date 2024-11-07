import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import error404 from '../assets/error404.png';


const NotFound = () => {
    return (
        <Container className="text-center mt-5">
            {/* Row to structure the image and text in a responsive grid layout */}
            <Row className="justify-content-center align-items-center">
                
                {/* Column for the image */}
                <Col md={6} lg={4} className="mb-4">
                    <Image 
                        src={error404} 
                        alt="Page not found illustration" 
                        fluid 
                        rounded 
                        className="mb-3" 
                    />
                </Col>
                
                {/* Column for the error message and navigation */}
                <Col md={6} lg={5} className="text-center text-md-left">
                    <h1 className="display-4 text-danger">404</h1>
                    <h3 className="mb-3">Oops! Page Not Found</h3>
                    <p className="text-muted">
                       let's get you back on track!
                    </p>
                    
                    {/* NavLink for navigation back to the homepage */}
                    <Nav.Link href="/" className="p-0">
                        <Button variant="primary" className="mt-3 shadow-sm">
                            Go to Homepage
                        </Button>
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
