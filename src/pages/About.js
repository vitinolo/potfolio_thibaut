import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';

const About = () => {
    return (
        <div className='about'>
            <VisibilityNav />
            <Social />
            <div className='aboutContent'>
                <h1>Je suis un jeune développeur, en quête de nouveaux défis et de nouvelles compétences pour réaliser des projets toujours plus aboutis.</h1>
                <p>Diplôme de "Développeur web" délivré par Openclassrooms en 2022.</p>
                <div>Depuis mes débuts je développe avec:</div>
            </div>
        </div>
    );
};

export default About;