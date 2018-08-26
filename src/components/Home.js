import React from 'react';
import fecha from 'fecha';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, ButtonToolbar, Card, CardBody } from 'reactstrap';
import Icon from 'react-fontawesome';

@observer
export default class Home extends React.Component {
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
      <div>
        <h1 className="border-dark border-bottom p-2">
          <Icon name="home" className="text-info" /> Home
        </h1>
        <Card className="mb-3">
          <CardBody>
            <h2>{fecha.format(this.time, 'h:mm:ssA')}</h2>
            <h3 className="text-muted">{fecha.format(this.time, 'MMM Do, YYYY')}</h3>
          </CardBody>
        </Card>

        <ButtonToolbar>
          <Button color="primary" className="mr-1">Hello</Button>
          <Button>World!</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
