import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Card, Form, Image  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import hornetsLogo from '../assets/hornetsLogo.png';


const HomePage = () => {
    const navigate = useNavigate()

    const goToNotFound = () => {
        navigate("/404"); 
    }

    return (
        <Container id="container" className="d-flex flex-column align-items-center">
            <h1>Welcome to the Hive Store</h1>
            <p>Discover amazing products at great prices!</p>

            {/* Shop Now Button */}
            <Button id="shop-now-button" variant="primary" onClick={goToNotFound} type="submit" class="shadow-lg p-3 mb-5 bg-white rounded">
                Shop Now
            </Button>

            {/* Featured Products Card */}
            <Card style={{ width: '100%', maxWidth: '500px' }} className="mt-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Featured Products</Card.Title>
                    <Card.Text>
                        Check out our top-rated products that our Fans love!
                    </Card.Text>
                    <Button variant="secondary" onClick={goToNotFound}>View Products</Button>
                </Card.Body>
            </Card>
            <Image 
                src={hornetsLogo} 
                alt="Hornets Logo" 
                fluid 
                className="rounded mx-auto d-block mt-4"
            />


        </Container>
    );
}

export default HomePage;
