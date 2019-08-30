import React, { Component,lazy } from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'reactstrap'

import {  NavLink } from 'react-router-dom';
import {
  
  Card,
  CardBody,
  
  CardHeader,
  
} from 'reactstrap';



const Widget02 = lazy(() => import('../Widgets/Widget02'));

class Profile extends Component {
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
    <h6> <NavLink to="/Profile" className="nav-link text-dark px-3" >PERSONAL INFO</NavLink></h6>
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
     <h6> <NavLink to="/Documents" className="nav-link text-white px-3">DOCUMENTS</NavLink></h6>
    </li>
  </ul>
 </CardHeader>
    <CardBody className="bg-white">
        <div className="animated fadeIn text-center">
        Refer and earn: <a href="https://tutor.dev.myshikshak.com/signup/?refId=11e8a08ce16bbcc09713c51420190568">https://tutor.dev.myshikshak.com/signup/?refId=11e8a08ce16bbcc09713c51420190568</a>
         </div> 
         <div className="animated fadeIn mt-3">
         <Row>
           <Col xs="12" sm="6" lg="4">
            <Widget02 header="Sucess Tutions" mainText="15" icon="fa fa-handshake-o light-blue lighten-1" color="danger" />
          </Col>  
          <Col xs="12" sm="6" lg="4">
            <Widget02 header="Failed Tutions" mainText="0" icon="fa fa-bar-chart red accent-2" color="danger" />
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Widget02 header="Sucess Rate" mainText="100%" icon="fa fa-money primary-color" color="danger" />
          </Col>
          </Row>
         </div>
         <div className="animated-fadeIn mt-3">
       <Row>
           <Col xs="12" sm="6" lg="4" className="shadow text-center">
             <img src="https://tutor.cdn.myshikshak.com/11e8a08ce16bbcc09713c51420190568/profile.jpeg?Expires=1566372239&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly90dXRvci5jZG4ubXlzaGlrc2hhay5jb20vMTFlOGEwOGNlMTZiYmNjMDk3MTNjNTE0MjAxOTA1NjgvcHJvZmlsZS5qcGVnIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY2MzcyMjM5fX19XX0_&Signature=jgCmLTe1obhyg6ViCObXyxvi7NDNlJ2VXC1N8VsN4RsfYTOLJw5xj3dLQEKjTTbiHq60mGAzsVZMvvLU-0GBkDyeOz0toIL9hwgDcSQYiCaXRf5keT95LBRqG6cb7TLmCWh0hkbZf5UzCPExCnBJ5JXkWLDwqFEovn4iZtPrXaYGuOMyb5-XO2ailtGptWydD7aqrdewxyeM-0dHpzLnzO9LDl6TwSDEmDWPrZ8gMR-uMC8nzUrMT8vtImEjr8MqBlOSLuvG7vySdsnWoOIjTBIrdI-2T36O5cBUF~uBoeM0St-LFvq7yLy4dTHFzOr9k8mjViChfGRpg~bXElhpXA__&Key-Pair-Id=APKAIRF7CXTDH4NUVFNQ" className="rounded-circle shadow" width="150" height="150" alt=""/>
             <h5 className="mt-3">Kunal Yadav</h5>
             <button className="btn-pill btn btn-primary btn-block mt-3 md-5 shadow">Choose Image</button>
             <row>             
               <Col xs="12" sm="6" lg="12" className=" text-center">
               <Card className="mt-5">             
                 <CardHeader className="text-white bg-primary text-center shadow">
               Profile Apealling info
             </CardHeader>
             <CardBody>
             <div className="form-group">
  <label htmlFor="about" className="active"><b>About</b></label>
  <textarea style={{height: 100}} className="form-control" maxLength={5000} name="about" id="about" rows={15} defaultValue={"ye yea"} />
</div>
<div className="form-group">
  <label htmlFor="hobbies" className="active"><b>Hobbies</b></label>
  <textarea style={{height: 100}} className="form-control" maxLength={5000} name="hobbies" id="hobbies" rows={15} defaultValue={"you yo"} />
</div>
<button className="btn btn-sm btn-primary btn-rounded">Save Info</button>
 </CardBody>
  </Card>
   </Col>
     </row>
     </Col> 
     <Col xs="12" sm="6" lg="8" className="">
       <Card>
         <CardHeader className="text-center bg-white">
         <div className="admin-up d-flex justify-content-start">
  <h1><i className="fa fa-users primary-color px-3" /></h1>
  <div className="data mt-3">
    <h5 className="font-weight-bold dark-grey-text">Edit Account - <span className="text-muted">Information</span></h5>
  </div>
</div>
</CardHeader>
<CardBody>
  <Row>
  <Col xs="12" sm="6" lg="6">
    <label>First Name</label>
    <input required type="text" id="firstName" maxLength={40} name="firstName" defaultValue="Kunal" className="form-control validate" />
  </Col>
  <Col xs="12" sm="6" lg="6">
  <label>Last Name</label> 
  <input required type="text" id="firstName" maxLength={40} name="lastName" defaultValue="Yadav" className="form-control validate" />
  </Col>
  </Row>
  <Row>
  <Col xs="12" sm="6" lg="6">
    <label>Email Address</label>
    <input required type="email" id="email" maxLength={80} name="email"  defaultValue="abkunal@gmail.com" className="form-control validate" />
  </Col>
  <Col xs="12" sm="6" lg="6">
    <label>Phone No.</label>
    <input required type="tel" id="phone" maxLength={10} name="phone" defaultValue={9045253317} className="form-control validate" />
    </Col>
  </Row>
  <Row>
  <Col xs="12" sm="6" lg="6">
   <label>Date of Birth</label>
   <input required type="date" id="date" maxLength={80} name="date"   className="form-control validate" />
    </Col> 
    
    <Col xs="12" sm="6" lg="6" className="mt-4">
    <input required className="with-gap " name="gender" defaultValue="M" type="radio" id="male" />
      <label className="px-3">Male</label>
      <input required className="with-gap" name="gender" defaultValue="F" type="radio" id="female" />
      <label className="px-3">Female</label>
    </Col>
  </Row>

<Row>
<Col xs="10" sm="10" lg="10">
<label htmlFor="form5" className="active">Flat / House No., Street, Road ?</label>
<input required defaultValue="Military Dairy farm" type="text" maxLength={250} id="house" name="house" className="form-control" />
  </Col>
  
</Row>
<Row>
<Col xs="10" sm="10" lg="10">
  <label htmlFor="area" className="active">Area</label>
  <input required defaultValue="Pandav Nagar, Ghaziabad, Uttar Pradesh, India" type="text" maxLength={400} id="area" name="area" className="form-control" placeholder="Enter a location" autoComplete="off" />
    </Col> 
</Row>
<Row>
<Col xs="6" sm="6" lg="6">
<label htmlFor="pincode" className="active">Pincode</label>
<input required type="text" maxLength={6} id="pincode" name="pincode" defaultValue={250001} className="form-control" />         
</Col>
<Col xs="12" sm="12" lg="6">
<label htmlFor="form7" className="active">Nearest Land Mark</label>
<input required type="text" id="landmark" maxLength={100} name="landmark" defaultValue="Uttar Pradesh" className="form-control validate" />
</Col>
</Row>
<Row>
<Col xs="12" sm="12" lg="6">
<label htmlFor="skypeId" className="active">Skype Id</label>
<input type="text" id="skypeId" maxLength={100} name="skypeId" defaultValue="abkunal" className="form-control" />         
  </Col>
  <Col xs="12" sm="12" lg="6">
  <label htmlFor="form7" className="active">Google Hangouts Email</label>
  <input type="email" id="hangoutsEmail" maxLength={100} name="hangoutsEmail" defaultValue="abkunal@gmail.com" className="form-control validate" />
    </Col> 
    <Col xs="12" sm="12" lg="12" className="text-center">
    <button className="btn-pill btn btn-primary btn-block mt-3 md-5 shadow">Update Account</button>
    </Col> 
</Row>


</CardBody>
         </Card>
       </Col> 
              </Row>
         </div>
        </CardBody>
        </Card>
        </Col>
    )
  }
}



export default Profile;
