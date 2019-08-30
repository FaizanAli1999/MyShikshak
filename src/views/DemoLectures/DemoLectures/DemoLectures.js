import React, { Component } from 'react';
import {  Card, CardBody, Col, Row  } from 'reactstrap';
import {   ButtonToolbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import DemoModal from './DemoModal';
import UpdateModal from './UpdateModal';
import './Demo.css' ;

class DemoLectures extends Component {
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
              <ul className="nav nav-tabs nav-justified indigo text-center tab" role="tablist">
    <li className="nav-item px-3 mt-3">
    
    <h6> <NavLink to="/DemoLectures" className="nav-link text-dark px-3" role="tab" ><h5><i class="fa fa-graduation-cap" aria-hidden="true"></i>  Intro</h5></NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    
     <h6> <NavLink to="/StudyRelated" className="nav-link tab border-0 text-white px-3" role="tab"><h5>Study Realted Videos</h5></NavLink></h6>
    </li>
 </ul>
 <div className="animated fadeIn">
 <br/>
 <Row>
 <Col xs="12" sm="12" lg="12" className="text-center">
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
 <br/>
 <br/>
 <Row>
   <Col xs="3" sm="3" lg="3">
     <Card className="shadow">
       <ButtonToolbar>
     <img src="https://d2k3kjiht8fg7f.cloudfront.net/learner/images/placeholder.jpg" class="img-fluid" alt="" onClick={()=> this.setState({addModalShow2:true})} />
     <UpdateModal show={this.state.addModalShow2}
     onHide={addModalClose2} />
     </ButtonToolbar>
       <CardBody>
            <Row>
              <Col xs="12" sm="12" lg="12" className="text-center">
                Intro
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" lg="12" className="text-center">
                <br/>
                <h5>Intro</h5>
              </Col>
            </Row>
       </CardBody>
     </Card>
   </Col>
   </Row> 
   </div>   
   <br/>
   <br/>
            </CardBody>
          </Card>
        </Col>
      
    );
  }
}

export default DemoLectures;

