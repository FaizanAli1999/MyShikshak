import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Row, Col,Input} from 'reactstrap'

import {  NavLink } from 'react-router-dom';
import {
  
  Card,
  CardBody,
  
  CardHeader,
  
} from 'reactstrap';





class Documents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount () {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild
    const color = window.getComputedStyle(elem).getPropertyValue('background-color')
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }


  render() {
   

    return (
      <Col x0s="12" sm="0" lg="12">
           <Card>
              <CardHeader className="text-white bg-primary text-center">
      
  <ul className="nav nav-tabs card-header-tabs text-center">
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    <h6> <NavLink to="/Profile" className="nav-link text-white px-3" >PERSONAL INFO</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Educationalinfo" className="nav-link text-white px-3">EDUCATIONAL INFO</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Tutuoring" className="nav-link text-white px-3"> TUTORING PREFERENCES</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Documents" className="nav-link text-dark px-3">DOCUMENTS</NavLink></h6>
    </li>
  </ul>
 </CardHeader>
 <CardBody className="bg-white">
   <br/>
   <h2>Identity Documents</h2>
   <hr/>
   <h6 className="text-info">Your Aadhaar has been submitted for verification</h6>
   <br/>
   <br/>
   <Col xs="12" sm="12" lg="12">
     <Input type="number" name="number" id="number" defaultValue="656565656565" className="text-center form-control border-top-0 border-left-0 border-right-0" />
   </Col>
   <Row>
     <Col xs="12" sm="12" lg="6">
       <br/>
       <br/>
     <button className="btn btn-md btn-primary shadow">SELECT FILE</button>
      <input type="text" name="selectfile" disabled placeholder="Upload Aadhar Front" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 ml-3"/>
     </Col>
     <Col xs="12" sm="12" lg="6">
       <br/>
       <br/>
     <button className="btn btn-md btn-primary shadow">SELECT FILE</button>
      <input type="text" name="selectfile" disabled placeholder="Upload Aadhar Back" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 ml-3"/>
     </Col>
   </Row>
   <Row>
     <Col xs="12" sm="12" lg="6" className="text-center">
       <br/>
       <h6 className="text-primary">Uploaded Front Aadhar Card</h6>
     </Col>
     <Col xs="12" sm="12" lg="6" className="text-center">
       <br/>
       <h6 className="text-primary">Uploaded Back Aadhar Card</h6>
     </Col>
   </Row>
   <Row>
     <Col xs="12" sm="12" lg="12" className="text-center">
       <br/>
       <br/>
     <button className="btn btn-md btn-primary shadow">SUBMIT FOR VERIFICATION</button>
     </Col>
   </Row>
 </CardBody>
</Card>
</Col>
);
}
}
export default Documents;