import React, { Component } from 'react';
import {  Card, CardBody, Col, Row  } from 'reactstrap';
import {  Link } from 'react-router-dom';
import './earning.css';

class Earning extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <br/>
                <h1 className="text-center">Earnings and Securities</h1>
                <Row>
                <Col xs="12" sm="12" lg="6">
                    <br/>
                    <br/>
                    <h2 className="text-center">Security Amount</h2>
                    <br/>
                    <Card className="shadow">
                        <CardBody>
                            <h3>Abhyodaya Test| 6 July, 2019</h3>
                            <hr/>
                            <Row>
                            <Col xs="6" sm="6" lg="6">  
                            <b className="text">Total Amount : </b>₹ 5000 <br/>
                            <b className="text">Discount : </b>₹ 0 <br/>
                            <b className="text">Service Charge : </b>₹ 2500 <br/>
                            <b className="text">GST : </b>₹ 450 <br/>
                            <b className="text">Redeemable Amount : </b>₹ 3525 <br/>
                          </Col>
                          <Col xs="6" sm="6" lg="6">
                              <button className="btn btn-md btn-primary">REDEEM SECURITY</button>
                              <br/>
                              <br/>
                            <Link to="/RunningTutions">  <button className="btn btn-md btn-primary">SEE TUTIONS</button></Link>
                          </Col>
                          </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" lg="6">
                    <br/>
                    <br/>
                    <h2 className="text-center">Redeemed Amount</h2>
                    <br/>
                    <Card className="shadow">
                        <CardBody>
                            <h3>Kunal Yadav | 17 August, 2018</h3>
                            <hr/>
                            <Row>
                            <Col xs="6" sm="6" lg="6">  
                            <b className="text">Total Amount : </b>₹ 9000 <br/>
                            <b className="text">Discount : </b>₹ 100 <br/>
                            <b className="text">Service Charge : </b>₹ 4400 <br/>
                            <b className="text">GST : </b>₹ 792 <br/>
                            <b className="text">Redeemable Amount : </b>₹ 6363 <br/>
                          </Col>
                          <Col xs="6" sm="6" lg="6">
                            <b className="text-success">Redeemed Date: </b><span className="text-success"> 19 February,2019</span> <br/>
                            <b className="text">Transfer Transaction id : </b> TTTT-1550612850911 <br/>
                            <Link to="/Tutioninfo">  <button className="btn btn-md btn-primary">SEE TUTIONS</button></Link>
                          </Col>
                          </Row>
                        </CardBody>
                    </Card>
                </Col>
        </Row>
            </div>
        );
    }
}

export default Earning;