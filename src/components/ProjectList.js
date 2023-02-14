import React from 'react';
import Card from './Card';

function ProjectList () {

  const projects = [
      {
        id: 1,
        name: 'Booki',
        picture: 'img/p2_portfolio.png',
        type: "école.",
        languages: ['html css.'],
        source: 'https://github.com/vitinolo/thibautlenoir_2_20092021',
        info: 'Transformez une maquette en site web avec HTML & CSS.', 
      },
      {
        id: 2,
        name: 'Ohmyfood',
        picture: '/img/p3_portfolio.png',
        type: "école.",
        languages: ['html css.'],
        source: 'https://github.com/vitinolo/ThibautLenoir_3_20112021',
        info: 'Dynamisez une page web avec des animations CSS.',
      },
      {
        id: 3,
        name: 'La chouette',
        picture: '/img/p4_portfolio.png',
        type: "école.",
        languages: ['SEO css.'],
        source: 'https://github.com/vitinolo/P4',
        info: 'Optimisez un site web existant.',
      },
      {
        id: 4,
        name: 'Kanap',
        picture: '/img/p5_portfolio.png',
        type: "école.",
        languages: ['javascript API.'],
        source: 'https://github.com/vitinolo/p5_kanap',
        info: 'Construisez un site e-commerce en JavaScript.',
      },
      {
        id: 5,
        name: 'Piiquantes',
        picture: '/img/p6_portfolio.webp',
        type: "école.",
        languages: ['backend API.'],
        source: 'https://github.com/vitinolo/p6',
        info: "Construisez une API sécurisée pour une application d'avis gastronomiques.",
      },
      {
        id: 6,
        name: 'Groupomania',
        picture: '/img/p7_portfolio.webp',
        type: "école.",
        languages: ['javascript react css.'],
        source: 'https://github.com/vitinolo/P7_Creez_un_reseau_social_d_entreprise',
        info: "Créez un réseau social d'entreprise.",
      },
      {
        id: 7,
        name: 'Sky drone air',
        picture: '/img/skydroneair_portfolio.png',
        type: 'individuel.',
        languages: ['javascript react css.'],
        source: 'https://skydroneair.netlify.app/',
        info: "Création d'un site de prise de vue par drone.",
      },
    ];
    return (
      <>
        <h1>Projets</h1> 
        <div className='projectList'> 
            { projects.map((project) =>(
                <Card 
                    key={project.id}
                    name={project.name}
                    type={project.type}
                    picture={project.picture}
                    languages={project.languages}
                    languagesIcon={project.languagesIcons}
                    source={project.source}
                    info={project.info}
                />
              ))
            }        
        </div>
      </>
    );
};

export default ProjectList;