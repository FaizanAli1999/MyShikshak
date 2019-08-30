import React, { Component } from 'react';
import {  Col, Row, Card, CardBody  } from 'reactstrap';
import { ProgressBar } from 'react-bootstrap';
import './Review.css';

class Review extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card className="shadow">
                    <CardBody>
                        <br/>
                        <h1 className="text-center">Your Reviews</h1>
                        <br/>
                        <br/>
                        <br/>
                        <Col xs="12" sm="12" lg="12" className="text-center">
                            User Rating
                            <span className="fa fa-star  text-warning pl-2"></span>
                            <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star "></span>
                            <br/>
                            4 average based on 3 ratings
                        </Col>
                        <hr/>
                        <br/>
                        <Row>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                               <span className="Font"> 5 Star</span>
                            </Col>
                            <Col xs="8" sm="8" lg="8">
                                <ProgressBar variant="success" now={33} />
                            </Col>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                                <span className="Font">1</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                               <span className="Font"> 4 Star</span>
                            </Col>
                            <Col xs="8" sm="8" lg="8">
                            <br/>
                                <ProgressBar variant="Primary" now={33} />
                            </Col>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                            <span className="Font">1</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                               <span className="Font"> 3 Star</span>
                            </Col>
                            <Col xs="8" sm="8" lg="8">
                            <br/>
                                <ProgressBar variant="info" now={33} />
                            </Col>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                                <span className="Font">1</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                               <span className="Font"> 2 Star</span>
                            </Col>
                            <Col xs="8" sm="8" lg="8">
                            <br/>
                                <ProgressBar variant="warning" now={0} />
                            </Col>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                                <span className="Font">0</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                               <span className="Font"> 1 Star</span>
                            </Col>
                            <Col xs="8" sm="8" lg="8">
                            <br/>
                                <ProgressBar variant="danger" now={0} />
                            </Col>
                            <Col xs="2" sm="2" lg="2" className="text-center">
                            <br/>
                                <span className="Font">0</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" lg="12" className="text-center">
                                <br/>
                                <br/>
                                <h2 className="text-center">Kunal Yadav</h2>
                                <br/>
                                <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star  text-warning"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                            <br/>
                            <br/>
                            <span className="text">hello</span>
                            <br/>
                            <br/>
                            </Col>
                            <hr/>
                            <br/>
                            <br/>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Review;