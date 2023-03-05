import React from 'react';
import CardAbout from './CardAbout';

const SkillsAbout = () => {
    const skills = [
        {
            id:6,
            name:'Github',
        },
        {
            id:5,
            name:'SEO',
        },
        {
            id:4,
            name:'MongoDB',
        },
        {
            id:3,
            name:'Vscode',
        },
        {
            id:2,
            name:'Postman',
        },
        {
            id:1,
            name:'Anglais',
        },
    ]
    return (
        <div className='skills card'>
            <span>Skills:</span>
            {   skills
                    .map((skill) =>(
                        <CardAbout 
                            key={skill.id}
                            name={skill.name}
                        />
                    ))
            }
        </div>
    );
};

export default SkillsAbout;