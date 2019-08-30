
import React,{Component} from 'react';
import './jobinvites.css';
import { Card,CardBody } from 'reactstrap';
import { Row, Col , Button} from 'reactstrap'
class jobinvites extends  Component{
    render(){
        return(
            <div>
                <h4 className="text-center text1">Students Requests</h4>
                <Col xs="12" sm="12" lg="12">
                    <br/>
                    <br/>
                    <Card className="shadow">
                        <CardBody>
                        <h4>Mitesh Panchal | Middle(6-8) | Science</h4>
                                <hr/>
                                <Row>
                            <Col xs="6" sm="6" lg="6">
                                <b className="text2">Tution Type - </b>Home Tution
                                <br/>
                                <b className="text2">Area - </b>Rishabdev,Rajasthan,India
                                <br/>
                                <b className="text2">Session Count - </b>Twice in a week(8 sessions in a Month)
                                <br/>
                                <b className="text2">Fee Proposed by Student - </b><span className="badge badge-success badge-pill shadow">₹ 504</span>
                                <br/>
                            </Col>
                            <Col xs="6" sm="6" lg="6">
                                <b className="text2">Posted on - </b>24 July,2019
                                <br/>
                                <b className="text2">Preferred Timing - </b>5:30 AM
                                <br/>
                                <b className="text2">Fee Proposed by You - </b><span className="badge badge-primary badge-pill shadow">₹ 550</span>
                                <br/>
                            </Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="6" lg="6">
                                    <br/>
                                    <Button className="btn btn-danger shadow form-control">DELETE</Button>
                                    </Col> 
                                    <Col xs="6" sm="6" lg="6">
                                    <br/>
                                    <Button className="btn btn-info text-white shadow form-control">UPDATE PROPOSED FEES</Button>
                                    </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}
export default jobinvites;
