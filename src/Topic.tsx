import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

function Topic() {
  const match = useRouteMatch()
  // console.log('match: ', match);
  //  <Link to=`${match}/topic1`>topic1</Link>
    // <Link to=`${match}/topic2`>topic2</Link>
  return <>
    <h2>Topic</h2>
    <ul>
      <li>
        <Link to={`${match.url}/topic1`}>topic1</Link>
      </li>
      <li>
        <Link to={`${match.url}/topic2`}>topic2</Link>
      </li>
    </ul>
    <Switch>
      <Route path={`${match.url}/topic1`}>
        <div>topic1</div>
      </Route>
      <Route path={`${match.url}/topic2`}>
        <div>topic2</div>
      </Route>
    </Switch>
  </>
}

export default Topic