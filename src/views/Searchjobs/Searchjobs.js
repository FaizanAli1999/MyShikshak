import React, { Component } from 'react';
import { Card,CardBody } from 'reactstrap';
import { Row, Col,Input,Label } from 'reactstrap'
import './search.css';
class Searchjobs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <Row>
           <Col xs="12" sm="12" lg="4">
             <Card className="shadow">
               <CardBody>
                 <Row>
                 <Col xs="6" sm="6" lg="6" className="text-center">
                   <h6>Filter</h6>
                 </Col>
                 <Col xs="6" sm="6" lg="6" className="text-center">
                 <button className="btn btn-sm btn-primary btn-pill btn-block shadow">RESET</button>
                 </Col>
                 </Row>
                 <br/>
                 <hr/>
                 <br/>
                 <br/>
                 <Row>
                   <Col xs="12" sm="12" lg="12">
                     <h6 className="ml-2">LOCATION</h6>
                     <input type="text" name="location"  placeholder="Enter a Location" className=" form-control border-bottom-dark border-top-0 border-right-0 border-left-0 "/>
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
                  <Col xs="12" sm="12" lg="12">
                    <br/>
                    <br/>
                    <h6 className="ml-2">TUTION TYPE</h6>
                    <Col xs="12" sm="12" lg="12" className="ml-5">
                    <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                    <Label check className="form-check-label" htmlFor="radio1">Home Tution</Label>
                    <br/>
                    <br/>
                    <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                    <Label check className="form-check-label" htmlFor="radio1">Online</Label>
                    <br/>
                    <br/>
                    <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                    <Label check className="form-check-label" htmlFor="radio1">Any</Label>
                    </Col>
                    <br/>
                    <br/>
                    <h6 className="ml-2">TUTION RATE</h6>
                    <Col xs="12" sm="12"lg="12" className="ml-5">
                    <br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio4" name="radios2" value="option4" />
                    <Label check className="form-check-label px-2 mt-1" htmlFor="radio4">₹500 - ₹3000</Label>
                    <br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio5" name="radios2" value="option5" />
                    <Label check className="form-check-label px-2 mt-1" htmlFor="radio5">₹3000 - ₹10000</Label>
                    <br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio6" name="radios2" value="option6" />
                    <Label check className="form-check-label px-2 mt-1" htmlFor="radio6">₹10000 - ₹30000</Label><br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio7" name="radios2" value="option7" />
                    <Label check className="form-check-label px-2 mt-1" htmlFor="radio7">₹30000 - ₹60000</Label><br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio8" name="radios2" value="option8" />
                    <Label check className="form-check-label px-2 mt-1" htmlFor="radio8">₹60000 - ₹100000</Label><br/>
                    <Input className="form-check-input mt-2" type="radio" id="radio9" name="radios2" value="option9" />
                    <Label check className="form-check-label px-3 mt-1" htmlFor="radio9">Any</Label>
                    </Col>
                    <br/>
                    <br/>
                    <h6 className="ml-2">TUTOR'S GENDER PREFRENCE</h6>
                    <Col xs="12" sm="12"lg="12" className="ml-5">
                      <Row>
                    <Col xs="6" sm="6"lg="4">
                   <Input className="form-check-input" type="radio" id="radio10" name="radios3" value="mamle" />
                    <Label check className="form-check-label" htmlFor="radio10">Male</Label>
                    </Col>
                    <Col xs="6" sm="6"lg="4" >
                    <Input className="form-check-input" type="radio" id="radio11" name="radios3" value="female" />
                    <Label check className="form-check-label" htmlFor="radio11">Female</Label><br/> 
                    </Col>
                    </Row>
                    <Row>
                      <Col xs="6" sm="6" lg="4">
                        <br/>
                        <Input className="form-check-input" type="radio" id="radio12" name="radio3" value="Any"/>
                        <Label check className="form-check-label" htmlFor="radio11">Any</Label>
                        <br/>
                        <br/>
                      </Col>
                    </Row>
                    </Col>
                  </Col>
                  </Row>
               </CardBody>
             </Card>
           </Col>
           <Col xs="12" sm="12" lg="8">
             <Card className="shadow">
               <h4 className="ml-3 mt-4">Jobs to Apply</h4>
               <br/>
               <Col xs="12" sm="12" lg="12">
                 <Card className="shadow">
                   <CardBody>
                <h4> r t | Intermediate (11-12) | Accountancy</h4>
                <hr/>
                <Row>
                  <Col xs="12" sm="6" lg="6">
                    <b className="text1">Tution type - </b>Home Tution
                    <br/>
                    <b className="text1">Area - </b>Rishabdev,Rajasthan,India
                    <br/>
                    <b className="text1">Session Count - </b>Alternate Days(12 sessions in a Month)
                    <br/>
                    <b className="text1">Fee Proposed by Student: </b> 
                    <span className="badge badge-success badge-pill shadow">₹ 502</span>
                    <br/>
                    <br/>
                    <b className="text1">Fee Proposed by Tutors - </b>No one has Proposed yet
                  </Col>
                  <Col xs="12" sm="6" lg="6">
                   <b className="text1">Gender Prefrence - </b>Male
                   <br/>
                   <b className="text1">Posted on - </b>29 July,2019
                   <br/>
                   <b className="text1">Tutors applied - </b>0
                   <br/>
                   <b className="text1">Session Duration - </b>2 Hours
                   <br/>
                   <b className="text1">Preferred Timing - </b>06:00 AM,06:30 AM,07:00 AM,07:30 AM
                   <br/>
                   <b className="text1">Fee Proposed by you - </b>
                   <span className="badge badge-primary badge-pill shadow">Not yet applied</span>
                 </Col>
                </Row>
                <Row>
                  <Col xs="12" sn="12" lg="6">
                    <br/>
                  <button className="btn btn-md btn-primary shadow form-control">APPLY</button>
                  </Col>
                  <Col xs="12" sm="12" lg="6">
                    <br/>
                  <button className="btn btn-md btn-primary shadow form-control">PROPOSE FEES</button>
                  </Col>
                </Row>
                </CardBody> 
                </Card>
                </Col>
             </Card>
           </Col>
           </Row>
          
         
      </div>
    );
  }
}

export default Searchjobs;
