import React, { Component } from 'react';
import {  Col, Row, Card,  } from 'reactstrap';
import {  Link } from 'react-router-dom';
import './earning.css';
class Coins extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <br/>
                <h1 className="text-center">Our Pricing Plans</h1>
                <br/>
                <Row>
                    <Col xs="12" sm="12" lg="3">
                        <Card className="shadow">
                            <br/>
                            <h5 className="text-center">2 coins</h5>
                            <br/>
                            <Row>
                            <Col xs="3" sm="3" lg="3"></Col>
                            <Col xs="6" sm="6" lg="6">
                            <Card className="text-center rounded-circle ">
                           <h1><i className="fa fa-bar-chart light-blue-text text-primary mt-3 mb-3"></i></h1> 
                            </Card>
                            </Col>
                            </Row>
                            <h2 className="text-center">₹ 89</h2>
                            <span className="text-center text">Coins: 2</span>
                            <br/>
                            <span className="text-center text">Validity: 4 Days</span>
                            <br/>
                            <Col xs="12" sm="12" lg="12" className="text-center">
                          <Link to="/BuyCoin">  <button className="btn btn-primary btn-rounded ">BUY NOW</button></Link>
                            
                            </Col>
                            <br/>
                            <br/>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Card className="shadow">
                            <br/>
                            <h5 className="text-center">25 coins</h5>
                            <br/>
                            <Row>
                            <Col xs="3" sm="3" lg="3"></Col>
                            <Col xs="6" sm="6" lg="6">
                            <Card className="text-center rounded-circle ">
                           <h1><i className="fa fa-bar-chart light-blue-text text-primary mt-3 mb-3"></i></h1> 
                            </Card>
                            </Col>
                            </Row>
                            <h2 className="text-center">₹ 500</h2>
                            <span className="text-center text">Coins: 25</span>
                            <br/>
                            <span className="text-center text">Validity: 30 Days</span>
                            <br/>
                            <Col xs="12" sm="12" lg="12" className="text-center">
                            <button className="btn btn-primary btn-rounded ">BUY NOW</button>
                            
                            </Col>
                            <br/>
                            <br/>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Card className="shadow">
                            <br/>
                            <h5 className="text-center">50 coins</h5>
                            <br/>
                            <Row>
                            <Col xs="3" sm="3" lg="3"></Col>
                            <Col xs="6" sm="6" lg="6">
                            <Card className="text-center rounded-circle ">
                           <h1><i className="fa fa-bar-chart light-blue-text text-primary mt-3 mb-3"></i></h1> 
                            </Card>
                            </Col>
                            </Row>
                            <h2 className="text-center">₹ 1000</h2>
                            <span className="text-center text">Coins: 50</span>
                            <br/>
                            <span className="text-center text">Validity: 30 Days</span>
                            <br/>
                            <Col xs="12" sm="12" lg="12" className="text-center">
                            <button className="btn btn-primary btn-rounded ">BUY NOW</button>
                            
                            </Col>
                            <br/>
                            <br/>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Card className="shadow">
                            <br/>
                            <h5 className="text-center">100 coins</h5>
                            <br/>
                            <Row>
                            <Col xs="3" sm="3" lg="3"></Col>
                            <Col xs="6" sm="6" lg="6">
                            <Card className="text-center rounded-circle ">
                           <h1><i className="fa fa-bar-chart light-blue-text text-primary mt-3 mb-3"></i></h1> 
                            </Card>
                            </Col>
                            </Row>
                            <h2 className="text-center">₹ 2000</h2>
                            <span className="text-center text">Coins: 100</span>
                            <br/>
                            <span className="text-center text">Validity: 60 Days</span>
                            <br/>
                            <Col xs="12" sm="12" lg="12" className="text-center">
                            <button className="btn btn-primary btn-rounded ">BUY NOW</button>
                            
                            </Col>
                            <br/>
                            <br/>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Coins;