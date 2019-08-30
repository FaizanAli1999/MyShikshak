import React, { Component } from 'react';
import {  Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

class Notification extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card className="shadow">
                    <CardHeader className="bg-primary text-white">
                        <h5>Notifications</h5>
                    </CardHeader>
                    <CardBody>
                        <br/>
                        <Row>
                            <Col xs="6" sm="6" lg="9">
                               <span className=""> Title</span>
                                </Col> 
                                <Col xs="6" sm="6" lg="3">
                               <span> Date/Time</span>
                               </Col> 
                        </Row>
                        <hr/>
                        <Row>
                            <Col xs="6" sm="6" lg="9">
                               <span className=""> A student has denied your proposed fee of 4500 for Arabic Language</span>
                                </Col> 
                                <Col xs="6" sm="6" lg="3">
                               <span><i className="fa fa-clock-o" aria-hidden="true"></i>  30 August, 2019</span>
                               </Col> 
                        </Row>
                        <hr/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Notification;