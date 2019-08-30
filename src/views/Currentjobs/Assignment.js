import React, { Component} from 'react';

import { Row, Col } from 'reactstrap'
import AssignmentModal from './AssignmentModal';
import { Card, CardBody,CardHeader} from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import { ButtonToolbar } from 'react-bootstrap';

 class Assignment extends Component{
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false
    
        }
      }
     render (){
        let addModalClose =() => this.setState({addModalShow:false});
        
         return(
             
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
     <h6> <NavLink to="Assignment" className="nav-link bg-white text-dark px-3">ASSINGNMENTS/WORKSHEETS</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Performance" className="nav-link text-white px-3">PERFORMANCE</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2xfa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Complaints" className="nav-link text-white px-3">COMPLAINTS</NavLink></h6>
    </li>
  </ul>

                         </CardHeader>
                         <div className="animated fadeIn">
                         <CardBody>
                             <Row>
                             <Col xs="12" sm="12" lg="3">
                                 <br/>
                                 <br/>
                                 <h1 className="ml-2">Assignments</h1>
                             </Col>
                             <Col xs="12" sm="12" lg="3">
                                 <br/>
                                 <br/>   
                                 <ButtonToolbar>
                             <button className=" btn btn-primary btn-block shadow" onClick={()=> this.setState({addModalShow:true})}>ADD ASSINGNMENT</button>
                             <AssignmentModal show={this.state.addModalShow}
                                onHide={addModalClose} />
                             </ButtonToolbar>
                             </Col>
                             </Row>
                             <hr/>
                             <h6 className="text-center">You have not added any Assignment.</h6>
                         </CardBody>
                         </div>
                     </Card>
                 </Col>
             
         );
     }
 }
 export default Assignment;