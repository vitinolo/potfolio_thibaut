import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import Card from '../components/Card';
import Light from '../components/Light';

const Projects = () => {
    return (
        <div className='projects'>
            <VisibilityNav />
            <Social />
            <Light />
            <div className='projectsContent'>
                <Card />
            </div>
        </div>
    );
};

export default Projects;