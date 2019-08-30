import React, { Component} from 'react';

import { Row, Col } from 'reactstrap'

import { Card, CardBody,CardHeader} from 'reactstrap';
import {  NavLink } from 'react-router-dom';

 class Calender extends Component{
     constructor(props){
         super(props);

         
 



     }
     
     render (){
         
         return(
             <div className="animated-fadeIn">
                 <Col xs="12" sm="12" lg="12">
                     <Card className="shadow">
                         <CardHeader className="bg-primary text-white">
                         <ul className="nav nav-tabs card-header-tabs text-center">
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    <h6> <NavLink to="/Tutioninfo" className="nav-link text-white px-3" >TUTION INFO</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Attendance2" className="nav-link text-white px-3">ATTENDANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Calendar2" className="nav-link text-white px-3"> CALENDER</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-files-o fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Assignment2" className="nav-link text-dark px-3">ASSINGNMENTS/WORKSHEETS</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Performance2" className="nav-link text-white px-3">PERFORMANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2xfa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Complaint2" className="nav-link text-white px-3">COMPLAINTS</NavLink></h6>
    </li>
  </ul>

                         </CardHeader>
                     </Card>
                     <CardBody className="bg-white">
                    <Col xs="12" sm="12" lg="12">
                        <br/>
                        <h2>Assignments</h2>
                        <hr/>
                        <Row>
                            <Col xs="6" sm="6" lg="3">
                                <Card className="shadow">
                                    <CardBody>
                                        <h6>xoxo</h6>
                                        xxxxxxx
                                        <br/>
                                        <b>Deadeline:</b> 9 October, 2018
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6" sm="6" lg="3">
                                <Card className="shadow">
                                    <CardBody>
                                        <h6>Captain America</h6>
                                        Complete it.
                                        <br/>
                                        <b>Deadeline:</b> 10 October, 2018
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                    </Col>
                     </CardBody>
                 </Col>
             </div>
         );
     }
 }
 export default Calender; 