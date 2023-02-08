import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';

const About = () => {
    return (
        <div className='about'>
            <VisibilityNav />
            <Social />
            <div className='aboutContent'>
                <h1>En perpétuelle recherche de nouveaux défis et de nouvelles compétences pour réaliser des projets toujours plus aboutis.</h1>
                <div className="wrapper">
                    <div className='languages'>
                        <h1>Langages utilisés :</h1>
                        <div className="item"><i class="fab fa-css3-alt"></i> Css3</div>
                        <div className="item"><i class="fab fa-html5"></i> Html5</div>
                        <div className="item"><i class="fab fa-js-square"> Javascript</i></div>
                        <div className="item"><i class="fab fa-react fa-spin"></i> React.js</div>
                        <div className="item"><i class="fab fa-node-js"> Node.js</i></div>
                    </div>
                    <div className='skills'>
                        <h1>Skills :</h1>
                        <div className="item"><i class="fab fa-github"> Github</i></div>
                        <div className="item">SEO</div>
                        <div className="item">MongoDB</div>
                        <div className="item">Vscode</div>
                        <div className="item">Postman</div>
                        <div className="item">Anglais</div>
                    </div>
                    <div className='hobbies'>
                        <h1>Hobbies :</h1>
                        <div className="item"><i class="fas fa-code"> Code</i></div>
                        <div className="item"><i class="fas fa-music"> Piano</i></div>
                        <div className="item"><i class="fas fa-palette"> Peinture</i></div>
                        <div className="item"><i class="fas fa-hiking"> Randonnée</i></div>
                        <div className="item">Touring</div>
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