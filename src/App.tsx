import React, {Component} from 'react';
import Nav from './components/elements/Nav';
import Content from './components/Content';
import './assets/styles/main.scss';

interface AppState {
}


class App extends Component <{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
    };
  }

  render () {
    return(
      <div className="App" id="app">
        <Nav />
        <Content />
      </div>
    );
  }
}

export default App;
