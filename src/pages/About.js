import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import Light from '../components/Light';

const About = () => {
    return (
        <div className='about'>
            <VisibilityNav />
            <Social />
            <div className='aboutContent'>
                <h1>En perpétuelle recherche de nouvelles compétences pour réaliser des projets toujours plus aboutis.</h1>
                <div className="wrapper">
                    <div className='languages card slide-in-left'>
                        <span>Langages utilisés:</span>
                        <div className="item"><i class="fab fa-css3-alt"></i> Css3</div>
                        <div className="item"><i class="fab fa-html5"></i> Html5</div>
                        <div className="item"><i class="fab fa-js-square"></i> Javascript</div>
                        <div className="item"><i class="fab fa-react fa-spin"></i> React.js</div>
                        <div className="item"><i class="fab fa-node-js"></i> Node.js</div>
                    </div>
                    <div className='skills card'>
                        <span>Skills:</span>
                        <div className="item">Github</div>
                        <div className="item">SEO</div>
                        <div className="item">MongoDB</div>
                        <div className="item">Vscode</div>
                        <div className="item">Postman</div>
                        <div className="item">Anglais</div>
                    </div>
                    <div className='softSkills card'>
                        <span>Soft skills:</span>
                        <div className="item">adaptabilité</div>
                        <div className="item">auto-discipline</div>
                        <div className="item">empathie</div>
                        <div className="item">coopération</div>
                        <div className="item">résilience</div>
                        <div className="item">curiosité</div>
                        <div className="item">créativité</div>
                    </div>
                    <div className='hobbies card'>
                        <span>Hobbies:</span>
                        <div className="item">code</div>
                        <div className="item">piano</div>
                        <div className="item">peinture</div>
                        <div className="item">randonnée</div>
                        <div className="item">bricolage</div>
                    </div>
                </div>    
            </div>
            <Light />
        </div>
    );
};

export default About;