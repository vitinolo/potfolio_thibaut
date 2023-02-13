import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import Light from '../components/Light';
import ProjectList from '../components/ProjectList';

const Projects = () => {
    return (
        <div className='projects'>
            <VisibilityNav />
            <Social />
            <Light />
            <div className='projectsContent'>
                <ProjectList />
            </div>
        </div>
    );
};

export default Projects;