import React, {Component} from 'react';
import About from '@material-ui/icons/AccountCircle';
import Skills from '@material-ui/icons/Build';
import Technologies from '@material-ui/icons/Settings';
import Projects from '@material-ui/icons/Dashboard';
import Contacts from '@material-ui/icons/Chat';
import me from '../assets/images/me.jpg';
import linux from '../assets/images/linux.png';
import front from '../assets/images/front.png';
import back from '../assets/images/back.png';
import services from '../assets/images/services.png';
import node from '../assets/images/node.svg';
import react from '../assets/images/react.png';
import qt from '../assets/images/qt.png';
import sass from '../assets/images/sass.svg';
import arch from '../assets/images/arch.png';
import aws from '../assets/images/aws.png';
import quarkus from '../assets/images/quarkus.png';
import git from '../assets/images/git.png';

let cards: any = [];
let tech: any = [];
let maybeMyElement: HTMLElement = document.getElementById('app') as HTMLElement;
let lastScrollTop = 0;
let lastScroll = Date.now();
let animated = 0;

interface ContentState {
    currentSkill: number,
}

interface ContentProps {
}

class Content extends Component <ContentProps, ContentState> {
  constructor(props: any) {
    super(props);
    this.state = {
        currentSkill: -1,
    };
  }

  scrollFunc = (event: any) => {
        let time = Date.now();
        if(lastScroll + 100 <= time) {
            lastScroll = time;
            let fromTop = maybeMyElement.scrollTop;
            var st = window.pageYOffset || maybeMyElement.scrollTop;
            if(maybeMyElement.offsetWidth <= 475){
                if (st > lastScrollTop){
                    let found = false;
                    cards.forEach((card: any, index: number) => {
                    if(card.offsetTop <= (fromTop + card.offsetHeight/3*2) && (card.offsetTop + card.offsetHeight/3) > fromTop) {
                        this.setState({currentSkill: index})
                        found = true;
                        return;
                    }
                    });
                    if(!found) {
                        this.setState({currentSkill: -1})
                    }
                } else {
                    let found = false;
                    cards.forEach((card: any, index: number) => {
                    if(card.offsetTop <= (fromTop + card.offsetHeight) && (card.offsetTop + card.offsetHeight/3) > fromTop) {
                        this.setState({currentSkill: index})
                        found = true;
                        return;
                    }
                    });
                    if(!found) {
                        this.setState({currentSkill: -1})
                    }
                }
            }
            tech.forEach((t: HTMLElement) => {
                if(!t.classList.contains('animated') && (t.offsetTop - maybeMyElement.offsetHeight) <= fromTop) {
                    let right = false;
                    if(maybeMyElement.offsetWidth > 1400) {
                        if(animated < 4) {
                            right = true;
                        }
                        //4 per row
                    } else if(maybeMyElement.offsetWidth > 800) {
                        if(animated < 3 || animated > 5) {
                            right = true;
                        }
                        //3 per row
                    } else if(maybeMyElement.offsetWidth > 475) {
                        if(animated < 2 || animated > 3 || animated > 5) {
                            right = true;
                        }
                        //2 per row
                    } else {
                        if(animated % 2 === 0) {
                            right = true;
                        }
                        //1 per row
                    }
                    if(right) {
                        t.classList.add('animate-right', 'animated');
                    } else {
                        t.classList.add('animate-left', 'animated');
                    }
                    animated++;
                }
            });

        lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  componentDidMount() {
    cards = document.querySelectorAll(".card-grid .card");
    tech = document.querySelectorAll(".technologies-container .technology");
    maybeMyElement = document.getElementById('app') as HTMLElement;
    maybeMyElement.addEventListener("scroll", this.scrollFunc);
    let fromTop = maybeMyElement.scrollTop;
    tech.forEach((t: HTMLElement) => {
        if(!t.classList.contains('animated') && (t.offsetTop - maybeMyElement.offsetHeight) <= fromTop) {
            let right = false;
            if(maybeMyElement.offsetWidth > 1400) {
                if(animated < 4) {
                    right = true;
                }
                //4 per row
            } else if(maybeMyElement.offsetWidth > 800) {
                if(animated < 3 || animated > 5) {
                    right = true;
                }
                //3 per row
            } else if(maybeMyElement.offsetWidth > 475) {
                if(animated < 2 || animated > 3 || animated > 5) {
                    right = true;
                }
                //2 per row
            } else {
                if(animated % 2 === 0) {
                    right = true;
                }
                //1 per row
            }
            if(right) {
                t.classList.add('animate-right', 'animated');
            } else {
                t.classList.add('animate-left', 'animated');
            }
            animated++;
        }
    });
  }

  render () {
    const { currentSkill } = this.state;
    return(
        <div className="content">
            <section id="about">
                <div className="side-by-side">
                    <img src={me} alt="me" className="me" />
                    <div className="about-container">
                        <div className="section-title">
                            <h1><About />About Me</h1>
                        </div>
                        <p className="title">Name</p>
                        <p>Pedro Ferreira</p>
                        <p className="title">Nationality</p>
                        <p>Portuguese</p>
                        <p className="title">Occupation</p>
                        <p>Fullstack Web Developer</p>
                        <p className="title">Education</p>
                        <p>Computer Engineering Bachelor</p>
                        <p>Cybersecurity Master's Degree</p>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="section-title">
                    <h1><Skills />Skills</h1>
                </div>
                <div className="card-grid">
                    <div className="card">
                        <div className={"card__background" + (currentSkill === 0 ? ' active' : '')} style={{backgroundImage: 'url(' + front + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Frontend Development</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className={"card__background" + (currentSkill === 1 ? ' active' : '')} style={{backgroundImage: 'url(' + back + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Backend Development</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className={"card__background" + (currentSkill === 2 ? ' active' : '')} style={{backgroundImage: 'url(' + services + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Service Integration</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className={"card__background" + (currentSkill === 3 ? ' active' : '')} style={{backgroundImage: 'url(' + linux + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Operating Systems</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="technologies">
                <div className="section-title">
                    <h1><Technologies />Technologies</h1>
                </div>
                <div className="technologies-container">
                    <div className="technology enter">
                        <img src={react} alt="React.js" />
                        <h3>React.js</h3>
                    </div>
                    <div className="technology enter">
                        <img src={node} alt="Node.js" />
                        <h3>Node.js</h3>
                    </div>
                    <div className="technology enter">
                        <img src={quarkus} alt="Quarkus" />
                        <h3>Quarkus</h3>
                    </div>
                    <div className="technology enter">
                        <img src={qt} alt="Qt" />
                        <h3>Qt</h3>
                    </div>
                    <div className="technology enter">
                        <img src={sass} alt="Sass" />
                        <h3>Sass</h3>
                    </div>
                    <div className="technology enter">
                        <img src={git} alt="Git" />
                        <h3>Git</h3>
                    </div>
                    <div className="technology enter">
                        <img src={aws} alt="AWS" />
                        <h3>AWS</h3>
                    </div>
                    <div className="technology enter">
                        <img src={arch} alt="Linux" />
                        <h3>Linux</h3>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="section-title">
                    <h1><Projects />Projects</h1>
                </div>
                <p>
                Minima beatae voluptatibus numquam temporibus. Fugit aut nobis iste. Sint est distinctio fugit velit dolor accusamus eaque ut. Aut corrupti ut nihil porro quas id dicta quia. Et impedit ut soluta labore consequatur possimus dolores.
                </p>
                <p>
                Id et quo cupiditate saepe. Harum incidunt autem dolorum sed eius dignissimos enim et. Id itaque voluptatem sint asperiores minus voluptatum.
                </p>
                Consectetur occaecati omnis voluptas blanditiis. Deleniti dolores iusto nulla delectus. Dolorum nihil expedita velit doloribus qui quas. Eaque illum impedit neque libero neque itaque qui. Illo expedita vitae qui omnis officiis et qui sit. Totam aut facere commodi magnam autem aut.
                <p>
                Nam molestiae ex qui alias. Quos voluptates reiciendis nulla sit suscipit modi. Rerum quis ipsa facilis non laborum dolor qui soluta.
                </p>
                <p>
                Doloremque aliquam qui quisquam atque vero. Sed sequi inventore aut. Dolor cupiditate cupiditate voluptatem eligendi quo. Odit molestiae similique sapiente nulla possimus voluptas. Iste dolorem a non quia eaque temporibus rerum similique.
                </p>
            </section>
            <section id="contacts">
                <div className="section-title">
                    <h1><Contacts />Contacts</h1>
                </div>
                <p>
                Minima beatae voluptatibus numquam temporibus. Fugit aut nobis iste. Sint est distinctio fugit velit dolor accusamus eaque ut. Aut corrupti ut nihil porro quas id dicta quia. Et impedit ut soluta labore consequatur possimus dolores.
                </p>
                <p>
                Id et quo cupiditate saepe. Harum incidunt autem dolorum sed eius dignissimos enim et. Id itaque voluptatem sint asperiores minus voluptatum.
                </p>
                Consectetur occaecati omnis voluptas blanditiis. Deleniti dolores iusto nulla delectus. Dolorum nihil expedita velit doloribus qui quas. Eaque illum impedit neque libero neque itaque qui. Illo expedita vitae qui omnis officiis et qui sit. Totam aut facere commodi magnam autem aut.
                <p>
                Nam molestiae ex qui alias. Quos voluptates reiciendis nulla sit suscipit modi. Rerum quis ipsa facilis non laborum dolor qui soluta.
                </p>
                <p>
                Doloremque aliquam qui quisquam atque vero. Sed sequi inventore aut. Dolor cupiditate cupiditate voluptatem eligendi quo. Odit molestiae similique sapiente nulla possimus voluptas. Iste dolorem a non quia eaque temporibus rerum similique.
                </p>
            </section>
        </div>
    );
  }
}

export default Content;
