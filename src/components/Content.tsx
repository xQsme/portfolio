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

interface AppState {
}

interface ContentProps {
}

class Content extends Component <ContentProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  render () {
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
                        <div className="card__background" style={{backgroundImage: 'url(' + front + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Frontend Development</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__background" style={{backgroundImage: 'url(' + back + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Backend Development</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__background" style={{backgroundImage: 'url(' + services + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Service Integration</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__background" style={{backgroundImage: 'url(' + linux + ')'}}></div>
                        <div className="card__content">
                            <h3 className="card__heading">Linux Skills</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="technologies">
                <div className="section-title">
                    <h1><Technologies />Technologies</h1>
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
            <div className="content-spacer" />
        </div>
    );
  }
}

export default Content;
