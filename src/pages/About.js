import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutContent'>
                <VisibilityNav />
                <Social />
                
            </div>
        </div>
    );
};

export default About;