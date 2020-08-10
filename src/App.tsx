import React, {Component} from 'react';
import Nav from './components/elements/Nav';
import Content from './components/Content';
import './assets/styles/main.scss';

interface AppState {
}

const sections: any[] = [
  {name: 'Section 0', id: 'section-0'},
  {name: 'Section 1', id: 'section-1'},
  {name: 'Section 2', id: 'section-2'},
  {name: 'Section 3', id: 'section-3'},
  {name: 'Section 4', id: 'section-4'},
  {name: 'Section 5', id: 'section-5'}
];

class App extends Component <{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
    };
  }

  render () {
    return(
      <div className="App" id="app">
        <Nav sections={sections}/>
        <Content sections={sections}/>
      </div>
    );
  }
}

export default App;
