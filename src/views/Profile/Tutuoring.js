import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import { Row, Col ,Input} from 'reactstrap'

import {  NavLink } from 'react-router-dom';
import {
  
  Card,
  CardBody,
  
  CardHeader,
  
} from 'reactstrap';





class Tutuoring extends Component {
 
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
     <h6> <NavLink to="/Tutuoring" className="nav-link text-dark px-3"> TUTORING PREFERENCES</NavLink></h6>
    </li>
    <li className="nav-item px-3 mt-3">
    <i class="fa fa-folder fa-2x" aria-hidden="true"></i>
     <h6> <NavLink to="/Documents" className="nav-link text-white px-3">DOCUMENTS</NavLink></h6>
    </li>
  </ul>
 </CardHeader>
 <div className="animated fadeIn">
 <CardBody className="bg-white">
   <Row>
  <Col xs="12" sm="12" lg="12" className="text-center">
    <br/>
    <h2>Tutoring Prefrences</h2>
    <hr/>
  </Col>
  </Row>
  <Row>
  <Col xs="12" sm="12" lg="5" className="text-center">
    <br/>
    <label><h6>Min Rate(Hourly)</h6></label>
    <input type="text" name="minrate" placeholder="Enter Hourly Min Rate (ex-500)" className=" form-control border-bottom border-top-0 border-right-0 border-left-0 "/>
  </Col>
  <Col xs="12" sm="12" lg="5" className="text-center">
    <br/>
    <label><h6>Max Rate(Hourly)</h6></label>
    <input type="text" name="maxrate" placeholder="Enter Hourly Max Rate (ex-800)" className=" form-control border-bottom border-top-0 border-right-0 border-left-0 "/>
  </Col>
  <Col xs="12" sm="12" lg="2" className="text-center">
    <br/>
    <button className="btn btn-md btn-primary shadow">UPDATE</button>
  </Col>
  </Row>
  <Row>
    <Col xs="12" sm="12" lg="5" className="text-center">
      <br/>
      <br/>
      <label><h6>Availability (Week Days)</h6></label>
      <Input type="select" name="select" id="select" className="border-top-0 border-left-0 border-right-0 ">
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                      </Input>
    </Col>
    <Col xs="12" sm="12" lg="5" className="text-center">
      <br/>
      <br/>
      <label><h6>Availablity (Week End)</h6></label>
      <Input type="select" name="select" id="select" className="border-top-0 border-left-0 border-right-0">
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                      </Input>

    </Col>
    <Col xs="12" sm="12" lg="2" className="text-center">
      <br/>
      <br/>
      <button className="btn btn-md btn-primary shadow">UPDATE</button>
    </Col>
  </Row>
  <Row>
  <Col xs="12" sm="12" lg="12" className="text-center">
      <br/>
      <br/>
      <Input type="select" name="select" id="select" className="border-top-0 border-left-0 border-right-0">
                        <option value="0">--Choose Category--</option>
                        <option value="1">Primary (1-5)</option>
                        <option value="2">Middle (6-8)</option> 
                        <option value="3">Highs School (9-10)</option>
                        <option value="4">Intermediate</option>
                        <option value="5">Engineering/Medical</option>
                        <option value="6">SSC/Bank/Railway</option>
                        <option value="7">Hobbies</option>
                        <option value="8">Languages</option>
                        <option value="9">Computer Programming</option>
                      </Input>
      </Col> 
  </Row>
  <Row>
  <Col xs="12" sm="12" lg="12" className="text-center">
      <br/>
      <br/>
      <Input type="select" name="select" id="select" className="border-top-0 border-left-0 border-right-0">
                        <option value="0"></option>
                        <option value="1"></option>
                      </Input>
      </Col> 
  </Row>
  <Row>
    <Col xs="12" sm="12" lg="12" className="text-center">
      <br/>
      <br/>
      <button className="btn btn-md btn-primary shadow form-control">ADD SUBJECT</button>
    </Col>
  </Row>
 
 </CardBody>
 </div>
</Card>
</Col>
);
}
}
export default Tutuoring;