import React, { Component } from 'react';
import {  Col, Row, Card,  } from 'reactstrap';
import {  Link } from 'react-router-dom';
class Wallet extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <h1 className="text-center text-dark">Wallet</h1>
          <br/>
          <Row>
            <Col xs="12" sm="12" lg="6">
           <Card className="shadow">
             <Row>
             <Col xs="3" sm="3" lg="3" className="bg-primary"><br/><br/>
            <h1 className="text-center"> <i className="fa fa-money primary-color" /></h1>
             </Col>
             <Col xs="9" sm="9" lg="9">
               <Row>
              <Col xs="6" sm="6" lg="6">
              </Col>
              <Col xs="6" sm="6" lg="6">
                <br/>
                <h6>TOTAL REDEEMABLE AMOUNT</h6>
                <h2>₹ 59320.42</h2>
              </Col>
              <Col xs="12" sm="12" lg="12" className="">
                <br/>
               <Link to="/Earning"> <button className="btn btn-sm btn-primary shadow ml-5">SEE PAYMENT HISTORY</button></Link>
                <br/>
                <br/>
              </Col>
              </Row>
              </Col>
             </Row>
           </Card>
            </Col>
            <Col xs="12" sm="12" lg="6">
           <Card className="shadow">
             <Row>
             <Col xs="3" sm="3" lg="3" className="bg-primary"><br/><br/>
            <h1 className="text-center"> <i className="fa fa-money primary-color" /></h1>
             </Col>
             <Col xs="9" sm="9" lg="9">
               <Row>
              <Col xs="6" sm="6" lg="6">
              </Col>
              <Col xs="6" sm="6" lg="6">
                <br/>
                <h6>TUTOR WALLET</h6>
                <br/>
                <h4>Your Balance Here</h4>
              </Col>
              <Col xs="12" sm="12" lg="12" className="">
                
                <br/>
                <button className="btn btn-sm btn-primary shadow ml-5">COMMING SOON</button>
                <br/>
                <br/>
              </Col>
              </Row>
              </Col>
             </Row>
           </Card>
           </Col>
          </Row>
          <Row>
          <Col xs="12" sm="12" lg="6">
           <Card className="shadow">
             <Row>
             <Col xs="3" sm="3" lg="3" className="bg-warning"><br/><br/>
            <h1 className="text-center"> <i className="fa fa-credit-card warning-color"></i></h1>
             </Col>
             <Col xs="9" sm="9" lg="9">
               <Row>
              <Col xs="6" sm="6" lg="6">
              </Col>
              <Col xs="6" sm="6" lg="6">
                <br/>
                <h6 className="ml-5">Coins</h6>
                <h2 className="ml-5">0</h2>
              </Col>
              <Col xs="12" sm="12" lg="12" className="ml-5">
                <br/>
               <Link to="/Coins"> <button className="btn btn-sm btn-warning shadow text-white ">BUY COINS</button></Link>
                <br/>
                <br/>
              </Col>
              </Row>
              </Col>
             </Row>
           </Card>
            </Col>
            <Col xs="12" sm="12" lg="6">
           <Card className="shadow">
             <Row>
             <Col xs="3" sm="3" lg="3" className="bg-warning"><br/><br/>
            <h1 className="text-center"> <i className="fa fa-credit-card warning-color"></i></h1>
             </Col>
             <Col xs="9" sm="9" lg="9">
               <Row>
              <Col xs="6" sm="6" lg="6">
              </Col>
              <Col xs="6" sm="6" lg="6">
                <br/>
                <h6 className="ml-5">Coins Validity</h6>
                <br/>
                <h6 className="">Fri Aug 09 2019 5:0:0 PM</h6>
              </Col>
              <Col xs="12" sm="12" lg="12" className="">
                <br/>
                <button className="btn btn-sm btn-warning shadow ml-5 text-white">SEE PAYMENT HISTORY</button>
                <br/>
                <br/>
              </Col>
              </Row>
              </Col>
             </Row>
           </Card>
            </Col> 
          </Row>
      </div>
    );
  }
}

export default Wallet;
