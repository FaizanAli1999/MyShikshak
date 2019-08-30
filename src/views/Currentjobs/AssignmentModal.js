import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {  Col, Row, Card,  } from 'reactstrap';
import './assignment.css';
class AssignmentModal extends Component {
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
                Add Assignment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Name</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <label>Discription</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <label>Total Marks</label>
              <input type="text" name="demo" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <label>Deadline</label>
              <input type="date" name="deadline" className="border-top-0 border-right-0 border-left-0 form-control"/>
              <br/>
              <button className="btn btn-primary btn-md shadow px-5 left">ADD ASSIGNMENT </button>
                          </Modal.Body>
           
          </Modal>
      
        );
    }
}

export default AssignmentModal;