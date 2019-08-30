import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import './DefaultHeader.css';

import {  AppSidebarToggler } from '@coreui/react';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
       
        <AppSidebarToggler className="d-lg-down-none " display="lg" />
        <AppSidebarToggler className="d-md-none" display="md" mobile />
        
         <img src= "https://learner.dev.myshikshak.com/images/logo.png" width="40" height="40" className="d-lg-down-none" alt=""/>
         
         
         
      <Link to="/" className="link-1 d-md-down-none breadcrumb-dn mr-auto"><h5>MyShikshak Tutor Board</h5></Link>  
    
        <Nav className="ml-auto" navbar>
        <NavItem className=" link px-3">
<Link to="/dashboard"><i className=" link fa fa-check "> </i></Link> <NavLink to="/dashboard" className=" nav-link clearfix d-none d-sm-inline-block" >  Take test</NavLink>
          </NavItem>
          <NavItem className="px-3">
          <Link to="/users"> <i className=" link fa fa-bullhorn"></i></Link> <NavLink to="/users" className="nav-link clearfix d-none d-sm-inline-block">  Answer queries</NavLink>
          </NavItem>
          <NavItem className="px-3">
          <Link to="#"> <i className=" link fa fa-film"></i></Link> <NavLink to="#" className="nav-link  clearfix d-none d-sm-inline-block px-1"> Study Content</NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav className="  link clearfix  d-sm-inline-block"> <i class="fa fa-bell">
             <DropdownMenu>
         <div style={{maxHeight: 250,maxWidth: 250, overflow: 'auto', position: 'absolute'}} className="dropdown-menu dropdown-info dropdown-menu-right show" aria-labelledby="navbarDropdownMenuLink">
  <div id="notifications">
    <a data-seen={1} id="11E98ED43B999455858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://learner.dev.myshikshak.com/tuition/?id=11E93F63F2181ED0BC70C13277625007">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has marked attendance for review
      <br/>
      <span className="ml-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E97AD71EB9A82F858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e8a1f18cfa14f0ac5ffd93a82e7b01">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E96AB2B59A4E97858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://localhost:8001/request/?requestId=11e96ab24c4a9530b533a1c296e716c6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E9512F52716CF9858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e93849f95d735081b6f9aefcfd4170">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E94FA1DCC93325858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e8a1f1b3d54950ac5ffd93a82e7b01">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E93DE51E52C62F858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://learner.dev.myshikshak.com/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has marked attendance for review
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E93B7B758BD40E858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11e938fbfa4678e093dd7912d6ca78e6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has added a new event
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FD373E9159858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has uploaded an assignment.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FCA76ED6D9858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has uploaded an assignment.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FC5FA2834C858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11e938fbfa4678e093dd7912d6ca78e6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has added a new event.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a></div>
  <a className="text-center single-notification dropdown-item waves-effect waves-light" href="/notifications">
    <strong>See All Notifications</strong>
  </a>
</div>

         
          </DropdownMenu></i> </DropdownToggle><DropdownToggle nav className=" clearfix d-none d-sm-inline-block px-1"> 
          Notification
          </DropdownToggle>
          <DropdownMenu>
         <div style={{maxHeight: 250,maxWidth: 250, overflow: 'auto', position: 'absolute'}} className="dropdown-menu dropdown-info dropdown-menu-right show" aria-labelledby="navbarDropdownMenuLink">
  <div id="notifications">
    <a data-seen={1} id="11E98ED43B999455858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://learner.dev.myshikshak.com/tuition/?id=11E93F63F2181ED0BC70C13277625007">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has marked attendance for review
      <br/>
      <span className="ml-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E97AD71EB9A82F858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e8a1f18cfa14f0ac5ffd93a82e7b01">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E96AB2B59A4E97858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://localhost:8001/request/?requestId=11e96ab24c4a9530b533a1c296e716c6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E9512F52716CF9858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e93849f95d735081b6f9aefcfd4170">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E94FA1DCC93325858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="https://learner.dev.myshikshak.com/request/?requestId=11e8a1f1b3d54950ac5ffd93a82e7b01">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has applied on your posted tuition requirement
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E93DE51E52C62F858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://learner.dev.myshikshak.com/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has marked attendance for review
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E93B7B758BD40E858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11e938fbfa4678e093dd7912d6ca78e6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has added a new event
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FD373E9159858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has uploaded an assignment.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FCA76ED6D9858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11E938FBFA4678E093DD7912D6CA78E6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has uploaded an assignment.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a>
    <a data-seen={1} id="11E938FC5FA2834C858B022D3AAF7F0E" className="single-notification dropdown-item waves-effect waves-light" href="http://localhost:8001/tuition/?id=11e938fbfa4678e093dd7912d6ca78e6">
      <i className="fa fa-money mr-2" aria-hidden="true" />
      Kunal Yadav has added a new event.
      <br/>
      <span className="mr-3">
        16 July, 2019</span>
    </a></div>
  <a className="text-center single-notification dropdown-item waves-effect waves-light" href="/notifications">
    <strong>See All Notifications</strong>
  </a>
</div>

         
          </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="px-3">
         <Link to="#"> <i class=" link fa fa-question-circle"></i></Link><NavLink to="#" className="nav-link clearfix d-none d-sm-inline-block px-1">  Need Heelp?</NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down"> 
          <DropdownToggle nav className=" clearfix d-sm-inline-block">
            <i class="fa fa-user"></i>
            </DropdownToggle>
           <DropdownToggle nav className=" clearfix d-none d-sm-inline-block px-1">
             Profile
             </DropdownToggle>
            <DropdownMenu right>
             
              <DropdownItem><Link to="/theme/colors"><i className="fa fa-user"></i> <Link to="/theme/colors">My Account</Link></Link></DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
