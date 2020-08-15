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
import kensentme from '../assets/images/logo.svg';
import c4v from '../assets/images/c4v.png';
import flomics from '../assets/images/flomics.png';
import github from '../assets/images/github.png';
import linked from '../assets/images/linked.png';
import mail from '../assets/images/mail.png';
import Button from '@material-ui/core/Button';

let cards: any = [];
let tech: any = [];
let maybeMyElement: HTMLElement = document.getElementById('app') as HTMLElement;
let lastScrollTop = 0;
let animated = 0;

interface ContentState {
    currentSkill: number,
}

interface ContentProps {
    setFunc: Function,
}

class Content extends Component <ContentProps, ContentState> {
  constructor(props: any) {
    super(props);
    this.state = {
        currentSkill: -1,
    };
  }

    scrollFunc = (event: any) => {
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

    componentDidMount() {
        cards = document.querySelectorAll(".card-grid .card");
        tech = document.querySelectorAll(".technologies-container .technology");
        maybeMyElement = document.getElementById('app') as HTMLElement;
        this.props.setFunc(this.scrollFunc);
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
                    <div className="projects-container">
                        <div className="project">
                            <div className="project-image">
                                <img className="wider" src={flomics} alt="Flomics Bioinformatics Cloud" />
                            </div>
                            <h3>Flomics Bioinformatics Cloud</h3>
                            <div className="project-divider blue" />
                            <p>Flomics Bioinformatics Cloud extracts the most out of NGS data. It takes any kind of next-generation sequencing experiment data and, with 2 clicks, generates interpretable information. Everything in the cloud.</p>
                            <p>This Platform is comprised of a webserver written in Node.js and a client written in React.js, it is deployed on AWS Elastic Beanstalk and interacts with Amazon's S3, SQS, Lambda, EC2 and Batch services.</p>
                            <div className="project-filler" />
                            <a target="_blank" rel="noopener noreferrer" href="https://cloud.flomics.com/"><Button className="blue" variant="contained" color="primary">Website</Button></a>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src={qt} alt="Regenerator Location Problem" />
                            </div>
                            <h3>Regenerator Location Problem</h3>
                            <div className="project-divider green" />
                            <p>In optical networks, the strength of an optical signal deteriorates as it gets farther from the source due to transmission impairments in the fiber (attenuation, dispersion, cross-talk).
                            Therefore, it is necessary to regenerate the signals periodically using regenerators.</p>
                            <p>This project was developed in Qt C++, and it uses genetic algorithms to optimize the placement of regenerators in a network.</p>
                            <div className="project-filler" />
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/xQsme/RLP_Qt"><Button className="green" variant="contained" color="primary">Repository</Button></a>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src={kensentme} alt="Kensentme Forensics" />
                            </div>
                            <h3>Kensentme Forensics</h3>
                            <div className="project-divider red" />
                            <p>As a master's thesis subject I conducted a 9 month long internship in a local software company and developed this forensics platform based on the existing Autopsy platform, adapted into a server-client model and allowing collaboration out of the box.</p>
                            <p>This platform is comprised of a webserver written using the Quarkus Java framework and a client wirtten in React.js.</p>
                            <div className="project-filler" />
                            <Button className="red" variant="contained" color="primary" disabled>Unavailable</Button>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src={c4v} alt="Care 4 Value" />
                            </div>
                            <h3>Care 4 Value</h3>
                            <div className="project-divider blue" />
                            <p>The rise in healthcare costs is a major concern nowadays, especially for chronic diseases scenarios as the ones experienced in long-term healthcare units.
                                Thus, arranging for a platform that helps these healthcare units to monitor and visualize the costs and eventual life quality gains on a per patient basis is essential.</p>
                            <p>This platform is comprised of a webserver written using the Laravel PHP framework, and a mobile application written in React Native.</p>
                            <div className="project-filler" />
                            <a target="_blank" rel="noopener noreferrer" href="http://care4value.pt/"><Button className="blue" variant="contained" color="primary">Website</Button></a>
                        </div>
                    </div>
                </section>
                <section id="contacts">
                    <div className="section-title">
                        <h1><Contacts />Contacts</h1>
                    </div>
                    <div className="contacts-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/xQsme" className="contact gradient1">
                            <img src={github} alt="GitHub" />
                            <div className="contact-divider" />
                            <div className="contact-header-container">
                                <h3>GitHub</h3>
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pedro-ferreira-5114b8167/" className="contact gradient2">
                            <img src={linked} alt="LinkedIn" />
                            <div className="contact-divider" />
                            <div className="contact-header-container">
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:pedro-ferreira92@hotmail.com" className="contact gradient3">
                            <img src={mail} alt="E-mail" />
                            <div className="contact-divider" />
                            <div className="contact-header-container">
                                <h3>E-mail</h3>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;
