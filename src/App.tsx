import React, {Component} from 'react';
import Nav from './components/elements/Nav';
import Content from './components/Content';
import './assets/styles/main.scss';

let navScrollFunc: Function;
let contentScrollFunc: Function;
let lastScroll = Date.now();

interface AppState {
}


class App extends Component <{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
    };
  }

  scrollFunc = () => {
    let time = Date.now();
    if(lastScroll + 100 <= time) {
      lastScroll = time;
        if(navScrollFunc !== undefined) {
          navScrollFunc()
        }
        if(contentScrollFunc !== undefined) {
          contentScrollFunc();
        }
      }
  }

  componentDidMount() { 
    let maybeMyElement = document.getElementById('app') as HTMLElement;
    maybeMyElement.addEventListener("scroll", this.scrollFunc);
  }

  setNavScrollFunc = (func: Function) => {
    navScrollFunc = func;
  }

  setContentScrollFunc = (func: Function) => {
    contentScrollFunc = func;
  }

  render () {
    return(
      <div className="App" id="app">
        <div className="nav-spacer" />
        <Nav setFunc={this.setNavScrollFunc}/>
        <Content setFunc={this.setContentScrollFunc}/>
      </div>
    );
  }
}

export default App;
