import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap'
import {  NavLink } from 'react-router-dom';
import { Card,CardBody,CardHeader, } from 'reactstrap';
class Educationalinfo extends Component {
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
      <Col xs="12" sm="0" lg="12">
           <Card>
              <CardHeader className="text-white bg-primary text-center">
                 <ul className="nav nav-tabs card-header-tabs text-center">
                    <li className="nav-item px-3 mt-3">
                      <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                      <h6> <NavLink to="/Profile" className="nav-link text-white px-3" >PERSONAL INFO</NavLink></h6>
                     </li>
                    <li className="nav-item px-3 mt-3">
                      <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
                      <h6> <NavLink to="/Educationalinfo" className="nav-link text-dark px-3">EDUCATIONAL INFO</NavLink></h6>
                    </li>
                    <li className="nav-item px-3 mt-3">
                      <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                      <h6> <NavLink to="/Tutuoring" className="nav-link text-white px-3"> TUTORING PREFERENCES</NavLink></h6>
                    </li>
                    <li className="nav-item px-3 mt-3">
                      <i class="fa fa-folder fa-2x" aria-hidden="true"></i>
                      <h6> <NavLink to="/Documents" className="nav-link text-white px-3">DOCUMENTS</NavLink></h6>
                    </li>
                    </ul>
              </CardHeader>
                <div className="animated fadeIn">
                  <CardBody className="bg-whitess">
                      <h2 className="text-center text-dark">Educational Information</h2>
                      <br/>
                      <h6 className="text-center text-info">Qualification Marksheets pending for verification</h6>
                      <h6 className="text-center text-info">10th Marksheet pendind for verification</h6>
                         <Row>
                           <Col xs="12" sm="12" lg="6">
                            <br/>
                            <br/>
                              <button className="btn btn-md btn-primary shadow">SELECT FILE</button>
                              <input type="text" name="selectfile" disabled placeholder="Upload Recent Qualifications Marksheets/Degrees" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 ml-3"/>
                            </Col>
                            <Col xs="12" sm="12" lg="6" className="text-center">
                              <br/>
                              <br/>
                                <button className="btn btn-md btn-primary shadow">UPLOADED QUALIFICATION FILE</button>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12" sm="12" lg="6">
                              <br/>
                              <br/>
                              <button className="btn btn-md btn-primary shadow">SELECT FILE</button>
                              <input type="text" name="selectfile" disabled placeholder="Upload Tenth Marksheet" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 ml-3"/>
                            </Col> 
                            <Col xs="12" sm="12" lg="6" className="text-center">
                              <br/>
                              <br/>
                              <button className="btn btn-md btn-primary shadow">UPLOADED TENTH FILE</button>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12" sm="12" lg="12">
                              <hr/>
                            <Row>
                                <Col xs="12" sm="4" lg="4">
                                  <label>Latest Qualification</label>
                                  <input type="text" name="latest" defaultValue="B.Tech in Computer Science Engineering" className=" form-control border-bottom border-top-0 border-right-0 border-left-0 "/>
                                </Col>
                                <Col xs="12" sm="4" lg="4">
                                  <label>School Name</label>
                                  <input type="text" name="school" defaultValue="KARAN PUBLIC SCHOOL" className=" form-control border-bottom border-top-0 border-right-0 border-left-0 "/>
                                </Col>
                                <Col xs="12" sm="4" lg="4">
                                  <label>College Name</label>
                                  <input type="text" name="college" defaultValue="Meerut Institute of Engeneering and Technology" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 "/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" sm="12" lg="12">
                                  <br/>
                                  <br/>
                                  <input type="text" name="college" defaultValue="10 Years" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 "/>
                                </Col>
                                <Col xs="12" sm="12" lg="12" className="text-center">
                                  <br/>
                                  <button className="btn btn-md btn-primary shadow">SUBMIT FOR VERIFICATION</button>
                                </Col>
                            </Row>
                            </Col>
                           </Row>
                      </CardBody>
                    </div>
                  </Card>
                </Col>
              );
            }
          }
export default Educationalinfo;