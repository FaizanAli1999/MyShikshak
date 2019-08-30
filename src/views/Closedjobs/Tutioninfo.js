import React, { Component} from 'react';

import { Row, Col } from 'reactstrap'

import { Card, CardBody,CardHeader} from 'reactstrap';
import {  NavLink } from 'react-router-dom';

 class RunningTutions extends Component{
     render (){
         return(
             
                 <Col xs="12" sm="12" lg="12">
                     <Card className="shadow">
                         <CardHeader className="bg-primary text-white">
                            <ul className="nav nav-tabs card-header-tabs text-center">
                                <li className="nav-item px-3 mt-3">
                                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                                    <h6> <NavLink to="/Tutioninfo" className="nav-link bg-white text-dark px-3" >TUTION INFO</NavLink></h6>
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
                                    <h6> <NavLink to="Complaint2" className="nav-link text-white px-3">COMPLAINTS</NavLink></h6>
                                </li>
                            </ul>
                         </CardHeader>
                         <div className="animated fadeIn">
                         <CardBody className="bg-white">
                            <Row>
                             <Col xs="12" sm="12" lg="4">
                                 <Card className="shadow">
                                     <CardHeader className="bg-secondary shadow">
                                        <h4 className="text-white text-center">Students's Info</h4>     
                                     </CardHeader>
                                     <CardBody>
                                         <Row>
                                            <Col xs="12" sm="12" lg="12" className="text-center">
                                                <img src="https://tutor.cdn.myshikshak.com/11e8a08ce16bbcc09713c51420190568/profile.jpeg?Expires=1566372239&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly90dXRvci5jZG4ubXlzaGlrc2hhay5jb20vMTFlOGEwOGNlMTZiYmNjMDk3MTNjNTE0MjAxOTA1NjgvcHJvZmlsZS5qcGVnIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY2MzcyMjM5fX19XX0_&Signature=jgCmLTe1obhyg6ViCObXyxvi7NDNlJ2VXC1N8VsN4RsfYTOLJw5xj3dLQEKjTTbiHq60mGAzsVZMvvLU-0GBkDyeOz0toIL9hwgDcSQYiCaXRf5keT95LBRqG6cb7TLmCWh0hkbZf5UzCPExCnBJ5JXkWLDwqFEovn4iZtPrXaYGuOMyb5-XO2ailtGptWydD7aqrdewxyeM-0dHpzLnzO9LDl6TwSDEmDWPrZ8gMR-uMC8nzUrMT8vtImEjr8MqBlOSLuvG7vySdsnWoOIjTBIrdI-2T36O5cBUF~uBoeM0St-LFvq7yLy4dTHFzOr9k8mjViChfGRpg~bXElhpXA__&Key-Pair-Id=APKAIRF7CXTDH4NUVFNQ" className="rounded-circle shadow" width="150" height="150" alt=""/>
                                            </Col>
                                         </Row>
                                         <Row>
                                             <Col xs="12" sm="12" lg="12">
                                                 <br/>
                                                 <br/>
                                                 <b>Name:</b> Kunal Yadav
                                                 <br/>
                                                 <b>Age:</b>30
                                                 <br/>
                                                 <b>Gender:</b> Male
                                                 <br/>
                                                 <b>Email:</b> abkunal@gmail.com
                                                 <br/>
                                                 <b>Contact:</b> 9045253310
                                                 <br/>
                                                 <b>Skypen Id:</b> Kunal.Yadav
                                                 <br/>
                                                 <b>Google Hangouts Email:</b> abkunal  @gmail.com
                                             </Col>
                                         </Row>
                                     </CardBody>
                                 </Card>
                              </Col>
                              <Col xs="12" sm="12" lg="8">
                                  <Card className="shadow">
                                      <CardHeader className="bg-secondary shadow">
                                          <h4 className="text-center text-white">Tution Details</h4>
                                      </CardHeader>
                                      <CardBody>
                                          <Row>
                                              <Col xs="6" sm="6" lg="6">
                                                  
                                                  <b>Subject:</b> Portuguese | Intermidiate (11-12)
                                              </Col>
                                              <Col xs="6" sm='6' lg="6">
                                                  
                                                  <b>House No. :</b> Military Dairy  Farm No-2, Babu Line Mawana Road
                                              </Col>
                                          </Row>
                                          <hr/>
                                          <Row>
                                              <Col xs="6" sm='6' lg="6">
                                                  
                                                  <b>Area:</b> MIET College, Meerut, Uttar Pradesh, India, Pandav Nagar
                                              </Col>
                                              <Col xs='6' sm="6" lg="6">
                                                  
                                                  <b>Landmark:</b> New Delhi , Delhi
                                              </Col>
                                          </Row>
                                          <hr/>
                                          <Row>
                                              <Col xs="6" sm="6" lg="6">
                                                  
                                                  <b>Session Count:</b> Everyday except Saturday, Sunday (20 sessions in a Month)
                                              </Col>
                                              <Col xs="6" sm="6" lg="6">
                                                  
                                                  <b>Session Duration:</b> 1 hours
                                              </Col>
                                          </Row>
                                          <hr/>
                                          <Row>
                                              <Col xs="6" sm="6" lg="6">
                                                  
                                                  <b>Tution Type:</b>Tutor's Home
                                              </Col>
                                              <Col xs="6" sm="6" lg="6">
                    
                                                  <b>Started Date:</b> 11 September, 2018
                                              </Col>
                                          </Row>
                                          <hr/>
                                          <Row>
                                              <Col xs="6" sm="6" lg="6">
                                                  <b>Fees:</b> 10000
                                              </Col>
                                              <Col xs="6" sm="6" lg="6">
                                                  <b>Tution Status:</b> <span className="text-danger">Closed</span>
                                              </Col>
                                          </Row>
                                          <hr/>
                                          <Row>
                                              <Col xs="6" sm="6" lg="6">
                                                  <b>Tution Closing Reason:</b> I have completed my learning
                                              </Col>
                                              <Col xs="6" sm="6" lg="6">
                                                  <b>Closed Date:</b> 28 October, 2018
                                              </Col>
                                          </Row>
                                      </CardBody>
                                  </Card>
                              </Col>
                           </Row>
                         </CardBody>
                         </div>
                     </Card>
                 </Col>
            
         );
     }
 }
 export default RunningTutions;