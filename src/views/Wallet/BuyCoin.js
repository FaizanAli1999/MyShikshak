import React, { Component } from 'react';
import {  Col, Row, Card, CardBody } from 'reactstrap';
import './earning.css';
class BuyCoin extends Component {
    render() {
        return (
            <div className="animated fadeIn">
              <Card>
                <CardBody>
                  <h1 className="text-center">Buy Coins</h1>  
                  <br/>
                  <br/>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        Coins
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        Price
                      </Col>
                  </Row>
                  <hr/>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        85
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                      ₹ 89
                      </Col>
                  </Row>
                  <hr/>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                     +₹ 16.02(18% GST)
                      </Col>
                  </Row>
                  <hr/>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                      ₹ 105.02 Total
                      </Col>
                  </Row>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        <hr/>
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                      
                      </Col>
                      <br/>
                  </Row>
                  <Row>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        <label>
                          Coupon Code
                        </label>
                        <input type="text" name='coupon' className="border-top-0 border-left-0 border-right-0 form-control"/>
                      </Col>
                      <Col xs="6" sm="6" lg="6" className="text-center">
                        <br/>
                      <button className="btn-primary  btn-md form-control btn-rounded shadow">ADD DISCOUNT COUPON</button>
                      </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="12" lg="12" className="text-center">
                      <br/>
                      <br/>
                      <button className="btn btn-md button1 text-white shadow">PAY NOW</button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>  
            </div>
        );
    }
}

export default BuyCoin;