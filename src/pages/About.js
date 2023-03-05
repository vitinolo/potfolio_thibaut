import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import Light from '../components/Light';
import Languages from '../components/LanguagesAbout';
import Skills from '../components/SkillsAbout';
import SoftSkills from '../components/SoftSkillsAbout';
import Hobbies from '../components/HobbiesAbout';

const About = () => {
    return (
        <div className='about'>
            <VisibilityNav />
            <Social />
            <div className='aboutContent'>
                <h1>En perpétuelle recherche de nouvelles compétences pour réaliser des projets toujours plus aboutis.</h1>
                <div className="wrapper">
                    <Languages />
                    <Skills />
                    <SoftSkills />
                    <Hobbies />
                </div>    
            </div>
            <Light />
        </div>
    );
};

export default About;