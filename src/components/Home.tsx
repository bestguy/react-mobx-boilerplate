import React from 'react';
import fecha from 'fecha';
import { Button, ButtonToolbar } from 'reactstrap';
import Icon from 'react-fontawesome';
import Clock from './Clock';
import useClock from '../stores/useClock';

export default () => {
  const time = useClock();

  return (
    <div>
      <h1 className="border-dark border-bottom p-2" data-testid="page-header">
        <Icon name="home" className="text-info" /> Home
      </h1>
      <div className="d-flex align-items-center p-3">
        <Clock time={time} />
        <div className="pl-4">
          <h2>{fecha.format(time, 'h:mm:ssA')}</h2>
          <h3 className="text-muted">
            {fecha.format(time, 'MMM Do, YYYY')}
          </h3>
        </div>
      </div>

      <ButtonToolbar>
        <Button color="primary" className="mr-1">
          Hello
        </Button>
        <Button>World!</Button>
      </ButtonToolbar>
    </div>
  );
};
