import React, { Component } from 'react';
import {  Card, CardBody, CardFooter, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './current.css';
class Currentjobs extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Col xs="12" sm="12" lg="12">
          <br/>
          <h1 className="text2 text-center">Current Jobs</h1>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <br/>
              <br/>
              <Card className="shadow">
                <CardBody>
                   <h4>Abhyodaya test , Middle (6-8) | Science</h4>
                   <hr/>  
                   <b className="text2">Area:</b> 16th Ave, J Block, Gaur City 2, Chipnaya Khrud Urf Tigri, Uttar Pradesh 201009, India
                   <br/>
                   <b className="text2">Tution Type:</b>Student's Home
                   <br/>
                   <b className="text2">Monthly Fees:</b> ₹ 5000
                   <br/>
                   <b className="text2">Session Count:</b>Alternate Days (12 Sessions in a Month)
                   <br/>
                   <b className="text2">Session Duration</b>1.5 hours
                   <br/>
                   <br/>
                  <Link to="/RunningTutions"> <button className="btn btn-md btn-primary shadow form-control">SEE MORE DETAILS</button></Link>
                </CardBody>
                <CardFooter className="bg-dark text-white text-center">Started on: 24July,2019</CardFooter>
              </Card>
              
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Currentjobs;
