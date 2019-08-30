import React, { Component } from 'react';
import { Card, CardBody , Row, Col, CardFooter } from 'reactstrap';
import {  Link } from 'react-router-dom';
import './Closedjobs.css';



class Closedjobs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
       <h1 className="text-center text-dark">Closed Jobs</h1>
       <Row>
            <Col xs="4" sm="4" lg="4">
                <br/>
                <br/>
                <Card className="shadow">
                    <CardBody>
                        <h4>Kunal Yadav, Engineering/Medical | Physics (JEE ADVANCE)</h4>
                        <hr/>
                        <b className="text1">Location:</b> 250001
                        <br/>
                        <b className="text1">Area:</b> MIET College, Pandav Nagar, Meerut, Uttar Pradesh, India,.
                        <br/>
                        <b className="text1">Tution Type:</b> Tutor's Home
                        <br/>
                        <b className="text1">Monthly Fees:</b> ₹ 10000
                        <br/>
                        <b className="text1">Session Count:</b> Everyday except Saturday, Sunday (20 Sessions in a Month)
                        <br/>
                        <b className="text1">Session Duration:</b> 1 hour
                        <br/>
                        <br/>
                      <Link to="/Tutioninfo">  <button className="btn btn-primary form-control shadow">SEE MORE DETAILS</button></Link>
                    </CardBody>
                    <CardFooter className="bg-primary text-white text-center">Started on: 11 September,2018</CardFooter>
                    <CardFooter className="bg-dark ext-white text-center">Closed on: 28 October,2018</CardFooter>
                </Card>
            </Col> 
       </Row>
      </div>
    );
  }
}

export default Closedjobs;
