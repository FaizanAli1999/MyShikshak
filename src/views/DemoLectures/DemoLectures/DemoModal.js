import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {  Col, Row, Card,  } from 'reactstrap';

class DemoModal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Demo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Name</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <label>Discription</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <button className="btn btn-primary btn-sm shadow">SELECT FILE </button>
              <input type="text" placeholder="Upload Demo File" disabled className="border-top-0 border-right-0 border-left-0 form-control"/>
              <hr/>
              <Row>
              <Col xs="6" sm="6" lg="6" className="">
                <button className="btn btn-primary btn-md left1 shadow px-4 ">RESET</button>
              </Col>
              <Col xs="6" sm="6" lg="6" className="">
                <button className="btn  btn-md tab text-white shadow">ADD Demo</button>
              </Col>
              </Row>
            </Modal.Body>
           
          </Modal>
      
        );
    }
}

export default DemoModal;