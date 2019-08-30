import React, { Component} from 'react';

import { Row, Col } from 'reactstrap'

import { Card, CardBody,CardHeader, CardFooter} from 'reactstrap';
import {  NavLink } from 'react-router-dom';

 class Calender extends Component{
     constructor(props){
         super(props);

         
 



     }
     
     render (){
         
         return(
            
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
     <h6> <NavLink to="/Assignment2" className="nav-link text-white px-3">ASSINGNMENTS/WORKSHEETS</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Performance2" className="nav-link text-white px-3">PERFORMANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2xfa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Complaint2" className="nav-link text-dark px-3">COMPLAINTS</NavLink></h6>
    </li>
  </ul>

                         </CardHeader>
                     </Card>
                     <div className="animated fadeIn">
                     <CardBody className="bg-white">
                        <Col xs="12" sm="12" lg="12">
                            <br/>
                            <h2 className="text-center">
                                Complaints
                            </h2>
                            <hr/>
                            <Card className="shadow">
                                <CardBody>
                                    <h3>Test</h3>
                                    <hr/>
                                    Development <br/>
                                    Status : Maintain
                                </CardBody>
                                <CardFooter className="bg-primary text-white text-center">
                                    Filed on : 6 October, 2018
                                </CardFooter>
                            </Card>
                            <br/>
                            <Card classNam="shadow">
                                <CardBody>
                                    <h3>xoxo</h3>
                                    <hr/>
                                    xoxo <br/>
                                    Status : Pending
                                </CardBody>
                                <CardFooter className="bg-primary text-white text-center">
                                    Filed on : 6 October, 2018
                                </CardFooter>
                            </Card>
                            <br/>
                            <br/>
                        </Col>
                     </CardBody>
                     </div>
                 </Col>
             
         );
     }
 }
 export default Calender;