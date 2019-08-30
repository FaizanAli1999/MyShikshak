import React, { Component, lazy } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';

const Widget01 = lazy(() => import('../../views/Widgets/Widget01'));
const Widget02 = lazy(() => import('../../views/Widgets/Widget02'));

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="12" sm="12" lg="12">
            <Widget01 color="primary" variant="inverse"  />
            
          </Col>
           </Row>
           <Row>
           <Col xs="12" sm="6" lg="3">
            <Widget02 header="Current Jobs" mainText="10" icon="fa fa-handshake-o light-blue lighten-1" color="danger" />
          </Col>  
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Maching Jobs" mainText="" icon="fa fa-bar-chart red accent-2" color="danger" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Wallet Balance" mainText="₹10" icon="fa fa-money primary-color" color="danger" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Wallet Coins" mainText="0" icon="fa fa-credit-card light-blue lighten-1" color="danger" />
          </Col>
           </Row>
           <Row>
           <Col xs="12" sm="0" lg="12">
           <Card >
              <CardHeader className="text-white bg-primary text-center">
                <h1>Want to get more Jobs?</h1>
              </CardHeader>
              <CardBody className="bg-white">
              <Button outline color="info" size="lg" block>SEARCH JOBS</Button>
               
              </CardBody>
            </Card>
          </Col>
           </Row>
             
      </div>
    );
  }
}

export default Dashboard;
