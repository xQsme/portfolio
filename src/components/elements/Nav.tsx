import React, {Component} from 'react';
import About from '@material-ui/icons/AccountCircle';
import Skills from '@material-ui/icons/Build';
import Technologies from '@material-ui/icons/Settings';
import Projects from '@material-ui/icons/Dashboard';
import Contacts from '@material-ui/icons/Chat';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';


let mainNavLinks: any = [];
let maybeMyElement: HTMLElement = document.getElementById('app') as HTMLElement;

interface NavProps {
}

interface NavState {
    currentSection: number,
    expanded: boolean,
}

class Nav extends Component <NavProps, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentSection: 0,
      expanded: false,
    };
  }

  scrollFunc = (event: any) => {
    let fromTop = maybeMyElement.scrollTop;
  
    mainNavLinks.forEach((link: any, index: number) => {
      let section = document.querySelector(link.hash);
      if(section && section.offsetTop <= (fromTop + 50)) {
        this.setState({currentSection: index})
        return;
      }
    });
  }

  componentDidMount() { 
    mainNavLinks = document.querySelectorAll(".nav .nav-element a");
    maybeMyElement = document.getElementById('app') as HTMLElement;
    maybeMyElement.addEventListener("scroll", this.scrollFunc);
  }

  scrollTo = (index: number) => {
    maybeMyElement.removeEventListener("scroll", this.scrollFunc);
    this.setState({currentSection: index});
    setTimeout(() => {
      maybeMyElement.addEventListener("scroll", this.scrollFunc);
    }, 500);
  }

  toggleExpanded = () => {
    const { expanded } = this.state;
    this.setState({expanded: !expanded});
    setTimeout(() => {
      let fromTop = maybeMyElement.scrollTop;
  
      mainNavLinks.forEach((link: any, index: number) => {
        let section = document.querySelector(link.hash);
        if(section && section.offsetTop <= (fromTop + 50)) {
          this.setState({currentSection: index})
          return;
        }
      });
    }, 300);
  }

  render () {
    const { currentSection, expanded } = this.state;
    return(
    <div className={"nav-container" + (expanded ? '' : ' shrinked')}>
        <div className="nav">
          <div className="nav-border-main" />
          <div className="nav-border-selected" style={{marginTop: currentSection*30 + 'px'}} />
          <div className={"nav-element" + (currentSection === 0 ? " active" : "")}>
              <div className="nav-border"/>
              <a href="#about" onClick={() => this.scrollTo(0)}>
                  <p className="nav-entry"><About /><span className="nav-word">About Me</span></p>
              </a>
          </div>
          <div className={"nav-element" + (currentSection === 1 ? " active" : "")}>
              <div className="nav-border"/>
              <a href="#skills" onClick={() => this.scrollTo(1)}>
              <p className="nav-entry"><Skills /><span className="nav-word">Skills</span></p>
              </a>
          </div>
          <div className={"nav-element" + (currentSection === 2 ? " active" : "")}>
              <div className="nav-border"/>
              <a href="#technologies" onClick={() => this.scrollTo(2)}>
              <p className="nav-entry"><Technologies /><span className="nav-word">Technologies</span></p>
              </a>
          </div>
          <div className={"nav-element" + (currentSection === 3 ? " active" : "")}>
              <div className="nav-border"/>
              <a href="#projects" onClick={() => this.scrollTo(3)}>
              <p className="nav-entry"><Projects /><span className="nav-word">Projects</span></p>
              </a>
          </div>
          <div className={"nav-element" + (currentSection === 4 ? " active" : "")}>
              <div className="nav-border"/>
              <a href="#contacts" onClick={() => this.scrollTo(4)}>
              <p className="nav-entry"><Contacts /><span className="nav-word">Contacts</span></p>
              </a>
          </div>
        </div>
        {expanded ? (
          <Left onClick={this.toggleExpanded} className="mobile-nav-expand" />
        ) : (
          <Right onClick={this.toggleExpanded} className="mobile-nav-expand" />
        )}
    </div>
    );
  }
}

export default Nav;
