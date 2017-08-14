import React, { Component } from 'react';
import fecha from 'fecha';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Container, Col, Row, Table } from 'reactstrap';

@observer
export default class App extends Component {

  @observable time = new Date();

  componentDidMount() {
    this.interval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container className="p-3">
        <Row>
          <Col>
            <Button color="primary">Hello</Button>
            <Button>World!</Button>
          </Col>
          <Col sm="3">
            <h1>{fecha.format(this.time, 'h:mm:ssA')}</h1>
            <h3 className="text-muted">{fecha.format(this.time, 'MMM Do, YYYY')}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
