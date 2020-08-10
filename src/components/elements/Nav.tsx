import React, {Component} from 'react';

let mainNavLinks: any = [];
let maybeMyElement: HTMLElement = document.getElementById('app') as HTMLElement;

interface NavProps {
    sections: any[],
}

interface NavState {
    currentSection: number,
    sections: any[],
}

class Nav extends Component <NavProps, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sections: props.sections,
      currentSection: 0,
    };
  }

  scrollFunc = (event: any) => {
    let fromTop = maybeMyElement.scrollTop;
  
    mainNavLinks.forEach((link: any, index: number) => {
      let section = document.querySelector(link.hash);
      if (section.offsetTop <= (fromTop + 50)) {
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

  render () {
    const { currentSection, sections } = this.state;
    return(
    <div className="nav-container">
        <div className="nav">
        <div className="nav-border-main" />
        <div className="nav-border-selected" style={{marginTop: currentSection*30 + 'px'}} />
        {sections.map((section: any, index: number) => {
            return(
            <div key={section.id} className={"nav-element" + (currentSection === index ? " active" : "")}>
                <div className="nav-border"/>
                <a href={"#" + section.id} onClick={() => this.scrollTo(index)}>
                    <p>{section.name}</p>
                </a>
            </div>
            );
        })}
        </div>
    </div>
    );
  }
}

export default Nav;
