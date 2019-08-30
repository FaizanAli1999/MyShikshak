import React, { Component} from 'react';
import './Closedjobs.css';
import { Row, Col } from 'reactstrap'
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Card, CardBody,CardHeader} from 'reactstrap';
import {  NavLink } from 'react-router-dom';

 class Attendence2 extends Component{
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
     render (){
         return(
             
                 <Col xs="12" sm="12" lg="12">
                     <Card className="shadow">
                         <CardHeader className="bg-primary text-white">
                         <ul className="nav nav-tabs card-header-tabs text-center">
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    <h6> <NavLink to="/Tutioninfo" className="nav-link text-white  px-3" >TUTION INFO</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Attendance2" className="nav-link text-dark bg-white px-3">ATTENDANCE</NavLink></h6>
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
     <h6> <NavLink to="/Complaint2" className="nav-link text-white px-3">COMPLAINTS</NavLink></h6>
    </li>
  </ul>

                         </CardHeader>
                         <div className="animated fadeIn">
                         <CardBody>
                         
                           
                             <Row>    
                               <Col xs="12" sm="12" lg="12">
                                   <br/>
                                   
                               <Calendar onChange={this.onChange} disabled value={this.state.date} className=" calender1"/>
                               
                                </Col>       
                             </Row>
                             
                         </CardBody>
                         </div>
                         
                     </Card>
                 </Col>
             
         );
     }
 }
 export default Attendence2;