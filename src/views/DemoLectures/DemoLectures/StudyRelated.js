import React, { Component } from 'react';
import {  Card, CardBody,  Col, Row  } from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import {   ButtonToolbar } from 'react-bootstrap';
import DemoModal from './DemoModal';
import UpdateModal from './UpdateModal';
import './Demo.css' ;

class StudyRelated extends Component {
  constructor(props){
    super(props);
    this.state = {
        addModalShow : false,
        addModalShow2 : false
    }
  }
  render() {
    let addModalClose =() => this.setState({addModalShow:false});
   let addModalClose2 =() => this.setState({addModalShow2:false});
    return (
      
        <Col xs="12" sm="12" lg="12">
          <Card>
            <CardBody>
              <h2 className="text-center">Demo Lectures</h2>
              <hr/>
              <div className="animated fadeIn">
              <ul className="nav nav-tabs nav-justified indigo text-center tab" role="tablist">
    <li className="nav-item px-3 mt-3">
    
    <h6> <NavLink to="/DemoLectures" className="nav-link text-white border-0 tab px-3" role="tab" ><h5><i class="fa fa-graduation-cap" aria-hidden="true"></i>  Intro</h5></NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    
     <h6> <NavLink to="/StudyRelated" className="nav-link   text-dark px-3" role="tab"><h5>Study Realted Videos</h5></NavLink></h6>
    </li>
 </ul>
 </div>
 <Row>
   <Col xs="12" sm="12" lg="12" className="text-center">
     <br/>
     <ButtonToolbar >
     <button 
     className="btn btn-md btn-primary left" onClick={()=> this.setState({addModalShow:true})}>
       ADD DEMO VIDEO
     </button>
     <DemoModal show={this.state.addModalShow}
     onHide={addModalClose} />
   </ButtonToolbar>
   </Col>
 </Row>
 <Row>
   <Col xs="3" sm="3" lg="3">
     <br/>
     <Card className="shadow">
       <ButtonToolbar>
     <img src="https://d2k3kjiht8fg7f.cloudfront.net/learner/images/placeholder.jpg" class="img-fluid" alt="" onClick={()=> this.setState({addModalShow2:true})} />
     <UpdateModal show={this.state.addModalShow2}
     onHide={addModalClose2} />
      </ButtonToolbar>
       <CardBody>
         <Row>
          <Col xs="12" sm="12" lg="12" className="text-center">
            test
          </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="12" className="text-center">
              <h5>Primary (1-5)</h5>
            </Col>
          </Row>
       </CardBody>
     </Card>
   </Col>
 </Row>
            </CardBody>
          </Card>
        </Col>
     
    );
  }
}

export default StudyRelated;

