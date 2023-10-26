import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import './Plans.css'; // Import your custom styles
import { Link } from "react-router-dom"
import StripeCheckout from 'react-stripe-checkout'; 

const cardStyle = {
    margin: '20px',
};

const Plans = () => {
    return (
        <Container>
            <div>
            <h1 className="word-art-heading">MEMBERSHIP OPTIONS</h1>
                <Card.Group>
                    <Card style={cardStyle}>
                        <Card.Content>
                        <h3 className="custom-card-header" style={{ fontWeight: 900, fontSize: '2.75rem' }}>Free Plans</h3>
                            <Card.Description style={{ textAlign: 'inherit' }}>Free Subscription <br />$0</Card.Description>
                            <ul>
                                <li>&#10003; 500 Request</li>
                                <li>&#10003; Limited Projects</li>
                                <li>&#10003; Extended Free Trial</li>
                                
                            </ul>

                            <Link to="https://buy.stripe.com/test_aEUaFa6vP1RXcqQ289">
                                <button className="custom-button">GET PLAN</button>
                            </Link>
                        </Card.Content>
                    </Card>
                    <Card style={cardStyle}>
                        <Card.Content>
                        <h3 className="custom-card-header1" style={{ fontWeight: 900, fontSize: '2.75rem' }}>Premium Plans</h3>
                            <Card.Description style={{ textAlign: 'inherit' }}>Premium Subscription Plan <br/>$99 </Card.Description>
                            <ul>
                                <li>&#10003; Unlimited Request</li>
                                <li>&#10003; Unlimited Projects</li>
                                <li>&#10003; Extended Study Plan</li>
                                
                            </ul>

                            <Link to="https://buy.stripe.com/test_6oE8x2g6peEJ2QgfYY">
                                <button className="custom-button1">GET PLAN</button>
                            </Link>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        </Container>
    );
};

export default Plans;


