import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NoMatch404 from './components/NoMatch404.js'
import ListingsMulti from './components/ListingsMulti.js'
import ShopsMulti from './components/ShopsMulti.js'


class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route path='/shops' component={ShopsMulti}/>
        <Route path='/listings' component={ListingsMulti}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
