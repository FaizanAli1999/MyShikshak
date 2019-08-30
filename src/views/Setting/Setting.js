import React, { Component } from 'react';
import {  Col, Row, Card, CardBody  } from 'reactstrap';
import './Setting.css';
class Setting extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card className="shadow">
                    <CardBody>
                      <h3 className="text-center">Change Password</h3>
                      <br/>
                      <br/>
                      <Row>
                        <Col xs="1" sm="1" lg="1" className="text-center">
                            <br/>
                          <h1 className="text"><i className="fa fa-lock prefix grey-text"></i></h1>  
                        </Col>
                        <Col xs="11" sm="11" lg="11">
                            <label className="text Font">
                                Current Password
                            </label>
                            <input type="text" name="CurrentPassword" className="border-top-0 border-left-0 border-right-0 form-control"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1" sm="1" lg="1" className="text-center">
                            <br/>
                            <br/>
                          <h1 className="text"><i className="fa fa-lock prefix grey-text"></i></h1>  
                        </Col>
                        <Col xs="11" sm="11" lg="11">
                            <label className="text Font">
                                <br/>
                                New Password
                            </label>
                            <input type="text" name="NewPassword" className="border-top-0 border-left-0 border-right-0 form-control"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1" sm="1" lg="1" className="text-center">
                            <br/>
                            <br/>
                          <h1 className="text"><i className="fa fa-lock prefix grey-text"></i></h1>  
                        </Col>
                        <Col xs="11" sm="11" lg="11">
                            <label className="text Font">
                                <br/>
                                Confirm New Password
                            </label>
                            <input type="text" name="ConfirmNewPassword" className="border-top-0 border-left-0 border-right-0 form-control"/>
                        </Col>
                      </Row>
                      <Row>
                          <Col xs="12" sm="12" lg="12" className="text-center">
                              <br/>
                              <br/>
                              <button className="btn btn-md shadow button1 text-white px-5">UPDATE</button>
                          </Col>
                      </Row>
                    </CardBody>   
                </Card> 
            </div>
        );
    }
}

export default Setting;