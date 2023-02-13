import React from 'react';
import Card from './Card';

function ProjectList () {
  const projects = [
      {
        id: 1,
        type: 'school project',
        name: 'Booki',
        languages: ['html css'],
        languagesIcons: ['fab fa-html5','fab fa-css3-alt'],
        source: 'https://github.com/vitinolo/thibautlenoir_2_20092021',
        info: 'Transformez une maquette en site web avec HTML & CSS', 
      },
      {
        id: 2,
        type: 'school project',
        name: 'Ohmyfood',
        languages: ['html css'],
        languagesIcons: ['fab fa-css3-alt', 'fab fa-github', 'fab fa-sass'],
        source: 'https://github.com/vitinolo/ThibautLenoir_3_20112021',
        info: 'Dynamisez une page web avec des animations CSS.',
      },
      {
        id: 3,
        type: 'school project',
        name: 'La chouette',
        languages: ['SEO css'],
        languagesIcons: ['fab fa-html5','fab fa-css3-alt'],
        source: 'https://github.com/vitinolo/P4',
        info: 'Optimisez un site web existant.',
      },
      {
        id: 4,
        name: 'Kanap',
        type: 'school project',
        languages: ['javascript API'],
        languagesIcons: ['fab fa-js'],
        source: 'https://github.com/vitinolo/p5_kanap',
        info: 'Construisez un site e-commerce en JavaScript.',
      },
      {
        id: 5,
        name: 'Piiquantes',
        type: 'school project',
        languages: ['backend API'],
        languagesIcons: ['fab fa-js','fab fa-node-js', 'fab fa-css3-alt'],
        source: 'https://github.com/vitinolo/p6',
        info: "Construisez une API sécurisée pour une application d'avis gastronomiques.",
      },
      {
        id: 6,
        name: 'Groupomania',
        type: 'school project',
        languages: ['javascript react css'],
        languagesIcons: ['fab fa-js','fab fa-react','fab fa-css3-alt'],
        source: 'https://github.com/vitinolo/P7_Creez_un_reseau_social_d_entreprise',
        info: "Créez un réseau social d'entreprise.",
      },
      {
        id: 7,
        name: 'Sky drone air',
        type: 'own project',
        languages: ['javascript react css'],
        languagesIcons: ['fab fa-js','fab fa-react','fab fa-css3-alt'],
        source: 'https://skydroneair.netlify.app/',
        info: 'Site drône.',
      },
    ];
    return (
        <div className='projectList'>  
            { projects.map((project) =>(
                <Card 
                    key={project.id}
                    name={project.name}
                    type={project.type}
                    languages={project.languages}
                    languagesIcon={project.languagesIcons}
                    source={project.source}
                    info={project.info}
                />
              ))
            }        
        </div>
    );
};

export default ProjectList;