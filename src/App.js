import React from 'react';
import { observer } from 'mobx-react';
import { Col, Row } from 'reactstrap';
import { Route, withRouter } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';

@withRouter
@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row className="no-gutters">
          <Col xs={2} sm={3}>
            <Sidebar />
          </Col>
          <Col xs={10} sm={9} className="p-3">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Col>
        </Row>
      </div>
    );
  }
}
