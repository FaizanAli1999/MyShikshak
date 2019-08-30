import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {  Col, Row, Card,  } from 'reactstrap';
import './Demo.css';
class UpdateModal extends Component {
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
                Update Demo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Name</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <label>Discription(optionl)</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <button className="btn btn-primary btn-sm shadow form-control">DOWNLOAD DEMO </button>
             <br/>
              <Row>
              <Col xs="6" sm="6" lg="6" className="">
                  <br/>
                <button className="btn bg-white border-danger text-danger btn-md left2   shadow">DELETE DEMO</button>
              </Col>
              <Col xs="6" sm="6" lg="6" className="">
                  <br/>
                <button className="btn  btn-md bg-primary  text-white shadow">UPDATE DEMO</button>
              </Col>
              </Row>
            </Modal.Body>
          </Modal>
      
        );
    }
}

export default UpdateModal;