import React, { Component} from 'react';

import { Row, Col } from 'reactstrap'

import { Card, CardBody,CardHeader} from 'reactstrap';
import {  NavLink } from 'react-router-dom';

 class Complaints extends Component{
     render (){
         return(
             <div className="animated-fadeIn">
                 <Col xs="12" sm="12" lg="12">
                     <Card className="shadow">
                         <CardHeader className="bg-primary text-white">
                         <ul className="nav nav-tabs card-header-tabs text-center">
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    <h6> <NavLink to="/RunningTutions" className="nav-link text-white px-3" >TUTION INFO</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Attendence" className="nav-link text-white px-3">ATTENDANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Calender" className="nav-link text-white px-3"> CALENDER</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-files-o fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Assignment" className="nav-link text-white px-3">ASSINGNMENTS/WORKSHEETS</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Performance" className="nav-link text-white px-3">PERFORMANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2xfa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="Complaints" className="nav-link text-dark bg-white px-3">COMPLAINTS</NavLink></h6>
    </li>
  </ul>

                         </CardHeader>
                         <CardBody>
                             <Row>
                             <Col xs="6" sm="6" lg="6">
                                 <br/>
                                 <h2 className="text-center">File a Complaint</h2>
                                 <br/>
                                 <hr/>
                             </Col>                            
                             <Col xs="6" sm="6" lg="6">
                                 <br/>
                                 <h2 className="text-center">Complaints</h2>
                                 <br/>
                                 <hr/>
                             </Col>
                             </Row>
                             <Row>
                             <Col xs="6" sm="6" lg="6">
                                 <br/>
                                 <br/>
                                 <h5>Subject</h5>
                                 <br/>
                                 <input type="text" name="subject" id="subject" className="form-control border-top-0 border-left-0 border-right-0"/>
                                 <br/>
                             </Col> 
                             <Col xs="6" sm="6" lg="6" className="text-center">
                                 <br/>
                                 You have not filed any Complaint Yet. 
                             </Col>
                             </Row>
                             <Row>
                             <Col xs="6" sm="6" lg="6">
                                 <br/>
                                 <br/>
                                 <h5>Message</h5>
                                 <br/>
                                 <input type="text" name="subject" id="subject" className="form-control border-top-0 border-left-0 border-right-0"/>
                                 <br/>
                             </Col>        
                             </Row>
                             <Row>
                                 <br/>
                                 <button type="submit" className="text-center btn btn-primary ml-3 ">Submit</button>
                             </Row>

                         </CardBody>
                     </Card>
                 </Col>
             </div>
         );
     }
 }
 export default Complaints;