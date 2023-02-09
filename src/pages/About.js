import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';

const About = () => {
    return (
        <div className='about'>
            <VisibilityNav />
            <Social />
            <div className='aboutContent'>
                <h1>En perpétuelle recherche de nouvelles compétences pour réaliser des projets toujours plus aboutis.</h1>
                <div className="wrapper">
                    <div className='languages card'>
                        <h1>Langages utilisés :</h1>
                        <div className="item"><i class="fab fa-css3-alt"></i> Css3</div>
                        <div className="item"><i class="fab fa-html5"></i> Html5</div>
                        <div className="item"><i class="fab fa-js-square"> Javascript</i></div>
                        <div className="item"><i class="fab fa-react fa-spin"></i> React.js</div>
                        <div className="item"><i class="fab fa-node-js"> Node.js</i></div>
                    </div>
                    <div className='skills card'>
                        <h1>Skills :</h1>
                        <div className="item">Github</div>
                        <div className="item">SEO</div>
                        <div className="item">MongoDB</div>
                        <div className="item">Vscode</div>
                        <div className="item">Postman</div>
                        <div className="item">Anglais</div>
                    </div>
                    <div className='softSkills card'>
                        <h1>Soft skills :</h1>
                        <div className="item">Code</div>
                        <div className="item">Piano</div>
                        <div className="item">Peinture</div>
                        <div className="item">Randonnée</div>
                    </div>
                </div>    
            </div>
            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x8'></div>
            <div class='light x9'></div>
        </div>
    );
};

export default About;