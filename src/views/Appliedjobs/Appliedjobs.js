import React, { Component } from 'react';
import {  Card, CardBody,CardFooter, Col, Row } from 'reactstrap';
import './Appliedjobs.css';
class Appliedjobs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      <Col xs="12" sm="12" lg="12">
        <br/>
     <h1 className="text-center heading">Applied Jobs</h1>
     <Row>
       <Col xs="6" sm="6" lg="6">
         <br/>
         <br/>
         <Card className="shadow">
           <CardBody>
             <h4>Kunal Yadav Primary (1-5) | All Subjects</h4>
             <hr/>
             <b className="text1">Tution Type:</b> Your Home
             <br/>
             <b className="text1">Monthly Fees:</b> ₹ 8000
             <br/>
             <b className="text1">Area:</b> MIET College, Meerut , Uttar Pradesh , India
             <br/>
             <b className="text1">Session Count;</b> Twice in a week ( 8  sessioon in a month)
             <br/>
             <b className="text1">Preffered Timing:</b> 02:00 PM
             <br/>
             <b className="text1">Gender Prefrence:</b> Any
             <br/>
             <b className="text1">Tutors Applied:</b> 2
             <br/>
             <b className="text1">Session Duration:</b> 1 Hour
           </CardBody>
           <CardFooter className="bg-dark text-white text-center">
                Closed
           </CardFooter>
         </Card>
       </Col>
     </Row>
     </Col>
     </div>
    );
  }
}

export default Appliedjobs;
